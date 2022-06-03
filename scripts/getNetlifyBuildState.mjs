#!/usr/bin/env node
/**
 * Copyright (c) Moodle Pty Ltd.
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
 */
import { NetlifyAPI } from 'netlify';
import { getLogger } from './utils.js';
import { program } from 'commander';

const client = new NetlifyAPI(process.env.NETLIFY_API_SECRET);
const logger = getLogger();

const getBuildId = async (prNumber) => {
    const builds = await client.listSiteBuilds({
        site_id: '3c056055-e1bd-4cfd-8a02-ed35ab7aedfa',
    });
    const build = builds.find((data) => (data.sha === `pull/${prNumber}/head`));
    if (!build) {
        return null;
    }

    return client.getDeploy({ deploy_id: build.deploy_id });
};

const pollUntilReady = async (prNumber, timeout = 300) => {
    const startTime = Date.now();

    do {
        const build = await getBuildId(prNumber);
        logger.debug('Checking');

        if (build?.state === 'ready') {
            return build;
        }
    } while (((Date.now() - startTime) / 1000) < timeout);

    return null;
};

const poll = async (prNumber, timeout = 450) => {
    const deploy = await pollUntilReady(prNumber, timeout);
    if (!deploy) {
        logger.error(`Unable to find a build for ${prNumber}`);
        process.exit(2);
    }

    logger.debug(JSON.stringify(deploy, '  '));
    if (deploy.state === 'ready') {
        console.log(deploy);
        logger.info(`Build was successful and is available at ${deploy.deploy_ssl_url}`);
        process.exit(0);
    }

    logger.error('Unable to find a successful build');
    process.exit(1);
};

program
    .name('getNetlifyBuildState')
    .description('Get the Netlify Build State for a Pull Request')
    .version('1.0.0')
    .arguments('<pr> Pull Request Number')
    .action((pr) => {
        poll(pr);
    })
    .parse(process.argv);
