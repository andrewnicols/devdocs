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
    root.children.unshift({
        type: 'import',
        value: 'import MoodlePageBanner from "@site/src/theme/MoodlePageBanner";',
    }, {
        type: 'import',
        value: 'import MigratedPageBanner from "@site/src/theme/MigratedPageBanner";',
    }, {
        type: 'jsx',
        // eslint-disable-next-line max-len
        value: '<MoodlePageBanner frontMatter={frontMatter} {...(typeof metadata !== "undefined" ? {metadata} : {} )}/>',
    });

    root.children.push({
        type: 'jsx',
        value: '<MigratedPageBanner {...(typeof metadata !== "undefined" ? {metadata} : {} )}/>',
    });
};
