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

module.exports = () => (root) => {
    const attributes = [
        {
            type: 'mdxJsxAttribute',
            name: 'frontMatter',
            value: '{frontMatter}',
        },
    ];

    if (typeof metadata !== 'undefined') {
        attributes.push({
            type: 'mdxJsxAttribute',
            name: 'metadata',
            value: '{metadata}',
        });
    }

    root.children.unshift({
        type: 'mdxjsEsm',
        value: 'import MoodlePageBanner from "@site/src/theme/MoodlePageBanner";',
        data: {
            estree: {
                type: 'Program',
                body: [
                    {
                        type: 'ImportDeclaration',
                        specifiers: [
                            {
                                type: 'ImportDefaultSpecifier',
                                local: { type: 'Identifier', name: 'MoodlePageBanner' },
                            },
                        ],
                        source: {
                            type: 'Literal',
                            value: '@site/src/theme/MoodlePageBanner',
                            raw: "'@site/src/theme/MoodlePageBanner'",
                        },
                    },
                ],
                sourceType: 'module',
            },
        },
    }, {
        type: 'mdxJsxFlowElement',
        name: 'MoodlePageBanner',
        attributes,
    });
};
