"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7031],{22220:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),l=(a(67294),a(3905)),n=a(13904),s=["components"],i={title:"Moodle 3.1",tags:["Release notes","Moodle 3.1"],sidebar_position:-301,moodleVersion:"3.1"},m=void 0,p={unversionedId:"releases/3.1",id:"releases/3.1",title:"Moodle 3.1",description:"Release date: 23 May 2016",source:"@site/general/releases/3.1.md",sourceDirName:"releases",slug:"/releases/3.1",permalink:"/devdocs/general/releases/3.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.1",permalink:"/devdocs/general/tags/moodle-3-1"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654266188,formattedLastUpdatedAt:"03/06/2022",sidebarPosition:-301,frontMatter:{title:"Moodle 3.1",tags:["Release notes","Moodle 3.1"],sidebar_position:-301,moodleVersion:"3.1"},sidebar:"releaseNotes",previous:{title:"Moodle 3.2.9",permalink:"/devdocs/general/releases/3.2/3.2.9"},next:{title:"Moodle 3.1.1",permalink:"/devdocs/general/releases/3.1/3.1.1"}},d={},u=[{value:"Server requirements",id:"server-requirements",level:2},{value:"Database requirements",id:"database-requirements",level:3},{value:"Client requirements",id:"client-requirements",level:2},{value:"Browser support",id:"browser-support",level:3},{value:"Major features",id:"major-features",level:2},{value:"Highlights",id:"highlights",level:3},{value:"Forum",id:"forum",level:3},{value:"Assignment",id:"assignment",level:3},{value:"External tool (LTI)",id:"external-tool-lti",level:3},{value:"Feedback",id:"feedback",level:3},{value:"SCORM",id:"scorm",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Workshop",id:"workshop",level:3},{value:"Other activity modules",id:"other-activity-modules",level:3},{value:"Gradebook",id:"gradebook",level:3},{value:"Performance",id:"performance",level:3},{value:"Tagging",id:"tagging",level:3},{value:"Usability",id:"usability",level:3},{value:"Other improvements",id:"other-improvements",level:3},{value:"For administrators",id:"for-administrators",level:3},{value:"Security issues",id:"security-issues",level:2},{value:"For developers",id:"for-developers",level:2},{value:"Significant new areas",id:"significant-new-areas",level:3},{value:"Smaller new things",id:"smaller-new-things",level:3},{value:"Smaller changes in core APIs",id:"smaller-changes-in-core-apis",level:3},{value:"Themeability improvements",id:"themeability-improvements",level:3},{value:"Changes related to particular plugins",id:"changes-related-to-particular-plugins",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Translations",id:"translations",level:2}],h={toc:u};function k(e){var t=e.components,a=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,r.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 23 May 2016"),(0,l.kt)("p",null,"Here is ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.1"),"."),(0,l.kt)("p",null,"See our ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/31/en/New_features"},"New Features page")," for a more user-friendly introduction to Moodle 3.1 with screenshots."),(0,l.kt)("p",null,"If you are upgrading from previous version, make sure you read the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/31/en/Upgrading"},"Upgrading")," documentation."),(0,l.kt)("h2",{id:"server-requirements"},"Server requirements"),(0,l.kt)("p",null,"These are just the minimum supported versions. We recommend keeping all of your software up-to-date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Moodle upgrade:  Moodle 2.7 or later (if upgrading from earlier versions, you must upgrade to 2.7.14 as a first step)"),(0,l.kt)("li",{parentName:"ul"},"PHP version: minimum PHP 5.4.4 (always use latest PHP 5.4.x , 5.5.x or 5.6.x on Windows - ",(0,l.kt)("a",{parentName:"li",href:"http://windows.php.net/download/"},"http://windows.php.net/download/"),"). PHP 7.0.x is supported but has some ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_and_PHP7#Can_I_use_PHP7_yet.3F"},"engine limitations"),". PHP 7.1.x is not supported."),(0,l.kt)("li",{parentName:"ul"},"Ghostscript should be installed for pdf annotation."),(0,l.kt)("li",{parentName:"ul"},"Unoconv should be installed for file conversion used by pdf annotations (new in Moodle 3.1)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New requirement for Moodle 3.1 comparing to 3.0"),": PHP extension ",(0,l.kt)("tt",null,"xmlreader"))),(0,l.kt)("h3",{id:"database-requirements"},"Database requirements"),(0,l.kt)("p",null,"Moodle supports the following database servers. Again, version numbers are just the minimum supported version. We recommend running the latest stable version of any software."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.postgresql.org/"},"PostgreSQL")),(0,l.kt)("td",{parentName:"tr",align:null},"9.1"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mysql.com/"},"MySQL")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mariadb.org/"},"MariaDB")),(0,l.kt)("td",{parentName:"tr",align:null},"5.5.31"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.microsoft.com/en-us/server-cloud/products/sql-server/"},"Microsoft SQL Server")),(0,l.kt)("td",{parentName:"tr",align:null},"2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.oracle.com/us/products/database/overview/index.html"},"Oracle Database")),(0,l.kt)("td",{parentName:"tr",align:null},"10.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest")))),(0,l.kt)("h2",{id:"client-requirements"},"Client requirements"),(0,l.kt)("h3",{id:"browser-support"},"Browser support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Browser"),(0,l.kt)("th",{parentName:"tr",align:null},"Minimum version"),(0,l.kt)("th",{parentName:"tr",align:null},"Recommended version"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.google.com/intl/en_au/chrome/browser/"},"Google Chrome")),(0,l.kt)("td",{parentName:"tr",align:null},"30.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.mozilla.org/en-US/"},"Mozilla Firefox")),(0,l.kt)("td",{parentName:"tr",align:null},"25.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.apple.com/safari/"},"Apple Safari")),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://windows.microsoft.com/en-AU/internet-explorer/download-ie"},"Microsoft Internet Explorer")),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Latest"),(0,l.kt)("td",{parentName:"tr",align:null},"Version 10 is required for drag-and-drop upload of content from outside the browser into Moodle")))),(0,l.kt)("h2",{id:"major-features"},"Major features"),(0,l.kt)("h3",{id:"highlights"},"Highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53451"},"MDL-53451")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Competencies"},"Competencies")," support in Moodle"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52954"},"MDL-52954")," - Improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Assignment_activity"},"Assignment")," grading user interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31989"},"MDL-31989")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Global_search"},"Global Search")," API allows to search forums, wikis and other content throughout the whole site. ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Global_search"},"Installation and setup")," of SOLR server is required,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52002"},"MDL-52002")," - Significant performance improvements in gradebook calculations"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48012"},"MDL-48012")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Recycle_bin"},"Recycle bin"),' plugin is now part of standard Moodle distribution: allow instructors to "undo" deletions of course modules and courses. ',(0,l.kt)("a",{parentName:"li",href:"https://moodleassociation.org/"},"Moodle Users Association")," project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49279"},"MDL-49279"),' - Add support in moodle plugins for exporting "',(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_Mobile_Remote_add-ons"},"Mobile app addons"),'"')),(0,l.kt)("h3",{id:"forum"},"Forum"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-372"},"MDL-372")," - Allow to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Using_Forum#Pinned_posts"},'"pin" discussions')," to keep them always on the top of the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34160"},"MDL-34160")," - Allow forum email subject to be customised"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47365"},"MDL-47365")," - Add  ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Using_Forum#Permalinks"},"permalink")," option to forum posts"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51214"},"MDL-51214")," - Rename the News forum to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Announcements"},'"Announcements"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44087"},"MDL-44087")," - Forum does not observe message notification settings for digest emails"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53050"},"MDL-53050")," - Highlight the selected forum post when deep linking with a #anchor")),(0,l.kt)("h3",{id:"assignment"},"Assignment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52397"},"MDL-52397")," - Feedback for Assignments is not sent if the assignment grade timemodified setting was set to two days ago"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52596"},"MDL-52596")," - Add a 'maxperpage' site wide setting for grading table size (to mitigate broken grading pages in large courses)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52269"},"MDL-52269"),' - Not obvious to tell if an assignment is in blind marking if user holds the "mod/assign:viewblinddetails" capabilty'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52270"},"MDL-52270")," - Difficult to cross reference users with their blind identities"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-44598"},"MDL-44598")," - List student names on 'grant extension' screen"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52490"},"MDL-52490")," - Download selected assign submissions as a zip file"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52290"},"MDL-52290")," - EditPDF - Also show the total page number in the pagination"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52489"},"MDL-52489"),' - "Download all submissions as a zip" should maintain the folder structure in students submissions')),(0,l.kt)("h3",{id:"external-tool-lti"},"External tool (LTI)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52154"},"MDL-52154")," - Rework LTI admin screens"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45064"},"MDL-45064")," - Option to add preconfigured ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/External_tool_settings"},"external tool")," to the activity chooser"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52035"},"MDL-52035")," - Integrate LTI Provider support in Moodle as the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Publish_as_LTI_tool"},"Publish as LTI tool")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52821"},"MDL-52821")," - Compliance: Send tool_consumer_instance_description in LTI launch request")),(0,l.kt)("h3",{id:"feedback"},"Feedback"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53738"},"MDL-53738")," - Feedback activity module will be enabled by default in new 3.1 installations. If you are upgrading to 3.1 we recommend you to enable it manually."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52094"},"MDL-52094")," - Various improvements to UI and bug fixes, including:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Performance improvement to download responses as raw data in multiple formats (CSV, Excel, etc.) - now available on "Show responses" page instead of "Analysis"'),(0,l.kt)("li",{parentName:"ul"},"Allow any characters in labels, do not display empty labels"),(0,l.kt)("li",{parentName:"ul"},"Do not display empty pages"),(0,l.kt)("li",{parentName:"ul"},"Map frontpage feedback to multiple courses without leaving the form"),(0,l.kt)("li",{parentName:"ul"},"Improved display of automatic question numbers"),(0,l.kt)("li",{parentName:"ul"},'Disable "Response time" for anonymous feedbacks'),(0,l.kt)("li",{parentName:"ul"},"Use moodleforms to display feedback")))),(0,l.kt)("h3",{id:"scorm"},"SCORM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-45712"},"MDL-45712")," - Add Result field to the SCORM Interactions Report"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48680"},"MDL-48680")," - Add score and status submission events to SCORM activity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42473"},"MDL-42473")," - Add group support to SCORM activity")),(0,l.kt)("h3",{id:"quiz"},"Quiz"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52738"},"MDL-52738")," - Quiz attempt/review page should have a previous button to match next"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46092"},"MDL-46092")," - Add the OU styling of the Quiz navigation into Moodle core as the default"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46091"},"MDL-46091")," - Rationalise confirmations when you start a quiz"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52806"},"MDL-52806")," - Show right answers when manually grading automatically marked questions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53304"},"MDL-53304")," - Immediate feedback behaviours should not show a disabled check button when you can't use it")),(0,l.kt)("h3",{id:"workshop"},"Workshop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42190"},"MDL-42190")," - Option to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Using_Workshop"},"delete a workshop submission")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50794"},"MDL-50794")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Workshop_settings"},"Restricting file types as attachments")," to a workshop")),(0,l.kt)("h3",{id:"other-activity-modules"},"Other activity modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51306"},"MDL-51306")," - Folder: ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Folder_resource"},"Bulk download all files within a folder activity as ZIP file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52414"},"MDL-52414")," - Lesson: Allow Default Settings for ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Lesson_settings"},"Lesson Module Settings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51267"},"MDL-51267")," - URL/File: Make setting up a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/URL_resource_settings#General"},"URL"),"/",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/File_resource_settings#Uploading_files"},"File")," resource more obvious")),(0,l.kt)("h3",{id:"gradebook"},"Gradebook"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48634"},"MDL-48634")," - Option to rescale existing grades when changing max points"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52522"},"MDL-52522")," - grade_minmaxtouse should be respected for overridden categories"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51900"},"MDL-51900")," - Tab Down Grade Column in Single View of Gradebook"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52309"},"MDL-52309")," - Make Grade History report require user to submit parameters before the report starts running")),(0,l.kt)("h3",{id:"performance"},"Performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51374"},"MDL-51374")," - Do not purge entire databasemeta cache when there are structure changes (esp temp tables)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51603"},"MDL-51603")," - Refactor downloading of csv, ods, excel etc files in reports and exports across moodle to stream progressively"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34925"},"MDL-34925")," - Improve bulk user export performance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50385"},"MDL-50385")," - Performance improvement to the grade history report")),(0,l.kt)("h3",{id:"tagging"},"Tagging"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50851"},"MDL-50851")," - Introduce tag collections - ability to separate independent tag areas"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52252"},"MDL-52252")," - Add tags to modules (Resources and Activities)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-25742"},"MDL-25742")," - Allow to search wiki pages by tags"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51283"},"MDL-51283"),' - Rename "official" tags to "standard", allow admin to set for each tag area how to use standard tags'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16855"},"MDL-16855"),' - Add tag filtering to "Manage tags" page'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52707"},"MDL-52707")," - Allow tags to be combined")),(0,l.kt)("h3",{id:"usability"},"Usability"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27628"},"MDL-27628")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/Course_meta_link"},"Enrol meta:")," Possible to add multiple courses without leaving the form"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51818"},"MDL-51818")," - Move the profile 'Message' button to be next to the user picture"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52258"},"MDL-52258")," - Calendar now shows duration in calendar block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53043"},"MDL-53043")," - Move user search box above the students list in the manual enrolments popup"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35590"},"MDL-35590")," - Navigation block redesign to meet ARIA specification"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49963"},"MDL-49963")," - Allow to message all participants when there are more than one page in participants list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51354"},"MDL-51354")," - Help popup and improved name for events dropdown menu on the course and site logs pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53026"},"MDL-53026")," - Use inplace editable for editing cohort names"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51706"},"MDL-51706")," - Move plagiarism links to the top of the summary and full text outputs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53382"},"MDL-53382"),' - "Show all" link on participants page should be moved beneath the page switcher')),(0,l.kt)("h3",{id:"other-improvements"},"Other improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53057"},"MDL-53057")," - Add ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/31/en/File_system_repository#Using_a_File_System_repository_file"},"search feature to the File system repository")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48506"},"MDL-48506")," - Improve memcached cache store so that it is multi-site safe"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50661"},"MDL-50661"),' - Restyle "Clean" theme to use Logo and Header in Frontpage with smaller logo option in other pages.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36652"},"MDL-36652")," - When downloading an Excel spreadsheet of student logs, have the course short name included in the file name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53207"},"MDL-53207")," - Display stock avatar instead of own user picture from messages from fake users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51698"},"MDL-51698")," - Markup the crumb trail so search engines understand it and leverage it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53072"},"MDL-53072")," - Option to choose whether we include suspended users when auto-creating groups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52869"},"MDL-52869")," - Convert inline activity name edit to use the inplace editable element")),(0,l.kt)("h3",{id:"for-administrators"},"For administrators"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26935"},"MDL-26935")," - New capability to control role renaming"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28030"},"MDL-28030")," - Add config.php settings to allow plugins to rewrite output moodle_urls (eg clean / semantic urls)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52752"},"MDL-52752")," - Administrators can specify an alternate URL to use for MathJax"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52219"},"MDL-52219")," - Completion tracking & availability should default to on for new installs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52990"},"MDL-52990")," - Enable all emails to be themed, ie add 4 wrapper mustache templates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53260"},"MDL-53260")," - Option to display CLI upgrade messages in English"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52386"},"MDL-52386")," - Allow to control field for flagging enabled/disabled users in LDAP authentication (useful for Active Directory)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52383"},"MDL-52383"),' - Calendar "Days to look ahead" should allow intervals up to 1 year'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49934"},"MDL-49934")," - Admins or managers should be able to retrieve assignments info via get_assignments web service")),(0,l.kt)("h2",{id:"security-issues"},"Security issues"),(0,l.kt)("p",null,"There are no security issues included in this release, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/general/releases/3.0/3.0.4"},"Moodle 3.0.4 release notes")),(0,l.kt)("h2",{id:"for-developers"},"For developers"),(0,l.kt)("h3",{id:"significant-new-areas"},"Significant new areas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-31989"},"MDL-31989")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Search_API"},"Global Search")," API allows to index and search forums, wikis and other content throughout the whole site."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49279"},"MDL-49279"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50032"},"MDL-50032"),' - Add support in moodle plugins for exporting "',(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_Mobile_Remote_add-ons"},"Mobile app addons"),'"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53451"},"MDL-53451")," - Competencies support in Moodle (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Competency_API"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50887"},"MDL-50887")," - Implement plugins infrastructure for antivirus and create ClamAV plugin (",(0,l.kt)("a",{parentName:"li",href:"/docs/apis/plugintypes/antivirus"},"documentation"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51603"},"MDL-51603")," - New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Data_formats"},"Dataformat")," plugin type for downloading data as csv, ods, excel etc (eg from table_sql export)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50851"},"MDL-50851")," - Significant changes to Tags API, tag areas can now implement callbacks to display tagged items (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tag_API"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46891"},"MDL-46891")," - Upgrade to behat 3.x (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Acceptance_testing/Migrating_from_Behat_2.5_to_3.x_in_Moodle"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52954"},"MDL-52954")," - The mod_assign grading interface has been modified in multiple aspects, and the new page layout is quite different from many other Moodle pages. Check it carefully if you have a custom theme. There is some information available in the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Assignment_Grading_UX"},"Assignment Grading UX")," specs, particularly in section 2.0 of that document.")),(0,l.kt)("h3",{id:"smaller-new-things"},"Smaller new things"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51802"},"MDL-51802")," - Reusable element for inplace editing (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Inplace_editable"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30811"},"MDL-30811")," - Introduce notification stack to moodle sessions (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Notifications"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52237"},"MDL-52237")," - Add a callback to inject nodes in the user profile navigation (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Navigation_API#User_profile"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51324"},"MDL-51324")," - New course chooser element for moodleforms (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/lib/formslib.php_Form_Definition#autocomplete"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53311"},"MDL-53311")," - Reusable element for displaying tree similar to navigation tree (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tree"},"documentation"),")")),(0,l.kt)("h3",{id:"smaller-changes-in-core-apis"},"Smaller changes in core APIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52954"},"MDL-52954")," - file_storage class can now convert between office documents (",(0,l.kt)("a",{parentName:"li",href:"/docs/apis/subsystems/files#convert-between-file-formats-.28office-documents.29"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53274"},"MDL-53274")," - Throw exception (in developer mode) if page context is not set, otherwise it is easily missed in AJAX calls"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52826"},"MDL-52826"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52715"},"MDL-52715")," - Allow to use moodleforms in AJAX requests (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Fragment"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51718"},"MDL-51718")," - Allow to specify scheme in moodle_url"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51700"},"MDL-51700")," - Ajax service should clean the return values of the external functions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53962"},"MDL-53962")," - ",(0,l.kt)("strong",{parentName:"li"},"Changes to webservices XML-RPC API")," - it is now ",(0,l.kt)("strong",{parentName:"li"},"critical")," to specify parameters for XML-RPC calls in the correct order. Previously Zend may have been able to work out the order, our new implementation, at this stage, cannot.")),(0,l.kt)("h3",{id:"themeability-improvements"},"Themeability improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50464"},"MDL-50464")," - New renderer for RSS Client Block allows themes to customise its look")),(0,l.kt)("h3",{id:"changes-related-to-particular-plugins"},"Changes related to particular plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52013"},"MDL-52013")," - Allow mod_assign plugins to add calendar events"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48362"},"MDL-48362")," - Improve the enrol API to prevent logic in the UI (",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Enrolment_plugins#Standard_Editing_UI"},"documentation"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52996"},"MDL-52996")," - Allow Atto customisation for special-purpose plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52781"},"MDL-52781")," - Improved validation on user fields when creating users from external datasources"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53304"},"MDL-53304")," - Changes to interactive question behaviour may cause the unit tests for your question type to break if you have followed the common patter. You will need to make changes like ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/commit/81e47a35e8bb98a94ea88e45eee63dcda1b46f74#diff-d16a78021131604bb14ae59ebe6eeebbL235"},"this"),".")),(0,l.kt)("h3",{id:"deprecations"},"Deprecations"),(0,l.kt)("p",null,"For full list of deprecations refer to lib/upgrade.txt and upgrade.txt files in the folder where the particular plugin is located. Here are the most major deprecations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49414"},"MDL-49414")," - Remove deprecated web services"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48621"},"MDL-48621")," - Deprecate the old events system"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52207"},"MDL-52207")," - Delete Zend framework")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.1"},"Notes de mise \xe0 jour de Moodle 3.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.1"},"Notas de Moodle 3.1"))))}k.isMDXComponent=!0}}]);