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

import React from 'react';

import { getSourcesForDocument } from '@site/src/utils/MigratedPages';
import Link from '@docusaurus/Link';

export default function MigratedPageBanner({ metadata = {} }) {
    const source = metadata.source.replace(/^@site/, '');
    const migratedSources = getSourcesForDocument(source);

    if (migratedSources.length === 0) {
        return null;
    }

    return (
        <>
            {migratedSources.map((oldPagePath) => (
                <div key={oldPagePath}>
                    This page migrated from the legacy developer documentation. You can
                    <Link href={`https://docs.moodle.org/dev/index.php?action=history&title=${oldPagePath}`}>
                        {' '}
                        view the history of the old page
                    </Link>
                    .
                </div>
            ))}
        </>
    );
}
