(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,9],{324:function(t,e,r){"use strict";r.r(e);var n={props:{select:{type:String,default:"projects"},selectOptions:{type:Array,default:function(){return["Static web","Clone web","VueJS Project","NuxtJS Project"]}}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("select",{staticClass:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",attrs:{name:t.select,id:t.select},on:{change:function(e){return t.$emit("change",e.target.value)}}},[e("option",{staticClass:"text-sm sm:text-md",attrs:{value:""}},[t._v("All Projects")]),t._v(" "),t._l(t.selectOptions,(function(option){return e("option",{key:option,staticClass:"sm:text-md",domProps:{value:option}},[t._v("\n    "+t._s(option)+"\n  ")])}))],2)}),[],!1,null,"d36f5962",null);e.default=component.exports},347:function(t,e,r){"use strict";r.r(e);r(33),r(27),r(37),r(28),r(38);var n=r(17),o=(r(32),r(13),r(66),r(68),r(69),r(195),r(23),r(111),r(197),r(36),r(31)),c=r(30),l=r.n(c);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{selectedProject:"",searchProject:""}},computed:m(m({},Object(o.b)(["projectsHeading","projectsDescription","projects"])),{},{filteredProjects:function(){return this.selectedProject?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}}),methods:{filterProjectsByCategory:function(){var t=this;return this.projects.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(t.selectedProject)}))},filterProjectsBySearch:function(){var t=new RegExp(this.searchProject,"i");return this.projects.filter((function(e){return e.title.match(t)}))}},mounted:function(){l.a.replace()}},y=r(16),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-10 sm:pt-20 md:pt-24"},[e("div",{staticClass:"text-center"},[e("p",{staticClass:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},[t._v("\n      "+t._s(t.projectsHeading)+"\n    ")])]),t._v(" "),e("div",{staticClass:"mt-8 sm:mt-10"},[e("h3",{staticClass:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"},[t._v("\n      Search projects by title or filter by category\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap justify-center sm:justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},[e("div",{staticClass:"flex justify-between gap-2"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchProject,expression:"searchProject"}],staticClass:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",attrs:{id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},domProps:{value:t.searchProject},on:{input:function(e){e.target.composing||(t.searchProject=e.target.value)}}})]),t._v(" "),e("ProjectsFilter",{on:{change:function(e){t.selectedProject=e}}})],1)]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"},t._l(t.filteredProjects,(function(r){return e("div",{key:r.id,staticClass:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer my-10 mx-8 sm:m-0 bg-secondary-light dark:bg-ternary-dark",attrs:{"aria-label":"Single Project"}},[e("NuxtLink",{attrs:{to:"/projects/".concat(r.id)}},[e("div",[e("img",{staticClass:"rounded-t-xl border-none",attrs:{src:r.img,alt:r.title}})]),t._v(" "),e("div",{staticClass:"text-center px-4 py-6"},[e("p",{staticClass:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},[t._v("\n            "+t._s(r.title)+"\n          ")]),t._v(" "),e("span",{staticClass:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"},[t._v(t._s(r.category))])])])],1)})),0)])}),[function(){var t=this._self._c;return t("span",{staticClass:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[t("i",{staticClass:"text-ternary-dark dark:text-ternary-light",attrs:{"data-feather":"search"}})])}],!1,null,"22e1c8aa",null);e.default=component.exports;installComponents(component,{ProjectsFilter:r(324).default})},373:function(t,e,r){"use strict";r.r(e);var n={scrollToTop:!0,data:function(){return{}},computed:{}},o=r(16),component=Object(o.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"container mx-auto"},[t("ProjectsGrid")],1)}),[],!1,null,"621e6a96",null);e.default=component.exports;installComponents(component,{ProjectsGrid:r(347).default})}}]);