"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[183],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8788:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"Data-loss",sidebar_position:7,tags:["Coding guidelines","Policies","Security"]},s=void 0,d={unversionedId:"development/policies/security/dataloss",id:"development/policies/security/dataloss",title:"Data-loss",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/dataloss.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/dataloss",permalink:"/devdocs/general/development/policies/security/dataloss",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/dataloss.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1652797985,formattedLastUpdatedAt:"17/05/2022",sidebarPosition:7,frontMatter:{title:"Data-loss",sidebar_position:7,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Command-line injection",permalink:"/devdocs/general/development/policies/security/commandline-injection"},next:{title:"Information leakage",permalink:"/devdocs/general/development/policies/security/info-leakage"}},c={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This page forms part of the ",(0,i.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,i.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,i.kt)("p",null,"This is more a symptom or other vulnerabilities, than a vulnerability in its own right."),(0,i.kt)("p",null,"For example, Evil Hacker can use cross-site request forgery or SQL injection to maliciously destroy lots of your data. Or the fact that someone has permission to destroy a lot of data may indicate that the code is not performing sufficient authorisation checks."),(0,i.kt)("p",null,"However, it is also possible for users to accidentally destroy lots of data if the user-interface is badly designed and confusing."),(0,i.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Writing secure code so that data cannot be destroyed maliciously."),(0,i.kt)("li",{parentName:"ul"},"Trying to design clear interfaces, so that users understand the effects of their actions.")),(0,i.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Actions that destroy a significant amount of data should have a confirmation step.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Capabilities that let people destroy a lot of information should have ",(0,i.kt)("inlineCode",{parentName:"li"},"RISK_DATALOSS"),"."))),(0,i.kt)("li",{parentName:"ul"},"Follow the guidelines for avoiding:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./unauthorised-access"},"Unauthorised access")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./crosssite-request-forgery"},"Cross-site request forgery (XSRF)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./sql-injection"},"SQL injection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./commandline-injection"},"Command-line injection")),(0,i.kt)("li",{parentName:"ul"},"and so on.")))),(0,i.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Be careful!")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding"))))}m.isMDXComponent=!0}}]);