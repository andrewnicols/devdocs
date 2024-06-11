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

export function Tick() {
    return (
        <td
            style={{
                textAlign: 'center',
            }}
        >
            &#10003;
        </td>
    );
}
export function Empty() {
    return <td>&nbsp;</td>;
}

export const TeamIntegration = () => ('Integration Team');
export const TeamTesting = () => ('Testing Maintainer');
export const TeamPlatformManager = () => ('Platform Manager');
export const TeamEducationManager = () => ('Head of Educational Solutions');
