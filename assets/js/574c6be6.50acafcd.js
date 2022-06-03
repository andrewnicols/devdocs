"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4866],{54434:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),i=(a(67294),a(3905)),s=a(13904),l=["components"],n={title:"Moodle 1.9.4",tags:["Release notes","Moodle 1.9"],sidebar_position:4,moodleVersion:"1.9.4"},d=void 0,p={unversionedId:"releases/1.9/1.9.4",id:"releases/1.9/1.9.4",title:"Moodle 1.9.4",description:"Release date: 28th January 2009",source:"@site/general/releases/1.9/1.9.4.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.4",permalink:"/devdocs/general/releases/1.9/1.9.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654266188,formattedLastUpdatedAt:"03/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 1.9.4",tags:["Release notes","Moodle 1.9"],sidebar_position:4,moodleVersion:"1.9.4"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.3",permalink:"/devdocs/general/releases/1.9/1.9.3"},next:{title:"Moodle 1.9.5",permalink:"/devdocs/general/releases/1.9/1.9.5"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language strings file",id:"new-language-strings-file",level:2},{value:"New language pack",id:"new-language-pack",level:2},{value:"Known problems and regressions",id:"known-problems-and-regressions",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Release date: 28th January 2009"),(0,i.kt)("p",null,"Here is ",(0,i.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator.jspa?reset=true&pid=10011&fixfor=10300&sorter/field=priority&sorter/order=DESC"},"the full list of fixed issues in 1.9.4"),"."),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17205"},"MDL-17205")," New options to allow Moodle to be configured to comply with European and US privacy regulations, like FERPA.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17472"},"MDL-17472")," New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Site_policies"},"Site policies")," setting for disabling ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Notes"},"Notes")," completely"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17472"},"MDL-17472")," New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Internal_enrolment"},"Internal enrolment")," settings for enforcing ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Enrolment_key"},"enrolment key")," usage and complexity"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17222"},"MDL-17222")," New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Security_overview"},"Security overview")," report"),(0,i.kt)("li",{parentName:"ul"},"Separate capabilities for each report and other parts with sensitive information"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://tracker.moodle.org/secure/IssueNavigator.jspa?reset=true&pid=10011&query=categor*+-question&summary=true&description=true&resolution=1&fixfor=10300&assigneeSelect=specificuser&assignee=timhunt"},"Fix multiple bugs")," relating to creating and editing course categories. Previously, giving admin permissions in a category and its subcategories did not work reliably. In the process, the separate create, update and delete category capabilities were replaced with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/category/manage"},"moodle/category:manage"),", and moodle/category:visibility was renamed to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/category/viewhiddencategories"},"moodle/category:viewhiddencategories"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-8648"},"MDL-8648")," Essay questions can now be randomised by random questions. This must be enabled under ",(0,i.kt)("em",{parentName:"li"},"Administration > Miscellaneous > Experimental"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14926"},"MDL-14926")," A new capability ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/mod/quiz/reviewmyattempts"},"mod/quiz:reviewmyattempts"),", separate from ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/mod/quiz/attempt"},"mod/quiz:attempt"),". This let's you create a read-only role that lets students see what they have done on a course in the past, without being able to change anything any more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16651"},"MDL-16651")," A new capability ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/mod/scorm/deleteresponses"},"mod/scorm:deleteresponses")," allowing deletion of SCORM attempts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-6160"},"MDL-6160")," Email notification of ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_request"},"course requests"),", and a new capability ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/course/request"},"moodle/course:request")," to control who can request courses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-17364"},"MDL-17364")," New ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Forum_settings"},"Forum setting")," for enabling ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Forum_ratings"},"AJAX forum ratings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-10021"},"MDL-10021"),' New option, "Yes, without frame", for the ',(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/File_or_website_link"},"file resource"),' "Keep page navigation visible on the same page" setting. This option displays a resource in a XHTML strict page. Other options have been kept.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-16999"},"MDL-16999")," Some ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Adding/editing_a_database"},"database module settings")," have been fixed ('Required Entries' and ' Required Entries before viewing). If the fix has an impact on your Moodle installation, you will be warned during upgrade.")),(0,i.kt)("h2",{id:"security-issues"},"Security issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115523"},"MSA-09-0001")," No way easy to remove pictures of deleted users"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115524"},"MSA-09-0002")," User pix disclosure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115525"},"MSA-09-0003")," Vulnerability in Snoopy 1.2.3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115526"},"MSA-09-0004"),' XSS vulnerabilities in HTML blocks if "Login as" used'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115527"},"MSA-09-0005")," Moodle 'spell-check-logic.cgi' Insecure Temporary File Creation Vulnerability"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115528"},"MSA-09-0006")," Calendar export may allow brute force attacks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115529"},"MSA-09-0007")," Missing input validation in logs allows potential XSS attacks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=115532"},"MSA-09-0008")," CSRF vulnerability in forum code")),(0,i.kt)("h2",{id:"new-language-strings-file"},"New language strings file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"report_security.php")),(0,i.kt)("h2",{id:"new-language-pack"},"New language pack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kazakh - \u041a\u0430\u043b\u0438\u043c\u0430 \u0422\u0443\u0435\u043d\u0431\u0430\u0435\u0432\u0430")),(0,i.kt)("p",null,"(See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Translation_credits"},"Translation credits")," for additional details.)"),(0,i.kt)("h2",{id:"known-problems-and-regressions"},"Known problems and regressions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("em",{parentName:"li"},"Security overview report")," on large sites extremely slow and overloading database server ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18040"},"MDL-18040")," - update to latest weekly or copy /admin/report/security/* files from latest weekly")),(0,i.kt)("h2",{id:"translations"},"Translations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.4"},"French version of this page"))))}h.isMDXComponent=!0}}]);