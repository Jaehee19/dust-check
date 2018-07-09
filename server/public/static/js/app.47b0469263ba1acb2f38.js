webpackJsonp([1],{"/YjR":function(t,s){},"2M3f":function(t,s){},Ayyi:function(t,s){},MMJM:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("MMJM")},null,null).exports,o=a("/ocq"),u=a("Dd8w"),r=a.n(u),c=a("yviF"),l=a.n(c),d=(a("dih4"),l.a.initializeApp({apiKey:"AIzaSyAEM9WeV-qpYwE_4PlHe0s_fz087IJEcE8",authDomain:"dust-check.firebaseapp.com",databaseURL:"https://dust-check.firebaseio.com",projectId:"dust-check",storageBucket:"",messagingSenderId:"602215183762"})),p={data:function(){return{email:"",password:""}},props:["authType"],methods:{toSignup:function(){this.$router.push({name:"Signup"})},signup:function(t,s){var a=this;d.auth().createUserWithEmailAndPassword(t,s).then(function(){a.$router.push({name:"Main"}),a.$notify.open({content:"Sign up Success",icon:"smile-o",placement:"left-center",transition:"bounce",type:"primary"})}).catch(function(t){var s=t.message;a.$notify.open({content:s,icon:"smile-o",placement:"left-center",transition:"bounce",type:"danger"})})},login:function(t,s){var a=this;d.auth().signInWithEmailAndPassword(t,s).then(function(){a.$store.dispatch("login"),a.$router.push({name:"Main"})}).catch(function(t){var s=t.message;a.$notify.open({content:s,icon:"smile-o",placement:"left-center",transition:"bounce",type:"danger"})})}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"authentication"},[a("div",{staticClass:"login-wrap"},[a("p",{staticClass:"control has-icon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),a("i",{staticClass:"fa fa-envelope"})]),t._v(" "),a("p",{staticClass:"control has-icon"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),a("i",{staticClass:"fa fa-lock"})]),t._v(" "),a("p",{staticClass:"control control-btn"},["login"===t.authType?a("button",{staticClass:"button is-success",on:{click:function(s){t.login(t.email,t.password)}}},[t._v("\n        Log in\n      ")]):a("button",{staticClass:"button is-success",on:{click:function(s){t.signup(t.email,t.password)}}},[t._v("\n        Sign up\n      ")])])]),t._v(" "),"login"===t.authType?a("div",{staticClass:"signup-wrap"},[a("p",{staticClass:"control control-btn"},[a("button",{staticClass:"button is-primary",on:{click:t.toSignup}},[t._v("\n        Sign up\n      ")])])]):t._e()])},staticRenderFns:[]};var m=a("VU/8")(p,v,!1,function(t){a("XPJD")},"data-v-73312032",null).exports,_=a("W3Iv"),f=a.n(_),h=a("BO1k"),g=a.n(h),b=a("d7EF"),C=a.n(b),D={data:function(){return{}},computed:{subDust:function(){if(this.$props.isShow){var t=this.$props.subDustData;return t.item.filter(function(s){return t.item[0].dataTime[0]===s.dataTime[0]})}}},props:["sidoName","isShow","subDustData"],methods:{parseValueStr:function(t){return parseInt(t.replace(/"/g,""))},closeModal:function(){this.$parent.isShow=!1}}},S={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("modal",{attrs:{title:t.sidoName,width:520,"is-show":t.isShow,transition:"fadeDown","show-footer":!1},on:{close:t.closeModal}},[a("div",t._l(t.subDust,function(s,e){return a("div",{key:e,staticClass:"sub-dust-wrap"},[a("div",{staticClass:"city-name"},[t._v("\n        "+t._s(s.cityName[0])+"\n        "),a("span",{staticClass:"data-time"},[t._v(t._s(s.dataTime[0].replace(/....-/,""))+" 기준")])]),t._v(" "),a("div",{staticClass:"dust-value"},[a("span",{staticClass:"val10",class:t.$parent.getStateValue("PM10",t.parseValueStr(s.pm10Value[0])).stateClass},[t._v("\n          미세먼지 :\n          "),t.parseValueStr(s.pm10Value[0])?a("span",[t._v("\n            "+t._s(t.parseValueStr(s.pm10Value[0]))+" ㎍/m³\n          ")]):a("span",[t._v("\n            No data\n          ")])]),t._v(" "),a("span",{staticClass:"val25",class:t.$parent.getStateValue("PM25",t.parseValueStr(s.pm25Value[0])).stateClass},[t._v("\n          초미세먼지 :\n          "),t.parseValueStr(s.pm25Value[0])?a("span",[t._v("\n            "+t._s(t.parseValueStr(s.pm25Value[0]))+" ㎍/m³\n          ")]):a("span",[t._v("\n            No data\n          ")])])])])}))])},staticRenderFns:[]};var P=a("VU/8")(D,S,!1,function(t){a("i5te")},null,null).exports,M=a("NYxO"),y={data:function(){return{isShow:!1,subDustData:null}},computed:r()({},Object(M.b)({pending:"pending"})),components:{SubDustState:P},props:["sido","valuePM10","valuePM25","dataTime"],methods:{setSubDustState:function(t){var s=this;this.pending?this.$notify.open({content:"잠시만 기다려주세요",icon:"smile-o",placement:"left-center",transition:"bounce",type:"primary"}):(this.$store.commit("START_PENDING"),this.$ls.get(t)?(this.isShow=!0,this.subDustData=this.$ls.get(t),this.$store.commit("END_PENDING")):this.$http.get("/dust?subpm="+t).then(function(a){var e=new Date;s.$ls.set(t,a.data.response.body[0].items[0],e.getMinutes()>30?18e5:36e5),s.isShow=!0,s.subDustData=s.$ls.get(t),s.$store.commit("END_PENDING")}).catch(function(t){console.log(t),s.hasProblem=!0,s.$store.commit("END_PENDING")}))},parseValueStr:function(t){return parseInt(t.replace(/"/,""))},parseDataTime:function(t){return t.replace(/....-/,"")+" 기준"},getStateValue:function(t,s){return s<=("PM10"===t?30:15)?{icon:"sentiment_very_satisfied",state:"좋음",stateClass:"state-very-good"}:s<=("PM10"===t?80:35)?{icon:"sentiment_satisfied",state:"보통",stateClass:"state-good"}:s<=("PM10"===t?150:75)?{icon:"sentiment_dissatisfied",state:"나쁨",stateClass:"state-bad"}:{icon:"sentiment_very_dissatisfied",state:"매우-나쁨",stateClass:"state-very-bad"}}}},w={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dust-item",on:{click:function(s){t.setSubDustState(t.sido)}}},[a("div",{staticClass:"sido-name"},[t._v("\n    "+t._s(t.sido)+"\n    "),a("transition",{attrs:{name:"fade"}},[t.pending?a("span",{staticClass:"button is-primary is-loading"},[t._v("Loading")]):t._e()]),t._v(" "),a("span",{staticClass:"data-time"},[t._v("\n      "+t._s(t.parseDataTime(t.dataTime[0]))+"\n    ")])],1),t._v(" "),a("div",{staticClass:"value-pm10",class:t.getStateValue("PM10",t.parseValueStr(t.valuePM10[0])).stateClass},[a("span",{staticClass:"dust-state-icon"},[a("i",{staticClass:"material-icons"},[t._v("\n        "+t._s(t.getStateValue("PM10",t.parseValueStr(t.valuePM10[0])).icon)+"\n      ")])]),t._v(" "),a("span",{staticClass:"dust-state-desc"},[t._v("\n      미세먼지\n      "),a("br"),t._v(" "),t.parseValueStr(t.valuePM10[0])?a("div",[a("span",{staticClass:"pm-value"},[t._v(t._s(t.parseValueStr(t.valuePM10[0])))]),t._v(" ㎍/m³\n      ")]):a("div",[a("span",[t._v("No data")])])])]),t._v(" "),a("div",{staticClass:"value-pm25",class:t.getStateValue("PM25",t.parseValueStr(t.valuePM25[0])).stateClass},[a("span",{staticClass:"dust-state-icon"},[a("i",{staticClass:"material-icons"},[t._v("\n        "+t._s(t.getStateValue("PM25",t.parseValueStr(t.valuePM25[0])).icon)+"\n      ")])]),t._v(" "),a("span",{staticClass:"dust-state-desc"},[t._v("\n      초미세먼지\n      "),a("br"),t._v(" "),t.parseValueStr(t.valuePM25[0])?a("div",[a("span",{staticClass:"pm-value"},[t._v(t._s(t.parseValueStr(t.valuePM25[0])))]),t._v(" ㎍/m³\n      ")]):a("div",[a("span",[t._v("No data")])])])]),t._v(" "),a("sub-dust-state",{attrs:{sidoName:t.sido,isShow:t.isShow,subDustData:t.subDustData}})],1)},staticRenderFns:[]};var $={name:"dust-state",data:function(){return{hasProblem:!1,dustDataName:"dustData",dustData:{PM10:null,PM25:null},sidoName:{seoul:"서울",busan:"부산",daegu:"대구",incheon:"인천",gwangju:"광주",daejeon:"대전",ulsan:"울산",gyeonggi:"경기",gangwon:"강원",chungbuk:"충북",chungnam:"충남",jeonbuk:"전북",jeonnam:"전남",gyeongbuk:"경북",gyeongnam:"경남",jeju:"제주",sejong:"세종"}}},components:{DustStateItem:a("VU/8")(y,w,!1,function(t){a("bXQG")},"data-v-ec71cc66",null).exports},created:function(){this.setDustState("PM10"),this.setDustState("PM25")},mounted:function(){this.entry=!0},methods:{setDustState:function(t){var s=this;if("PM10"===!t||"PM25"===!t)return console.log("setDustState Function params check"),!1;this.$ls.get(this.dustDataName+t)?this.parseDustData(t):this.$http.get("/dust?pm="+t).then(function(a){var e=new Date;s.$ls.set(s.dustDataName+t,a.data.response.body[0].items[0].item[0],e.getMinutes()>30?18e5:36e5),s.parseDustData(t)}).catch(function(t){console.log(t),s.hasProblem=!0})},parseDustData:function(t){this.dustData[t]={},this.dustData[t+"__dataTime"]=this.$ls.get(this.dustDataName+t).dataTime;var s=!0,a=!1,e=void 0;try{for(var n,i=g()(f()(this.sidoName));!(s=(n=i.next()).done);s=!0){var o=n.value,u=C()(o,1)[0];this.dustData[t][u]=this.$ls.get(this.dustDataName+t)[u]}}catch(t){a=!0,e=t}finally{try{!s&&i.return&&i.return()}finally{if(a)throw e}}},logout:function(){var t=this;d.auth().signOut().then(function(){t.$store.commit("LOGOUT"),t.$nextTick(function(){t.isLoggedIn=t.$store.state.isLoggedIn})})}}},N={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dust-state"},[a("div",{staticClass:"top-bar"},[t._m(0),t._v(" "),a("button",{staticClass:"button",on:{click:t.logout}},[t._v("\n      log out\n    ")])]),t._v(" "),a("div",{staticClass:"contents"},[t.hasProblem?a("span",{staticClass:"error-text"},[t._v("\n      API 에러"),a("br"),t._v("\n      잠시후 다시 접속해 주세요.\n    ")]):t._e(),t._v(" "),a("div",{staticClass:"dust-state-items"},[t._m(1),t._v(" "),t._l(t.dustData.PM10,function(s,e){return t.dustData.PM25?a("dust-state-item",{key:e,attrs:{sido:t.sidoName[e],valuePM10:s,valuePM25:t.dustData.PM25[e],dataTime:t.dustData.PM10__dataTime},on:{click:function(s){t.setSubDustState(e)}}}):t._e()})],2)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-cloud"})]),this._v(" "),s("span",{staticClass:"text"},[this._v("미세먼지 체크")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dust-info"},[a("div",{staticClass:"info-PM10"},[a("span",{staticClass:"info-type"},[t._v("미세먼지")]),t._v(" "),a("div",{staticClass:"info-items"},[a("span",[t._v("좋음"),a("br"),t._v("~30㎍/m³")]),t._v(" "),a("span",[t._v("보통"),a("br"),t._v("~80㎍/m³")]),t._v(" "),a("span",[t._v("나쁨"),a("br"),t._v("~150㎍/m³")]),t._v(" "),a("span",[t._v("매우나쁨"),a("br"),t._v("151㎍/m³~")])])]),t._v(" "),a("div",{staticClass:"info-PM25"},[a("span",{staticClass:"info-type"},[t._v("초미세먼지")]),t._v(" "),a("div",{staticClass:"info-items"},[a("span",[t._v("좋음"),a("br"),t._v("~15㎍/m³")]),t._v(" "),a("span",[t._v("보통"),a("br"),t._v("~35㎍/m³")]),t._v(" "),a("span",[t._v("나쁨"),a("br"),t._v("~75㎍/m³")]),t._v(" "),a("span",[t._v("매우나쁨"),a("br"),t._v("76㎍/m³~")])])])])}]};var V=a("VU/8")($,N,!1,function(t){a("ewfB")},"data-v-e3153104",null).exports,I={name:"HelloWorld",data:function(){return{login:"login"}},components:{authBox:m,dustState:V},computed:r()({},Object(M.b)({isLoggedIn:"isLoggedIn"})),created:function(){var t=this;d.auth().onAuthStateChanged(function(s){s?(console.log("is logged in"),t.$store.commit("LOGIN")):console.log("log out")})}},E={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-wrap"},[t.isLoggedIn?a("dust-state"):t._e(),t._v(" "),t.isLoggedIn?t._e():a("div",[t._m(0),t._v(" "),a("div",{staticClass:"athentication"},[a("auth-box",{attrs:{authType:t.login}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",[s("span",{staticClass:"icon"},[s("i",{staticClass:"fa fa-cloud"})]),this._v(" "),s("span",{staticClass:"text"},[this._v("미세먼지 체크")])])}]};var T=a("VU/8")(I,E,!1,function(t){a("2M3f")},"data-v-299b6f54",null).exports,L={data:function(){return{signup:"signup"}},components:{authBox:m},created:function(){this.$store.state.isLoggedIn&&this.$router.push({name:"Main"})}},k={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"signup-wrap"},[s("h2",[this._v("SIGN UP")]),this._v(" "),s("auth-box",{attrs:{authType:this.signup}})],1)},staticRenderFns:[]};var x=a("VU/8")(L,k,!1,function(t){a("Ayyi")},"data-v-69282626",null).exports;e.default.use(o.a);var O,G=new o.a({mode:"history",routes:[{path:"/",name:"Main",component:T},{path:"/signup",name:"Signup",component:x},{path:"/id",name:"DustState",component:V}]}),j=a("bOdI"),A=a.n(j),U=(O={},A()(O,"LOGIN",function(t){t.isLoggedIn=!0}),A()(O,"LOGOUT",function(t){t.isLoggedIn=!1}),A()(O,"START_PENDING",function(t){t.pending=!0}),A()(O,"END_PENDING",function(t){t.pending=!1}),O),R={login:function(t){(0,t.commit)("LOGIN")},logout:function(t){(0,t.commit)("LOGOUT")}};e.default.use(M.a);var F=new M.a.Store({strict:!1,state:{isLoggedIn:!1,pending:!1},mutations:U,actions:R,getters:{isLoggedIn:function(t){return t.isLoggedIn},pending:function(t){return t.pending}}}),W=a("mtWM"),B=a.n(W),J=a("xfLu"),X=a.n(J),H=a("yXtV"),Y=a.n(H);a("/YjR");e.default.use(Y.a,{namespace:"vuejs__",name:"ls",storage:"local"}),e.default.use(X.a),e.default.prototype.$http=B.a,e.default.config.productionTip=!1,new e.default({el:"#app",router:G,store:F,components:{App:i},template:"<App/>"})},XPJD:function(t,s){},bXQG:function(t,s){},ewfB:function(t,s){},i5te:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.47b0469263ba1acb2f38.js.map