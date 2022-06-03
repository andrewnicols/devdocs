"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[71557],{93946:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),l=(r(67294),r(3905)),i=r(13904),n=["components"],s={title:"Moodle Mobile 2.2 release notes",sidebar_label:"Moodle Mobile 2.2",tags:["Moodle App","Release notes"]},p=void 0,m={unversionedId:"app_releases/v2/v2.2",id:"app_releases/v2/v2.2",title:"Moodle Mobile 2.2 release notes",description:"Release date: 10th September 2015",source:"@site/general/app_releases/v2/v2.2.md",sourceDirName:"app_releases/v2",slug:"/app_releases/v2/v2.2",permalink:"/devdocs/general/app_releases/v2/v2.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/app_releases/v2/v2.2.md",tags:[{label:"Moodle App",permalink:"/devdocs/general/tags/moodle-app"},{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654266188,formattedLastUpdatedAt:"03/06/2022",frontMatter:{title:"Moodle Mobile 2.2 release notes",sidebar_label:"Moodle Mobile 2.2",tags:["Moodle App","Release notes"]},sidebar:"releaseNotes",previous:{title:"Moodle Mobile 2.1",permalink:"/devdocs/general/app_releases/v2/v2.1"},next:{title:"Moodle Mobile 2.3",permalink:"/devdocs/general/app_releases/v2/v2.3"}},d={},u=[{value:"Improvements",id:"improvements",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Complete list of issues",id:"complete-list-of-issues",level:2},{value:"Bug",id:"bug",level:3},{value:"Improvement",id:"improvement",level:3},{value:"Task",id:"task",level:3}],k={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,n);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,(0,a.Z)({frontMatter:s},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Release date: 10th September 2015"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/jira/secure/ReleaseNote.jspa?projectId=10070&version=15050"},"Complete list of issues for Moodle Mobile 2.2")),(0,l.kt)("h2",{id:"improvements"},"Improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated Ionic to version 1.1.0"),(0,l.kt)("li",{parentName:"ul"},"Errors are now triggered only the first time they happen"),(0,l.kt)("li",{parentName:"ul"},"Some third party core library errors are now omitted"),(0,l.kt)("li",{parentName:"ul"},"Improved display of Book and IMS Content Packages (scrolling and iframe size problems fixed)"),(0,l.kt)("li",{parentName:"ul"},"App use prevented if required user data such as first name is missing"),(0,l.kt)("li",{parentName:"ul"},"Keyboard is now automatically closed when submitting some forms to prevent Ionic errors.")),(0,l.kt)("h2",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mod_folder errors in Moodle 2.8 fixed"),(0,l.kt)("li",{parentName:"ul"},"Assignment descriptions are now visible in versions prior to 2.9"),(0,l.kt)("li",{parentName:"ul"},"In old Moodle versions the participants list is now correctly displayed"),(0,l.kt)("li",{parentName:"ul"},"Implementation of $mmCourse#getUserCourses to retrieve user's courses"),(0,l.kt)("li",{parentName:"ul"},"Code generation for notifications are now processed in a queue to avoid race conditions"),(0,l.kt)("li",{parentName:"ul"},"Back button is now shown in sub-views after using side menu web/help"),(0,l.kt)("li",{parentName:"ul"},"Existing notifications are reset during upgrade to avoid the error reported in - ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1148"},"MOBILE-1148")),(0,l.kt)("li",{parentName:"ul"},"Sanitization rule fixed to avoid overriding the Ionic rule- Errors related to invalid/null ids in the storage fixed"),(0,l.kt)("li",{parentName:"ul"},"Forum refresh when request failed throws an error fixed"),(0,l.kt)("li",{parentName:"ul"},"For large book pages, the user is no longer forced to scroll up to see new pages"),(0,l.kt)("li",{parentName:"ul"},"Safari browser DOM IDBDatabase Exception 8 fixed"),(0,l.kt)("li",{parentName:"ul"},"Fix for warning $translateSanitization: No sanitization strategy has been configured")),(0,l.kt)("h2",{id:"complete-list-of-issues"},"Complete list of issues"),(0,l.kt)("h3",{id:"bug"},"Bug"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1145"},"MOBILE-1145")," -  issue after iOS Update - course contents are not rendered"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1148"},"MOBILE-1148")," -  Local Notifications make the app crash for some Android devices"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1155"},"MOBILE-1155")," -  URL Resource not working"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1168"},"MOBILE-1168")," -  Back button not shown in subviews after using side menu web/help"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1182"},"MOBILE-1182")," -  Uncaught DataError: Failed to execute 'put' on 'IDBObjectStore'"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1185"},"MOBILE-1185")," -  Forum: Refresh when request failed throws an error"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1187"},"MOBILE-1187")," -  Safari browser: DOM IDBDatabase Exception 8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1189"},"MOBILE-1189")," -  mod_imscp: Having a large description makes iframe smaller"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1191"},"MOBILE-1191")," -  mod_folder: Error in Moodle 2.8"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1194"},"MOBILE-1194")," -  Unable to access moodle mobile app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1198"},"MOBILE-1198")," -  Cannot access students in my classes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1205"},"MOBILE-1205")," -  Uncaught TypeError: Cannot call method 'contains' of undefined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1212"},"MOBILE-1212")," -  Error reported via the app: null is not an object (evaluating 'm.offsetX')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1215"},"MOBILE-1215")," -  Error reported via the app: TypeError: undefined is not an object (evaluating 'forum.id')"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1216"},"MOBILE-1216")," -  Error reported via the app: ReferenceError: Can't find variable: StatusBar"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1217"},"MOBILE-1217")," -  Error reported via the app: Uncaught Error: ",(0,l.kt)("inlineCode",{parentName:"li"},"[$injector:unpr]")," Unknown provider: $mmaNotificationsProvider <- $mmaNotifications"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1218"},"MOBILE-1218")," -  Multiple error modals cannot be closed"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1234"},"MOBILE-1234")," -  Hidden Activities in course showing in Moodle Mobile App")),(0,l.kt)("h3",{id:"improvement"},"Improvement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1177"},"MOBILE-1177")," -  Our $compileProvider href sanitization rule overrides Ionic's"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1178"},"MOBILE-1178")," -  Update ionic to version 1.1.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1184"},"MOBILE-1184")," -  Improve error reporting feature"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1186"},"MOBILE-1186")," -  For large book pages, the user is forced to scroll up to see new pages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1188"},"MOBILE-1188")," -  Assignment descriptions not visible"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1190"},"MOBILE-1190")," -  Warning: $translateSanitization: No sanitization strategy has been configured."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1197"},"MOBILE-1197")," -  Don't allow using the app if required data is empty")),(0,l.kt)("h3",{id:"task"},"Task"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE-1209"},"MOBILE-1209")," -  Release version 2.2")))}c.isMDXComponent=!0}}]);