(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{317:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("37a2e230",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";r(317)},321:function(t,e,r){var n=r(52)((function(i){return i[1]}));n.push([t.i,".img-animal[data-v-a9bd2440]:first-child{grid-column-start:span 2;grid-row-start:span 2}.img-animal[data-v-a9bd2440]:nth-child(2n+3){grid-row-start:span 2}.img-animal[data-v-a9bd2440]:nth-child(4n+3){grid-row-start:span 2;grid-column-start:span 2}.img-animal[data-v-a9bd2440]:nth-child(6n+7){grid-row-start:span 2}",""]),n.locals={},t.exports=n},325:function(t,e,r){"use strict";r.r(e);r(323);var n={props:{images:{type:Array,required:!0},value:{type:Number,required:!0}}},l=(r(320),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-auto grid grid-cols-three gap-3 grid-flow-dense"},t._l(t.images,(function(image){return e("div",{key:image.id,staticClass:"relative overflow-hidden bg-no-repeat hover:shadow-md bg-cover rounded-md w-auto h-auto img-animal"},[e("img",{staticClass:"w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out",attrs:{src:1==t.value?image:image.url,alt:"Image"}})])})),0)}),[],!1,null,"a9bd2440",null);e.default=component.exports},374:function(t,e,r){"use strict";r.r(e);r(137),r(33),r(27),r(32),r(13),r(37),r(28),r(38);var n=r(11),l=r(17),o=(r(23),r(36),r(67),r(333)),c=r.n(o),d=r(31),m=r(30),v=r.n(m),f=r(325);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={scrollToTop:!0,data:function(){return{cats:[],value:2}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({project:function(){return this.$store.getters.getProjectById(this.$route.params.id)}},Object(d.b)(["socialSharings"])),fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://api.thecatapi.com/v1/images/search?format=json&limit=12&api_key=".concat("live_x3JfsLMlo7BGhd9pSCs06XfA2cbDZX5U7OFvA3wzQHwCCvlsPrtivaJxFc2Uzej6")).then((function(data){t.cats=data.data}));case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){v.a.replace()},updated:function(){v.a.replace()},components:{ImageGrid:f.default}},_=x,y=r(16),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto"},[t.project?e("div",[e("div",[e("p",{staticClass:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},[t._v("\n        "+t._s(t.project.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex items-center mr-10"},[e("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"clock"}}),t._v(" "),e("span",{staticClass:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},[t._v(t._s(t.project.publishDate))])]),t._v(" "),e("div",{staticClass:"flex items-center"},[e("i",{staticClass:"w-4 h-4 text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"tag"}}),t._v(" "),e("span",{staticClass:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},[t._v(t._s(t.project.tag))])])])]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 sm:gap-8 mt-12"},t._l(t.project.projectImages,(function(t){return e("div",{key:t.id,staticClass:"mb-10 sm:mb-0 relative overflow-hidden rounded-md"},[e("img",{staticClass:"shadow-lg sm:shadow-none hover:scale-110 transition duration-300 ease-in-out",attrs:{src:t.img}})])})),0),t._v(" "),e("div",{staticClass:"block sm:flex gap-0 sm:gap-10 mt-14"},[e("div",{staticClass:"w-full sm:w-1/3 text-left overflow-hidden"},[e("div",{staticClass:"mb-7"},[e("p",{staticClass:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},[t._v("\n            "+t._s(t.project.clientTitle)+"\n          ")]),t._v(" "),e("ul",{staticClass:"leading-loose"},t._l(t.project.companyInfos,(function(r){return e("li",{key:r.id,staticClass:"font-general-regular text-ternary-dark dark:text-ternary-light"},[e("span",[t._v(t._s(r.title)+": ")]),t._v(" "),e("a",{class:"Website"==r.title||"Phone"==r.title?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Project website and phone"}},[t._v(t._s(r.details||"None"))])])})),0)]),t._v(" "),e("div",{staticClass:"mb-7"},[e("p",{staticClass:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},[t._v("\n            "+t._s(t.project.objectivesTitle)+"\n          ")]),t._v(" "),e("p",{staticClass:"font-general-regular text-primary-dark dark:text-ternary-light"},[t._v("\n            "+t._s(t.project.objectivesDetails)+"\n          ")])]),t._v(" "),e("div",{staticClass:"mb-7"},[e("p",{staticClass:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},[t._v("\n            "+t._s(t.project.techTitle)+"\n          ")]),t._v(" "),e("p",{staticClass:"font-general-regular text-primary-dark dark:text-ternary-light"},[t._v("\n            "+t._s(t.project.technologies.join(", "))+"\n          ")])]),t._v(" "),e("div",[e("p",{staticClass:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},[t._v("\n            Web source\n          ")]),t._v(" "),e("ul",{staticClass:"leading-loose"},t._l(t.project.links,(function(link){return e("li",{key:link.id,staticClass:"font-general-regular text-ternary-dark dark:text-ternary-light"},[e("div",[e("span",[t._v("Demo: ")]),t._v(" "),e("a",{staticClass:"w-full hover:underline cursor-pointer text-blue-600",attrs:{href:link.demo||"#",target:"_blank"}},[t._v(t._s(link.demo||"Unavailable"))])]),t._v(" "),e("div",[e("span",[t._v("Source code: ")]),t._v(" "),e("a",{staticClass:"w-full hover:underline cursor-pointer text-blue-600",attrs:{href:link.source||"#",target:"_blank"}},[t._v(t._s(link.source||"Unavailable"))])])])})),0)])]),t._v(" "),e("div",{staticClass:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},[e("p",{staticClass:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"},[t._v("\n          I don't have idea for this section, so 😁\n        ")]),t._v(" "),e("ImageGrid",{attrs:{images:t.cats,value:t.value}})],1)])]):e("div",{staticClass:"font-general-medium container mx-auto text-center"},[e("h1",[t._v("No projects yet")])])])}),[],!1,null,"0a6ee34c",null);e.default=component.exports}}]);