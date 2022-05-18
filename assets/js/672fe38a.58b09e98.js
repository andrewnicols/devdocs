"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1880],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5257:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={title:"Applying accessibility on Moodle App",sidebar_label:"Accessibility",sidebar_position:2,tags:["Moodle App","Accessibility","Compliance","Certification"]},c=void 0,l={unversionedId:"moodleapp/accessibility",id:"moodleapp/accessibility",title:"Applying accessibility on Moodle App",description:"Screen readers",source:"@site/docs/moodleapp/accessibility.md",sourceDirName:"moodleapp",slug:"/moodleapp/accessibility",permalink:"/devdocs/docs/moodleapp/accessibility",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/accessibility.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Accessibility",permalink:"/devdocs/docs/tags/accessibility"},{label:"Compliance",permalink:"/devdocs/docs/tags/compliance"},{label:"Certification",permalink:"/devdocs/docs/tags/certification"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652797985,formattedLastUpdatedAt:"17/05/2022",sidebarPosition:2,frontMatter:{title:"Applying accessibility on Moodle App",sidebar_label:"Accessibility",sidebar_position:2,tags:["Moodle App","Accessibility","Compliance","Certification"]},sidebar:"docs",previous:{title:"Overview",permalink:"/devdocs/docs/moodleapp/overview"},next:{title:"Translation",permalink:"/devdocs/docs/moodleapp/translation"}},p={},d=[{value:"Screen readers",id:"screen-readers",level:2},{value:"Tools and resources",id:"tools-and-resources",level:2}],m={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"screen-readers"},"Screen readers"),(0,a.kt)("p",null,"VoiceOver and TalkBack are the native applications for screen reading in iOS and Android devices. In order to make the code understandable to these applications we encourage the developers to use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/%7CAccessible"},"Rich Internet Applications (WAI-ARIA) 1.1")," recommendations of W3C. Those documents includes a bunch of rules to be applied to the HTML code to add semantic information to it."),(0,a.kt)("p",null,"First step on that is to ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#role_definitions%7Cidentify"},"the role")," of the main elements of navigation and information of the page. Then, you should apply the correct aria attributes to the elements that conform that role."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp/commit/b95de260ee46d6278d03cff294015aa11fd99a6b"},"Here you have some examples")," of how to apply these attributes."),(0,a.kt)("h2",{id:"tools-and-resources"},"Tools and resources"),(0,a.kt)("p",null,"These are some tools and resources that can be useful to improve accessibility:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck"},"ARIA DevTools browser extension")," \u2014 Navigate a site like a non-sighted user would."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi"},"headingMaps browser extension")," \u2014 Navigate page headings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"},"Landmarks Navigation browser extension")," \u2014 Navigate landmarks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/accessibility/reference/#pane"},"Accessibility Pane in Chrome")," \u2014 Inspect accessibility roles and values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HE2R86EZPMA"},"BingO Bakery: Headings, Landmarks, and Tabs")," \u2014 Video introducing some basic concepts.")))}u.isMDXComponent=!0}}]);