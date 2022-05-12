---
title: Moodle 3.10
tags:
  - Release notes
  - Moodle 3.10
---

Release date: 9 November 2020

Here is [the full list of fixed issues in 3.10](https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.10%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true).

See our [New features page](https://docs.moodle.org/310/en/New_features) in the user documentation for an introduction to Moodle 3.10 with screenshots.

If you are upgrading from a previous version, please see [Upgrading](https://docs.moodle.org/dev/:en:Upgrading) in the user docs.

## Server requirements

These are just the minimum supported versions. We recommend keeping all of your software and operating systems up-to-date.

- Moodle upgrade:  Moodle 3.5 or later
- PHP version: minimum PHP 7.2.0 *Note: minimum PHP version has increased since Moodle 3.8*. PHP 7.3.x and 7.4.x are supported too. See [Moodle and PHP](https://docs.moodle.org/dev/Moodle_and_PHP) for details.
- PHP extension **mbstring** is required (it was previously only recommended)

### Database requirements

Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software.

| Database | Minimum version | Recommended |
| --- | --- | --- |
| [PostgreSQL](http://www.postgresql.org/) | 9.6  (increased since Moodle 3.9) | Latest |
| [MySQL](http://www.mysql.com/) | 5.7 (increased since Moodle 3.9) | Latest |
| [MariaDB](https://mariadb.org/) | 10.2.29 (increased since Moodle 3.8) | Latest |
| [Microsoft SQL Server](http://www.microsoft.com/en-us/server-cloud/products/sql-server/) | 2012 | Latest |
| [Oracle Database](http://www.oracle.com/us/products/database/overview/index.html) | 11.2 | Latest |

## Client requirements

### Browser support

Moodle is compatible with any standards compliant web browser. We regularly test Moodle with the following browsers:

Desktop:

- Chrome
- Firefox
- Safari
- Edge

*Note: Moodle 3.10 does NOT support Internet Explorer 11.*

Safari 7 and below has known compatibility issues with Moodle 3.10.

Mobile:

- MobileSafari
- Google Chrome

For the best experience and optimum security, we recommend that you keep your browser up to date. https://www.whatsmybrowser.org/

## Warning

If you have a large database, the upgrade step added in [MDL-69687](https://tracker.moodle.org/browse/MDL-69687) may be very, very slow. To avoid excessive down-time when you grade, you may want to test for this. A fix is being developed in [MDL-70285](https://tracker.moodle.org/browse/MDL-70285).

## Major features

### Download course content

- [MDL-69548](https://tracker.moodle.org/browse/MDL-69548) - Add ZipStream library to core
- [MDL-69549](https://tracker.moodle.org/browse/MDL-69549) - Create course content export API
- [MDL-69559](https://tracker.moodle.org/browse/MDL-69559) - Course content download - add site admin and course level settings, implement in course user interface

### Payment subsystem

- [MDL-69166](https://tracker.moodle.org/browse/MDL-69166) - Add payment as subsystem supporting payment gateways

### H5P updates and improvements

- [MDL-69087](https://tracker.moodle.org/browse/MDL-69087) - Add the option to personalize H5P styles
- [MDL-69207](https://tracker.moodle.org/browse/MDL-69207) - Add library file caching to h5p
- [MDL-69174](https://tracker.moodle.org/browse/MDL-69174) - Method of saving embedded H5P content grades in the gradebook
- [MDL-69520](https://tracker.moodle.org/browse/MDL-69520) - Add Example and Tutorial links to the H5P editor
- [MDL-68909](https://tracker.moodle.org/browse/MDL-68909) - Clean up temporary H5P editor files

### Content bank

- [MDL-69269](https://tracker.moodle.org/browse/MDL-69269) - Download content from the content bank
- [MDL-69270](https://tracker.moodle.org/browse/MDL-69270) - Replace content file from content bank
- [MDL-68688](https://tracker.moodle.org/browse/MDL-68688) - Add a notification when the content bank is empty
- [MDL-68975](https://tracker.moodle.org/browse/MDL-68975) - Add the author to the content bank "file details" view

### Quiz and questions

- [MDL-45002](https://tracker.moodle.org/browse/MDL-45002) - New quiz completion option: At least one (or N) attempt completed
- [MDL-66587](https://tracker.moodle.org/browse/MDL-66587) - Scrolling quiz timer
- [MDL-68562](https://tracker.moodle.org/browse/MDL-68562) - Qtype_essay: Adding file-size limit to the attachment files

### Accessibility improvements

- [MDL-68390](https://tracker.moodle.org/browse/MDL-68390) - WCAG 4.1.2: aria-hidden elements contain focusable elements
- [MDL-67687](https://tracker.moodle.org/browse/MDL-67687) - Add Behat step to verify WCAG A and WCAG AA compliance

### External tool (IMS-LTI)

- [MDL-67473](https://tracker.moodle.org/browse/MDL-67473) - LTI Advantage: Content Item flow to support creating multiple links
- [MDL-67301](https://tracker.moodle.org/browse/MDL-67301) - Implement LTI 1.3 Dynamic Registration
- [MDL-66934](https://tracker.moodle.org/browse/MDL-66934) - LTI: support substitution parameter for course history

### Usability improvements

- [MDL-28501](https://tracker.moodle.org/browse/MDL-28501) - For folder resource, allow files to be opened in the browser rather than being downloaded
- [MDL-65959](https://tracker.moodle.org/browse/MDL-65959) - Let users define their preferred backpack
- [MDL-56041](https://tracker.moodle.org/browse/MDL-56041) - Cleanup custom 404 page and more easily support custom 50x error pages
- [MDL-69192](https://tracker.moodle.org/browse/MDL-69192) - Assignment grading page: "Changes saved" should not be modal dialog
- [MDL-33981](https://tracker.moodle.org/browse/MDL-33981) - Add ability to copy to Equella repository
- [MDL-60621](https://tracker.moodle.org/browse/MDL-60621) - Improvement of modal UI when modal exceeds the height of the browser
- [MDL-53966](https://tracker.moodle.org/browse/MDL-53966) - Lesson: Allow maximum number of attempts to be unlimited
- [MDL-69613](https://tracker.moodle.org/browse/MDL-69613) - Grade report single view - confirm message if Override None is selected
- [MDL-69454](https://tracker.moodle.org/browse/MDL-69454) - Use a consistent search input field across all Moodle searches
- [MDL-67278](https://tracker.moodle.org/browse/MDL-67278) - Use autocomplete widget for course category selector
- [MDL-68107](https://tracker.moodle.org/browse/MDL-68107) - Boost: Make images in topic descriptions scale with the browser window
- [MDL-68702](https://tracker.moodle.org/browse/MDL-68702) - Option to not include legacy course files in backup and restore process
- [MDL-69630](https://tracker.moodle.org/browse/MDL-69630) - Social activity course format should allow for using the activity chooser
- [MDL-63387](https://tracker.moodle.org/browse/MDL-63387) - Show original role name of renamed roles when enrolling users

## Other highlights

### Functional changes

- [MDL-59510](https://tracker.moodle.org/browse/MDL-59510) - Keep OAuth 2 connections alive across users' sessions
- [MDL-66716](https://tracker.moodle.org/browse/MDL-66716) - Timeline block shows incorrect date of due items
- [MDL-48391](https://tracker.moodle.org/browse/MDL-48391) - tool_uploadcourse should check if enrolment method can be disabled/deleted
- [MDL-69739](https://tracker.moodle.org/browse/MDL-69739) - User tours: Add tour-level CSS selector
- [MDL-69464](https://tracker.moodle.org/browse/MDL-69464) - Option to allow HTML in the page headings (skip applying format_string)
- [MDL-67419](https://tracker.moodle.org/browse/MDL-67419) - Set language in user profile during account auto-creation based on browser language instead of admin setting
- [MDL-37745](https://tracker.moodle.org/browse/MDL-37745) - Control the display of available spaces in limited choices

### For administrators

- [MDL-67211](https://tracker.moodle.org/browse/MDL-67211) - Tasks: Show information about running tasks, allow tasks to be disabled
- [MDL-45849](https://tracker.moodle.org/browse/MDL-45849) - New capability to self enrol in course
- [MDL-65451](https://tracker.moodle.org/browse/MDL-65451) - User upload via CLI
- [MDL-69307](https://tracker.moodle.org/browse/MDL-69307) - Add CLI script to restore a course from backup file
- [MDL-69583](https://tracker.moodle.org/browse/MDL-69583) - Add import to tool_customlang
- [MDL-69582](https://tracker.moodle.org/browse/MDL-69582) - Add export to tool_customlang
- [MDL-69260](https://tracker.moodle.org/browse/MDL-69260) - Add option to show only contributed plugins in uninstall script
- [MDL-69513](https://tracker.moodle.org/browse/MDL-69513) - Add ability to add dkim signatures using phpmailer
- [MDL-69265](https://tracker.moodle.org/browse/MDL-69265) - Have a way to append fixed arbitrary headers to all emails
- [MDL-69600](https://tracker.moodle.org/browse/MDL-69600) - Expose divertallemailsto and divertallemailsexcept in the admin settings GUI
- [MDL-69718](https://tracker.moodle.org/browse/MDL-69718) - Add support for terabytes and petabytes in the display_size function

### Mobile

- [MDL-65976](https://tracker.moodle.org/browse/MDL-65976) - Add a new message provider for course completed
- [MDL-68406](https://tracker.moodle.org/browse/MDL-68406) - Add option for "sign-out" only for the Moodle app
- [MDL-68797](https://tracker.moodle.org/browse/MDL-68797) - Config setting for mobile file type exclusion list
- [MDL-67841](https://tracker.moodle.org/browse/MDL-67841) - Update mobile app connected message so it is not misleading when the user has not used the app for a time
- [MDL-69810](https://tracker.moodle.org/browse/MDL-69810) - WebService: Users should be able to contact the site's support via the Moodle App

### Performance

- [MDL-69760](https://tracker.moodle.org/browse/MDL-69760) - Performance improvement on Moodle Event table
- [MDL-60583](https://tracker.moodle.org/browse/MDL-60583) - external_tokens table will benefit from index on token field
- [MDL-68665](https://tracker.moodle.org/browse/MDL-68665) - Improve cacheability of assignfeedback_editpdf/stamps
- [MDL-64818](https://tracker.moodle.org/browse/MDL-64818) - Improve efficiency of blocks_for_region()
- [MDL-69746](https://tracker.moodle.org/browse/MDL-69746) - tool_replace: additional skip tables
- [MDL-68729](https://tracker.moodle.org/browse/MDL-68729) - Search: Allow query on one Solr server and indexing on another
- [MDL-68726](https://tracker.moodle.org/browse/MDL-68726) - Search: Stop Solr 'optimize' behaviour
- [MDL-68690](https://tracker.moodle.org/browse/MDL-68690) - Search: Allow Solr to add documents in batches

## Security improvements

- [MDL-66222](https://tracker.moodle.org/browse/MDL-66222) - Add admin options for how to handle detected viruses
- [MDL-68820](https://tracker.moodle.org/browse/MDL-68820) - Add a Referrer-Policy header setting to the security admin settings

## For developers

- [MDL-58931](https://tracker.moodle.org/browse/MDL-58931) - AWS Aurora MySQL support for Moodle
- [MDL-41492](https://tracker.moodle.org/browse/MDL-41492) - Allow alternate MUC cache config class (eg allow setup in pure $CFG / config.php)
- [MDL-38350](https://tracker.moodle.org/browse/MDL-38350) - PHP Warning when purging all caches: race condition?
- [MDL-68874](https://tracker.moodle.org/browse/MDL-68874) - New optional SQL debug mode which instruments SQL with the calling PHP code
- [MDL-69117](https://tracker.moodle.org/browse/MDL-69117) - Improve theme designer mode - part 2
- [MDL-67673](https://tracker.moodle.org/browse/MDL-67673) - Upgrade phpunit to 8.5.x
- [MDL-68564](https://tracker.moodle.org/browse/MDL-68564) - Update before_footer hook to allow for output to be added to the page
- [MDL-69050](https://tracker.moodle.org/browse/MDL-69050) - Rename terms to use inclusive language
- [MDL-65743](https://tracker.moodle.org/browse/MDL-65743) - Upgrade XMPPHP to latest version
- [MDL-69418](https://tracker.moodle.org/browse/MDL-69418) - Allow plugins to attach data to grade items during backup and restore
- [MDL-68928](https://tracker.moodle.org/browse/MDL-68928) - Add a way to decide what plugin will show in the activity chooser footer

### Web service additions and updates

- [MDL-67306](https://tracker.moodle.org/browse/MDL-67306) - Create API for grade category (gradebook)
- [MDL-55971](https://tracker.moodle.org/browse/MDL-55971) - Dataformat - Store to filearea support
- [MDL-69486](https://tracker.moodle.org/browse/MDL-69486) - Add user idnumber and gradeitem idnumber to gradereport_user_get_grade_items webservice
- [MDL-63805](https://tracker.moodle.org/browse/MDL-63805) - New Web Service mod_glossary_update_entry
- [MDL-69776](https://tracker.moodle.org/browse/MDL-69776) - New Web Service core_files_delete_draft_files
- [MDL-69283](https://tracker.moodle.org/browse/MDL-69283) - Allow specifying a timezone when calling WebServices
- [MDL-63806](https://tracker.moodle.org/browse/MDL-63806) - New Web Service mod_glossary_delete_entry
- [MDL-68845](https://tracker.moodle.org/browse/MDL-68845) - Create new Web Service for retrieving the user calendar via iCal
- [MDL-69577](https://tracker.moodle.org/browse/MDL-69577) - Add courseId and forumId info to mod_forum_get_discussion_posts web service

### Deprecations

- [MDL-67594](https://tracker.moodle.org/browse/MDL-67594) - Deprecate supports_recursion() & extend_lock() in the Lock API
- [MDL-67735](https://tracker.moodle.org/browse/MDL-67735) - Remove Bootstrap 2 and Bootstrap 4 alpha compatibility files
- [MDL-69238](https://tracker.moodle.org/browse/MDL-69238) - Final removal of lib/coursecatlib.php
- [MDL-63261](https://tracker.moodle.org/browse/MDL-63261) - Final deprecation of web services in message/externallib.php
- [MDL-62982](https://tracker.moodle.org/browse/MDL-62982) - Remove the lib/form/htmleditor.php element
- [MDL-63254](https://tracker.moodle.org/browse/MDL-63254) - Final deprecation of the events message_contact_blocked and message_contact_unblocked
- [MDL-63004](https://tracker.moodle.org/browse/MDL-63004) - Final deprecation: I navigate to "ITEM" node in "MAINNODE > PATH" behat step
- [MDL-55192](https://tracker.moodle.org/browse/MDL-55192) - Final deprecation of add_to_log()
- [MDL-63167](https://tracker.moodle.org/browse/MDL-63167) - Final deprecation of the gradingform_provider interface

### Component API updates

- [admin/tool/log/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/admin/tool/log/upgrade.txt)
- [backup/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/backup/upgrade.txt)
- [badges/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/badges/upgrade.txt)
- [cache/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/cache/upgrade.txt)
- [calendar/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/calendar/upgrade.txt)
- [course/format/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/course/format/upgrade.txt)
- [course/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/course/upgrade.txt)
- [grade/grading/form/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/grade/grading/form/upgrade.txt)
- [h5p/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/h5p/upgrade.txt)
- [lib/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/lib/upgrade.txt)
- [message/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/message/upgrade.txt)
- [mod/forum/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/mod/forum/upgrade.txt)
- [mod/glossary/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/mod/glossary/upgrade.txt)
- [mod/lti/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/mod/lti/upgrade.txt)
- [mod/quiz/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/mod/quiz/upgrade.txt)
- [question/behaviour/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/question/behaviour/upgrade.txt)
- [search/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/search/upgrade.txt)
- [theme/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/theme/upgrade.txt)
- [webservice/upgrade.txt](https://git.in.moodle.com/moodle/moodle/blob/master/webservice/upgrade.txt)

## See also

- [Moodle 3.9 release notes](https://docs.moodle.org/dev/Moodle_3.9_release_notes)

[fr:Notes de mise à jour de Moodle 3.10](https://docs.moodle.org/dev/fr:Notes_de_mise_à_jour_de_Moodle_3.10)
[es:Notas de Moodle 3.10](https://docs.moodle.org/dev/es:Notas_de_Moodle_3.10)
