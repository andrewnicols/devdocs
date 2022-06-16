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

const path = require('path');
const fs = require('fs');
const { readFile, writeFile } = require('fs/promises');
/* eslint-disable-next-line import/no-extraneous-dependencies */
const yaml = require('js-yaml');

(async () => {
    const filePath = path.join(path.dirname(__dirname), 'data');

    const migratedPages = yaml.load(await readFile(path.join(
        filePath,
        'migratedPages.yml',
    ), 'utf8'));

    const migratedPagesJson = JSON.stringify(migratedPages, null, '  ');
    writeFile(path.join(
        filePath,
        'migratedPages.json',
    ), migratedPagesJson);
})();
