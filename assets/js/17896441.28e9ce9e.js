"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[27918],{54067:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(5979),r={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},s=a(86010),i=a(39960),c=a(44996);function o(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function d(e){var t=e.children,a=e.active,l=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function m(){var e=(0,c.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,s.Z)("breadcrumbs__link",r.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function u(){var e=(0,l.s1)(),t=(0,l.Ns)();return e?n.createElement("nav",{className:(0,s.Z)(l.kM.docs.docBreadcrumbs,r.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(m,null),e.map((function(t,a){return n.createElement(d,{key:a,active:a===e.length-1,index:a},n.createElement(o,{href:a<e.length-1?t.href:void 0},t.label))})))):null}},49930:function(e,t,a){a.r(t),a.d(t,{default:function(){return z}});var n=a(67294),l=a(86010),r=a(95214),s=a(94474),i=a(27597),c=a(95999),o=a(5979);function d(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function m(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function u(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:o.kM.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(d,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(m,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var v=a(87462),p=a(63366),b="iconEdit_dcUD",E=["className"];function g(e){var t=e.className,a=(0,p.Z)(e,E);return n.createElement("svg",(0,v.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(b,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},n.createElement(g,null),n.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var f=a(7774),Z="tags_XVD_",N="tag_JSN8";function _(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:N},n.createElement(f.Z,{name:t,permalink:a}))}))))}var L="lastUpdated_foO9";function k(e){return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(o.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(h,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L)},(a||r)&&n.createElement(u,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function T(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,d=c.length>0,m=!!(a||r||i);return d||m?n.createElement("footer",{className:(0,l.Z)(o.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(k,{tags:c}),m&&n.createElement(U,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var y=a(51575),M="tocCollapsible_jdIR",w="tocCollapsibleButton_Fzxq",C="tocCollapsibleContent_MpvI",A="tocCollapsibleExpanded_laf4",x=a(25002);function B(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,o.uR)({initialState:!0}),d=i.collapsed,m=i.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(M,!d&&A,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w),onClick:m},n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(o.zF,{lazy:!0,className:C,collapsed:d},n.createElement(x.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var D=a(39649),I="docItemContainer_vinB",V="docItemCol_DM6M",P="tocMobile_TmEX",S=a(54067),F=a(3183);function H(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,i=r.keywords,c=l.description,d=l.title,m=null!=(t=s.image)?t:r.image;return n.createElement(o.d,{title:d,description:c,keywords:i,image:m})}function R(e){var t=e.content,a=t.metadata,c=t.frontMatter,d=c.hide_title,m=c.hide_table_of_contents,u=c.toc_min_heading_level,v=c.toc_max_heading_level,p=a.title,b=!d&&void 0===t.contentTitle,E=(0,o.iP)(),g=!m&&t.toc&&t.toc.length>0,h=g&&("desktop"===E||"ssr"===E);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!m&&V)},n.createElement(s.Z,null),n.createElement("div",{className:I},n.createElement("article",null,n.createElement(S.Z,null),n.createElement(i.Z,null),g&&n.createElement(B,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:(0,l.Z)(o.kM.docs.docTocMobile,P)}),n.createElement("div",{className:(0,l.Z)(o.kM.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(D.Z,{as:"h1"},p)),n.createElement(F.Z,null,n.createElement(t,null))),n.createElement(T,e)),n.createElement(r.Z,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:u,maxHeadingLevel:v,className:o.kM.docs.docTocDesktop})))}function z(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(o.FG,{className:t},n.createElement(H,e),n.createElement(R,e))}},95214:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),l=a(67294),r=a(95999),s=a(39960);function i(e){var t=e.permalink,a=e.title,n=e.subLabel;return l.createElement(s.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}function c(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(i,(0,n.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(i,(0,n.Z)({},a,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},27597:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(95999),r=a(5979),s=a(86010);function i(e){var t=e.className,a=(0,r.E6)();return a.badge?n.createElement("span",{className:(0,s.Z)(t,r.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},94474:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),l=a(52263),r=a(39960),s=a(95999),i=a(65551),c=a(5979),o=a(86010);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,r=e.versionMetadata,s=(0,l.Z)().siteConfig.title,d=(0,i.gA)({failfast:!0}).pluginId,v=(0,c.J)(d).savePreferredVersionName,p=(0,i.Jo)(d),b=p.latestDocSuggestion,E=p.latestVersionSuggestion,g=null!=b?b:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,o.Z)(a,c.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:E.label,to:g.path,onClick:function(){return v(E.name)}})))}function p(e){var t=e.className,a=(0,c.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},7774:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(39960),s="tag_hD8n",i="tagRegular_D6E_",c="tagWithCount_i0QQ";function o(e){var t=e.permalink,a=e.name,o=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,o?c:i)},a,o&&n.createElement("span",null,o))}}}]);