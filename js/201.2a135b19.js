(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[201],{9415:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("v-container",{class:{"px-0":t.$vuetify.breakpoint.xs}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"slide-in-top",staticStyle:{"max-width":"550px"},attrs:{align:"center"}},[e("h2",[t._t("title")],2),t.screenshot?e("v-img",{staticClass:"project-img",attrs:{alt:"project screenshot",contain:"",src:i(1342)(`./${t.screenshot}.png`)}}):t._e()],1),e("v-col",{staticClass:"pb-0"},[e("v-card",{attrs:{outlined:!t.$vuetify.theme.dark}},[e("h3",[t._v("🔗 Links")]),e("v-card-text",{staticClass:"pt-0"},[t.code?e("div",[e("a",{attrs:{href:t.code,target:"_blank"}},[e("v-btn",{staticClass:"white--text"},[t._v("View code "),e("v-icon",{attrs:{right:""}},[t._v("mdi-xml")])],1)],1)]):t._e(),t.live?e("div",[e("a",{attrs:{href:t.live,target:"_blank"}},[e("v-btn",{staticClass:"white--text"},[t._v("Visit site"),e("v-icon",{attrs:{right:""}},[t._v("mdi-open-in-new")])],1)],1)]):t._e(),t.demo?e("div",[e("a",{attrs:{href:t.demo,target:"_blank"}},[e("v-btn",{staticClass:"white--text"},[t._v("See demo"),e("v-icon",{attrs:{right:""}},[t._v("mdi-eye-outline")])],1)],1)]):t._e(),t.confidential?e("div",{staticClass:"text-center",staticStyle:{"font-size":"11px"}},[t._v(" Codebase is confidential with the client ")]):t._e()])],1),e("v-card",{attrs:{outlined:!t.$vuetify.theme.dark}},[e("h3",[t._v("🔧 Technologies")]),e("v-row",{staticClass:"mt-2",attrs:{justify:"center"}},t._l(t.projectTech,(function(n){return e("div",{key:n.text,staticClass:"skillicon-box"},[n.icon?e("i",{staticClass:"skillicon",class:n.icon}):t._e(),n.img?e("v-img",{staticClass:"skillimage",attrs:{alt:"skill icon",contain:"",src:i(6802)(`./${n.img}.png`)}}):t._e(),e("p",[t._v(t._s(n.text))])],1)})),0)],1)],1)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("v-card",{attrs:{outlined:!t.$vuetify.theme.dark}},[e("h3",[t._v("🚀 Project brief")]),e("v-card-text",[t._t("brief")],2)],1),e("v-card",{attrs:{outlined:!t.$vuetify.theme.dark}},[e("h3",[t._v("🌟 Learning points")]),e("v-card-text",[t._t("learning")],2)],1)],1)],1)],1)},o=[],r=(i(7658),{props:{screenshot:String,tech:Array,live:String,code:String,demo:String,confidential:Boolean},components:{},data:()=>({techItems:[{img:null,icon:"devicon-firebase-plain colored",text:"Firebase"},{img:null,icon:"devicon-nodejs-plain colored",text:"NodeJS"},{img:null,icon:"devicon-webpack-plain colored",text:"Webpack"},{icon:null,img:"vue",text:"VueJS"},{icon:null,img:"vue",text:"VueJS 3"},{icon:null,img:"vite",text:"Vite"},{img:"vuetify",icon:null,text:"Vuetify"},{icon:"devicon-css3-plain colored",img:null,text:"CSS"},{icon:null,img:"sass",text:"SASS"},{icon:"devicon-bootstrap-plain colored",img:null,text:"Bootstrap"},{icon:"devicon-javascript-plain colored",img:null,text:"Javascript"},{icon:"devicon-jquery-plain colored",img:null,text:"jQuery"},{icon:null,img:"api",text:"REST API"},{icon:null,img:"i18n",text:"i18n"},{icon:null,img:"jest",text:"Unit testing"},{img:"procreate",icon:null,text:"Procreate"},{img:"photoshop",icon:null,text:"Photoshop"},{img:null,icon:"devicon-react-original colored",text:"ReactJS"},{img:null,icon:"devicon-typescript-plain colored",text:"TypeScript"},{img:"quasar",icon:null,text:"Quasar"},{icon:"devicon-materialui-plain colored",img:null,text:"Material UI"}]}),methods:{},computed:{projectTech(){let t=[];return this.tech.forEach((e=>{t.push(this.techItems.filter((t=>t.text===e))[0])})),t}}}),s=r,c=i(1001),a=(0,c.Z)(s,n,o,!1,null,"28caddde",null),l=a.exports},8201:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",[e("ProjectBrief",{attrs:{screenshot:"monster",live:"https://anzuj.github.io/monstergame",code:"https://github.com/anzuj/monstergame",tech:["VueJS","Vuetify","CSS","Webpack","Javascript","Procreate"]},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Little monster game "),e("span",{staticClass:"emoji-block slide-in-right-small"},[t._v("🏹")])]},proxy:!0},{key:"brief",fn:function(){return[t._v(" A Passion project of mine to practice dynamic styling, Javascript and illustrations. It's a basic game of you versus a big ugly spider coupled with a randomly generated (and often humorous) loot. ")]},proxy:!0},{key:"learning",fn:function(){return[t._v(" Got good practice with JS array methods, randomising and how to make conditional styling work. Original inspiration came from a very simplistic game made during Maximilian Schwarzmüller's "),e("a",{attrs:{href:"https://www.udemy.com/course/vuejs-2-the-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue course")]),t._v(" and I started adding more layers of complexity to it. ")]},proxy:!0}])})],1)},o=[],r=i(9415),s={props:[""],components:{ProjectBrief:r.Z},data:()=>({}),methods:{},computed:{}},c=s,a=i(1001),l=(0,a.Z)(c,n,o,!1,null,null,null),u=l.exports},1342:function(t,e,i){var n={"./beadinghub.png":8078,"./czocha.png":1714,"./discussion.png":3031,"./hireme.png":7087,"./kuusetaimed.png":33,"./monster.png":8430,"./signup.png":6645};function o(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id=1342},8078:function(t,e,i){"use strict";t.exports=i.p+"img/beadinghub.4d73702c.png"},1714:function(t,e,i){"use strict";t.exports=i.p+"img/czocha.b291882c.png"},3031:function(t,e,i){"use strict";t.exports=i.p+"img/discussion.e4aacc13.png"},7087:function(t,e,i){"use strict";t.exports=i.p+"img/hireme.ffc3d703.png"},33:function(t,e,i){"use strict";t.exports=i.p+"img/kuusetaimed.8438c5e0.png"},8430:function(t,e,i){"use strict";t.exports=i.p+"img/monster.9903927b.png"},6645:function(t,e,i){"use strict";t.exports=i.p+"img/signup.58675ba1.png"}}]);
//# sourceMappingURL=201.2a135b19.js.map