(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[808],{2808:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return o}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-10 slide-in-top"},[e("h1",{staticClass:"gradient-h1"},[t._v(" Gallery ")]),e("v-card-text",[t._v(" Digital illustrations, cartoons and mug designs I've done over the years ")]),t.images?e("v-row",t._l(t.images,(function(i){return e("v-col",{key:i,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("div",{staticClass:"gallery-image"},[e("v-img",{staticClass:"transitioned",attrs:{alt:"gallery picture","aspect-ratio":"1.2",src:t.getImgPath(i)},on:{click:function(e){return t.viewImage(i)}}})],1)])})),1):t._e(),e("v-dialog",{attrs:{fullscreen:""},model:{value:t.viewDialog,callback:function(e){t.viewDialog=e},expression:"viewDialog"}},[e("v-card",{staticClass:"pa-6",staticStyle:{"background-color":"rgba(0, 0, 0, 0.85)"}},[e("v-container",[e("v-row",[e("v-spacer"),e("v-btn",{attrs:{color:"grey lighten-1",large:"",icon:""},on:{click:function(e){t.viewDialog=!1}}},[e("v-icon",[t._v("mdi-close-circle-outline")])],1)],1),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-btn",{attrs:{color:"primary",large:"",icon:""},on:{click:t.prevImage}},[e("v-icon",[t._v("mdi-arrow-left-thick")])],1),e("span",{staticClass:"imageIndicator"},[t._v(t._s(t.currentImage)+"/"+t._s(t.nrOfImages))]),e("v-btn",{attrs:{color:"primary",large:"",icon:""},on:{click:t.nextImage}},[e("v-icon",[t._v("mdi-arrow-right-thick")])],1)],1),e("div",{staticClass:"pa-6"},[t.currentImage?e("v-img",{key:t.currentImage,staticClass:"fade-in",attrs:{height:"70vh",alt:"gallery picture",contain:"",src:t.getImgPath(t.currentImage)}}):t._e()],1)],1)],1)],1)],1)},s=[],n={mounted(){this.images=[...Array(this.nrOfImages+1).keys()].slice(1)},data:()=>({images:null,nrOfImages:20,viewDialog:!1,currentImage:null}),methods:{viewImage(t){this.currentImage=t,this.viewDialog=!0},prevImage(){1===this.currentImage?this.currentImage=this.nrOfImages:this.currentImage-=1},nextImage(){this.currentImage===this.nrOfImages?this.currentImage=1:this.currentImage+=1},getImgPath(t){return i(944)(`./${t}.jpg`)}}},a=n,c=i(1001),g=(0,c.Z)(a,r,s,!1,null,null,null),o=g.exports},944:function(t,e,i){var r={"./1.jpg":6460,"./10.jpg":6540,"./11.jpg":4292,"./12.jpg":525,"./13.jpg":6817,"./14.jpg":2511,"./15.jpg":4973,"./16.jpg":273,"./18.jpg":9379,"./19.jpg":3578,"./2.jpg":6562,"./20.jpg":5997,"./3.jpg":3606,"./4.jpg":7305,"./5.jpg":441,"./6.jpg":3903,"./7.jpg":97,"./8.jpg":9963,"./9.jpg":2657};function s(t){var e=n(t);return i(e)}function n(t){if(!i.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=n,t.exports=s,s.id=944},6460:function(t,e,i){"use strict";t.exports=i.p+"img/1.fe07c5d0.jpg"},6540:function(t,e,i){"use strict";t.exports=i.p+"img/10.8af85ad2.jpg"},4292:function(t,e,i){"use strict";t.exports=i.p+"img/11.4cf4fa84.jpg"},525:function(t,e,i){"use strict";t.exports=i.p+"img/12.a505aff0.jpg"},6817:function(t,e,i){"use strict";t.exports=i.p+"img/13.3d76a075.jpg"},2511:function(t,e,i){"use strict";t.exports=i.p+"img/14.7509b6a9.jpg"},4973:function(t,e,i){"use strict";t.exports=i.p+"img/15.33f10d07.jpg"},273:function(t,e,i){"use strict";t.exports=i.p+"img/16.a08c88d7.jpg"},9379:function(t,e,i){"use strict";t.exports=i.p+"img/18.0fc08e0a.jpg"},3578:function(t,e,i){"use strict";t.exports=i.p+"img/19.bbed58ef.jpg"},6562:function(t,e,i){"use strict";t.exports=i.p+"img/2.cad963e6.jpg"},5997:function(t,e,i){"use strict";t.exports=i.p+"img/20.06244cd0.jpg"},3606:function(t,e,i){"use strict";t.exports=i.p+"img/3.a0edf599.jpg"},7305:function(t,e,i){"use strict";t.exports=i.p+"img/4.871aa826.jpg"},441:function(t,e,i){"use strict";t.exports=i.p+"img/5.c28e4f53.jpg"},3903:function(t,e,i){"use strict";t.exports=i.p+"img/6.0dd9392d.jpg"},97:function(t,e,i){"use strict";t.exports=i.p+"img/7.3651531e.jpg"},9963:function(t,e,i){"use strict";t.exports=i.p+"img/8.b6e143f8.jpg"},2657:function(t,e,i){"use strict";t.exports=i.p+"img/9.5a0cb6e2.jpg"}}]);
//# sourceMappingURL=808.0c10899a.js.map