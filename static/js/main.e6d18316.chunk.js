(this.webpackJsonpwordbook=this.webpackJsonpwordbook||[]).push([[0],{52:function(e,t,n){e.exports=n(82)},70:function(e,t,n){},71:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},72:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n.n(c),u=n(21),s=n(8),i=n(44),l=n(11),p=(n(61),n(51)),b=n(31),d=n(45),f=n.n(d),m=n(5),E={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"\xa0CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},O={currentUser:null,error:null,signCheckEnd:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SIGN_IN_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{currentUser:t.payload,error:null,signCheckEnd:!0});case E.SIGN_OUT_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{currentUser:null,error:null,signCheckEnd:!0});case E.SIGN_IN_FAILURE:case E.SIGN_OUT_FAILURE:case E.SIGN_UP_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload,signCheckEnd:!0});default:return e}},_={CREATE_WORD_START:"CREATE_WORD_START",CREATE_WORD_SUCCESS:"CREATE_WORD_SUCCESS",CREATE_WORD_FAILURE:"CREATE_WORD_FAILURE",DELETE_WORD_START:"DELETE_WORD_START",DELETE_WORD_SUCCESS:"DELETE_WORD_SUCCESS",DELETE_WORD_FAILURE:"DELETE_WORD_FAILURE",FETCH_WORD_START:"FETCH_WORD_START",FETCH_WORD_START_FROM_USER:"FETCH_WORD_START_FROM_USER",FETCH_WORD_SUCCESS:"FETCH_WORD_SUCCESS",FETCH_WORD_FAILURE:"FETCH_WORD_FAILURE"},v={collections:null,isFetching:!1,error:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.CREATE_WORD_START:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null});case _.CREATE_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.CREATE_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.DELETE_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.DELETE_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.FETCH_WORD_START:case _.FETCH_WORD_START_FROM_USER:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null});case _.FETCH_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.FETCH_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});default:return e}},j={key:"root",storage:f.a,whitelist:[]},g=Object(l.c)({user:S,word:h}),x=Object(b.a)(j,g),R=n(2),w=n.n(R),T=n(3),C=n(18),I=n(27),U=n.n(I),N=(n(65),n(68),function(){var e=Object(C.a)(w.a.mark((function e(t,n){var r,a,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=W.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,o=new Date,e.prev=9,e.next=12,r.set(Object(m.a)({displayName:a,email:c,createdAt:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),k=function(){var e=Object(C.a)(w.a.mark((function e(t,n,r){var a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=W.collection("words"),c=new Date,e.prev=4,e.next=7,a.add(Object(m.a)(Object(m.a)({},n),{},{createdAt:c,uid:t.uid},r));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log("error creating word",e.t0.message);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(C.a)(w.a.mark((function e(t,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=W.collection("words"),e.prev=3,e.next=6,r.doc(n).delete();case 6:console.log("Document successfully deleted!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("error removing word",e.t0.message);case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.content,r=t.meaning,a=t.uid;return{id:e.id,content:n,meaning:r,uid:a}}));return console.log(t),t};U.a.initializeApp({apiKey:"AIzaSyCiOvCSbY7Le_sz-AlM_zxk_A4tWCoW5g8",authDomain:"wordbook-c7d53.firebaseapp.com",databaseURL:"https://wordbook-c7d53.firebaseio.com",projectId:"wordbook-c7d53",storageBucket:"wordbook-c7d53.appspot.com",messagingSenderId:"983028184348",appId:"1:983028184348:web:5c8fa8062aa05f8c14b6d9",measurementId:"G-D22170SBM3"});var D=function(){return new Promise((function(e,t){var n=F.onAuthStateChanged((function(t){n(),e(t)}),t)}))},F=U.a.auth(),W=U.a.firestore(),G=new U.a.auth.GoogleAuthProvider;G.setCustomParameters({prompt:"select_account"});U.a;var L=function(e){return{type:E.SIGN_IN_FAILURE,payload:e}},P=function(e){var t=e.user,n=e.addtionalData;return{type:E.SIGN_UP_SUCCESS,payload:{user:t,addtionalData:n}}},H=w.a.mark(te),M=w.a.mark(ne),q=w.a.mark(re),z=w.a.mark(ae),K=w.a.mark(ce),B=w.a.mark(oe),J=w.a.mark(ue),Y=w.a.mark(se),Q=w.a.mark(ie),V=w.a.mark(le),X=w.a.mark(pe),Z=w.a.mark(be),$=w.a.mark(de),ee=w.a.mark(fe);function te(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(T.b)(N,e);case 3:return t=r.sent,r.next=6,t.get();case 6:return n=r.sent,r.next=9,Object(T.c)((a=Object(m.a)({id:n.id},n.data()),{type:E.SIGN_IN_SUCCESS,payload:a}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(T.c)(L(r.t0));case 15:case"end":return r.stop()}var a}),H,null,[[0,11]])}function ne(){var e,t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.signInWithPopup(G);case 3:return e=n.sent,t=e.user,n.next=7,te(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(T.c)(L(n.t0));case 13:case"end":return n.stop()}}),M,null,[[0,9]])}function re(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onGoogleSignInStart"),e.next=3,Object(T.d)(E.GOOGLE_SIGN_IN_START,ne);case 3:case"end":return e.stop()}}),q)}function ae(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,o.prev=1,o.next=4,F.signInWithEmailAndPassword(n,r);case 4:return a=o.sent,c=a.user,o.next=8,te(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(T.c)(L(o.t0));case 14:case"end":return o.stop()}}),z,null,[[1,10]])}function ce(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(E.EMAIL_SIGN_IN_START,ae);case 2:case"end":return e.stop()}}),K)}function oe(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:if(e=t.sent){t.next=7;break}return t.next=7,Object(T.c)(L());case 7:return t.next=9,te(e);case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(T.c)(L(t.t0));case 15:case"end":return t.stop()}}),B,null,[[0,11]])}function ue(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(E.CHECK_USER_SESSION,oe);case 2:case"end":return e.stop()}}),J)}function se(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.signOut();case 3:return e.next=5,Object(T.c)({type:E.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(T.c)((t=e.t0,{type:E.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),Y,null,[[0,7]])}function ie(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(E.SIGN_OUT_START,se);case 2:case"end":return e.stop()}}),Q)}function le(e){var t,n,r,a,c,o;return w.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,u.prev=1,u.next=4,F.createUserWithEmailAndPassword(n,r);case 4:return c=u.sent,o=c.user,u.next=8,Object(T.c)(P({user:o,additionalData:{displayName:a}}));case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(T.c)((s=u.t0,{type:E.SIGN_UP_FAILURE,payload:s}));case 14:case"end":return u.stop()}var s}),V,null,[[1,10]])}function pe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(E.SIGN_UP_START,le);case 2:case"end":return e.stop()}}),X)}function be(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,t.additionalData,r.next=3,te(n);case 3:case"end":return r.stop()}}),Z)}function de(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(E.SIGN_UP_SUCCESS,be);case 2:case"end":return e.stop()}}),$)}function fe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.b)(re),Object(T.b)(ce),Object(T.b)(ue),Object(T.b)(ie),Object(T.b)(pe),Object(T.b)(de)]);case 2:case"end":return e.stop()}}),ee)}var me=function(e){return{type:_.FETCH_WORD_SUCCESS,payload:e}},Ee=function(e){return{type:_.FETCH_WORD_FAILURE,payload:e}},Oe=w.a.mark(we),Se=w.a.mark(Te),_e=w.a.mark(Ce),ve=w.a.mark(Ie),he=w.a.mark(Ue),je=w.a.mark(Ne),ge=w.a.mark(ke),xe=w.a.mark(ye),Re=w.a.mark(Ae);function we(e){var t,n,r,a,c,o,u;return w.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.content,r=t.meaning,s.prev=1,s.next=4,D();case 4:if(a=s.sent){s.next=7;break}return s.abrupt("return");case 7:return s.next=9,Object(T.b)(k,a,{content:n,meaning:r});case 9:return c=s.sent,s.next=12,c.where("uid","==",a.uid).get();case 12:return o=s.sent,s.next=15,Object(T.b)(A,o);case 15:return u=s.sent,s.next=18,Object(T.c)({type:_.CREATE_WORD_SUCCESS,payload:u});case 18:s.next=24;break;case 20:return s.prev=20,s.t0=s.catch(1),s.next=24,Object(T.c)((i=s.t0,{type:_.CREATE_WORD_FAILURE,payload:i}));case 24:case"end":return s.stop()}var i}),Oe,null,[[1,20]])}function Te(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,D();case 4:if(n=o.sent){o.next=7;break}return o.abrupt("return");case 7:return o.next=9,Object(T.b)(y,n,t);case 9:return r=o.sent,o.next=12,r.where("uid","==",n.uid).get();case 12:return a=o.sent,o.next=15,Object(T.b)(A,a);case 15:return c=o.sent,o.next=18,Object(T.c)({type:_.DELETE_WORD_SUCCESS,payload:c});case 18:o.next=24;break;case 20:return o.prev=20,o.t0=o.catch(1),o.next=24,Object(T.c)((u=o.t0,{type:_.DELETE_WORD_FAILURE,payload:u}));case 24:case"end":return o.stop()}var u}),Se,null,[[1,20]])}function Ce(){var e,t,n,r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D();case 3:if(e=a.sent){a.next=6;break}return a.abrupt("return");case 6:return console.log(e.uid),t=W.collection("words"),a.next=10,t.where("uid","==",e.uid).get();case 10:return n=a.sent,a.next=13,Object(T.b)(A,n);case 13:return r=a.sent,a.next=16,Object(T.c)(me(r));case 16:a.next=22;break;case 18:return a.prev=18,a.t0=a.catch(0),a.next=22,Object(T.c)(Ee(a.t0.message));case 22:case"end":return a.stop()}}),_e,null,[[0,18]])}function Ie(){var e,t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=W.collection("words"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(T.b)(A,t);case 7:return n=r.sent,r.next=10,Object(T.c)(me(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(T.c)(Ee(r.t0.message));case 16:case"end":return r.stop()}}),ve,null,[[0,12]])}function Ue(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(_.FETCH_WORD_START_FROM_USER,Ce);case 2:case"end":return e.stop()}}),he)}function Ne(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(_.FETCH_WORD_START,Ie);case 2:case"end":return e.stop()}}),je)}function ke(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(_.CREATE_WORD_START,we);case 2:case"end":return e.stop()}}),ge)}function ye(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(_.DELETE_WORD_START,Te);case 2:case"end":return e.stop()}}),xe)}function Ae(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.b)(ke),Object(T.b)(ye),Object(T.b)(Ne),Object(T.b)(Ue)]);case 2:case"end":return e.stop()}}),Re)}var De=w.a.mark(Fe);function Fe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([Object(T.b)(Ae),Object(T.b)(fe)]);case 2:case"end":return e.stop()}}),De)}var We=Object(p.a)(),Ge=[We];var Le=Object(l.e)(x,l.a.apply(void 0,Ge));We.run(Fe);var Pe=Object(b.b)(Le),He=(n(70),n(9)),Me=(n(71),n(10)),qe=function(e){return e.user},ze=Object(Me.a)([qe],(function(e){return e.currentUser})),Ke=Object(Me.a)([qe],(function(e){return e.signCheckEnd})),Be=(n(72),Object(Me.b)({currentUser:ze})),Je=Object(s.b)(Be,(function(e){return{signOutStart:function(){return e({type:E.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.signOutStart;return a.a.createElement("div",{className:"header"},a.a.createElement(u.b,{className:"logo-container",to:"/"},"WORDBOOK"),a.a.createElement("div",{className:"options"},a.a.createElement(u.b,{className:"option",to:"/word"},"WORD"),t?a.a.createElement(u.b,{className:"option",as:"div",onClick:n},"SIGN OUT"):a.a.createElement(u.b,{className:"option",to:"/signin"},"SIGN IN")))})),Ye=n(26),Qe=n(15),Ve=n(16);function Xe(){var e=Object(Qe.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(Qe.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ze=function(){return e},e}var $e=Ve.b.div(Ze()),et=Ve.b.div(Xe()),tt=function(e){return function(t){var n=t.isLoading,r=Object(Ye.a)(t,["isLoading"]);return n?a.a.createElement($e,null,a.a.createElement(et,null)):a.a.createElement(e,r)}},nt=function(e){return e.word},rt=Object(Me.a)([nt],(function(e){return e.collections})),at=(Object(Me.a)([nt],(function(e){return e.isFetching})),Object(Me.a)([nt],(function(e){return!!e.collections})),n(49)),ct=(n(74),n(50)),ot=n.n(ct);function ut(){var e=Object(Qe.a)(["\nbackground:none;\nborder:0;\nfont-size:20px;\npadding: 5px;\nmargin: 5px 5px 0 0;\nline-height:0;\noutline:none;\n&:hover {\n    color: #357ae8;\n    \n}\n","\n\n"]);return ut=function(){return e},e}function st(){var e=Object(Qe.a)(["cursor:pointer;"]);return st=function(){return e},e}function it(){var e=Object(Qe.a)(["cursor:move;"]);return it=function(){return e},e}function lt(){var e=Object(Qe.a)(["\ntext-align:right;\n\n"]);return lt=function(){return e},e}var pt=Ve.b.div(lt()),bt=Ve.b.button(ut(),(function(e){return e.isMove?Object(Ve.a)(it()):Object(Ve.a)(st())})),dt=Object(s.b)(null,(function(e){return{deleteWordStart:function(t){return e(function(e){return{type:_.DELETE_WORD_START,payload:e}}(t))}}}))((function(e){var t=e.deleteWordStart,n=e.id,r=e.index,c=e.item,o=e.blur;return a.a.createElement("li",{className:"card"},a.a.createElement("div",{className:"card-content"},a.a.createElement(pt,null,a.a.createElement(bt,{onClick:function(){t(n)}},a.a.createElement(at.Icon,{icon:ot.a}))),a.a.createElement("div",{className:"card-inner"},a.a.createElement("span",{className:"num"},r),a.a.createElement("h3",null,c.content),a.a.createElement("p",{className:o?"blur":""},c.meaning))))})),ft=Object(Me.b)({collections:rt,currentUser:ze}),mt=Object(s.b)(ft,(function(e){return{fetchWordStart:function(){return e({type:_.FETCH_WORD_START})}}}))((function(e){var t=e.collections,n=e.fetchWordStart,c=e.currentUser;return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement("div",null,a.a.createElement("ul",{className:"card-list"},t&&t.map((function(e,t){return a.a.createElement(dt,{key:e.id,index:(n=t+1,n<10?"0"+n:n),item:e,blur:!c});var n}))))})),Et=Object(Me.b)({isLoading:function(e){return!Ke(e)}}),Ot=Object(l.d)(Object(s.b)(Et),tt)(mt),St=(n(75),Object(Me.b)({collections:rt})),_t=Object(s.b)(St,(function(e){return{fetchWordsStartFromUser:function(){return e({type:_.FETCH_WORD_START_FROM_USER})}}}))((function(e){var t=e.collections,n=e.fetchWordsStartFromUser;return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement("div",null,a.a.createElement("ul",{className:"card-list"},t&&t.map((function(e,t){return a.a.createElement(dt,{key:e.id,id:e.id,index:(n=t+1,n<10?"0"+n:n),item:e});var n}))))})),vt=n(19),ht=n(25),jt=(n(76),function(e){var t=e.handleChange,n=e.label,r=Object(Ye.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),n?a.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},n):null)});function gt(){var e=Object(Qe.a)(["\nmin-width: 165px;\nwidth: auto;\nheight: 50px;\nletter-spacing: 0.5px;\nline-height: 50px;\npadding: 0 35px 0 35px;\nfont-size: 15px;\nbackground-color: black;\ncolor: white;\ntext-transform: uppercase;\nfont-family: 'Open Sans Condensed';\nfont-weight: bolder;\nborder: none;\ncursor: pointer;\ndisplay: flex;\njustify-content: center;\n\n","\n\n\n"]);return gt=function(){return e},e}function xt(){var e=Object(Qe.a)(["\n\n    background-color: #4285f4;\n    color: white;\n  \n    &:hover {\n      background-color: #357ae8;\n      border: none;\n    }\n"]);return xt=function(){return e},e}function Rt(){var e=Object(Qe.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n    }\n"]);return Rt=function(){return e},e}function wt(){var e=Object(Qe.a)(["\n    background-color:black;\n    color:white;\n    border:none;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return wt=function(){return e},e}var Tt=Object(Ve.a)(wt()),Ct=Object(Ve.a)(Rt()),It=Object(Ve.a)(xt()),Ut=Ve.b.button(gt(),(function(e){return e.isGoogleSignIn?It:e.inverted?Ct:Tt})),Nt=function(e){var t=e.children,n=Object(Ye.a)(e,["children"]);return a.a.createElement(Ut,n,t)},kt=Object(s.b)(null,(function(e){return{createWordStart:function(t,n){return e({type:_.CREATE_WORD_START,payload:{content:t,meaning:n}})}}}))((function(e){var t=e.createWordStart,n=Object(r.useState)({content:"",meaning:""}),c=Object(ht.a)(n,2),o=c[0],u=c[1],s=o.content,i=o.meaning,l=function(e){var t=e.target,n=t.name,r=t.value;u(Object(m.a)(Object(m.a)({},o),{},Object(vt.a)({},n,r)))},p=function(){var e=Object(C.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(s,i),u({content:"",meaning:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{className:"create-word",onSubmit:p},a.a.createElement("div",{className:"create-word-inner"},a.a.createElement(jt,{name:"content",type:"text",value:s,onChange:l,label:"content",required:!0}),a.a.createElement(jt,{name:"meaning",type:"text",onChange:l,value:i,label:"meaning",required:!0}),a.a.createElement(Nt,{type:"submit"},"Add Wordbook")))})),yt=(n(77),Object(Me.b)({currentUser:ze})),At=Object(s.b)(yt)((function(e){var t=e.history,n=e.currentUser;return Object(r.useEffect)((function(){n||t.push("/signin")}),n),a.a.createElement("div",{className:"container"},a.a.createElement(kt,null),a.a.createElement(_t,null))})),Dt=Object(Me.b)({isLoading:function(e){return!Ke(e)}}),Ft=Object(l.d)(Object(s.b)(Dt),tt)(At),Wt=(n(78),n(79),Object(s.b)(null,(function(e){return{googleSignInStart:function(){return e({type:E.GOOGLE_SIGN_IN_START})},emailSignInStart:function(t,n){return e({type:E.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=Object(r.useState)({email:"",password:""}),o=Object(ht.a)(c,2),u=o[0],s=o[1],i=u.email,l=u.password,p=function(){var e=Object(C.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(i,l);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.value,r=t.name;s(Object(m.a)(Object(m.a)({},u),{},Object(vt.a)({},r,n)))};return a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",null,"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:p},a.a.createElement(jt,{name:"email",type:"email",value:i,onChange:b,label:"email",required:!0}),a.a.createElement(jt,{name:"password",type:"password",value:l,onChange:b,label:"passowrd",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(Nt,{type:"submit"},"Sign In"),a.a.createElement(Nt,{type:"button",onClick:n,isGoogleSignIn:!0},"Sign In with Google"))))}))),Gt=(n(80),Object(s.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:E.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(ht.a)(n,2),o=c[0],u=c[1],s=o.displayName,i=o.email,l=o.password,p=o.confirmPassword,b=function(){var e=Object(C.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),l===p){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({displayName:s,email:i,password:l});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,r=t.name;u(Object(m.a)(Object(m.a)({},o),{},Object(vt.a)({},r,n)))};return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"title"},"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:b},a.a.createElement(jt,{name:"displayName",type:"text",value:s,onChange:d,label:"displayName",required:!0}),a.a.createElement(jt,{name:"email",type:"email",value:i,onChange:d,label:"email",required:!0}),a.a.createElement(jt,{name:"password",type:"password",value:l,onChange:d,label:"passowrd",required:!0}),a.a.createElement(jt,{name:"confirmPassword",type:"password",value:p,onChange:d,label:"confirmPassword",required:!0}),a.a.createElement(Nt,{type:"submit"},"Sign Up")))}))),Lt=Object(s.b)((function(e){return{error:e.user.error}}))((function(e){var t=e.error;return Object(r.useEffect)((function(){console.log(t&&t.hasOwnProperty("code"))}),[t]),a.a.createElement("div",{className:"sign-in-and-sign-up"},a.a.createElement("span",{className:"error"},t&&t.hasOwnProperty("code")?t.message:" "),a.a.createElement("div",{className:"inner"},a.a.createElement(Wt,null),a.a.createElement(Gt,null)))})),Pt=(n(81),Object(Me.b)({currentUser:ze})),Ht=Object(s.b)(Pt,(function(e){return{checkUserSession:function(){return e({type:E.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"App"},a.a.createElement(Je,null),a.a.createElement(He.d,null,a.a.createElement(He.b,{exact:!0,path:"/",component:Ot}),a.a.createElement(He.b,{exact:!0,path:"/wordbook",component:Ot}),a.a.createElement(He.b,{path:"/word",component:Ft}),a.a.createElement(He.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(He.a,{to:"/"}):a.a.createElement(Lt,null)}}),a.a.createElement(He.b,{exact:!0,path:"/signup",render:function(){return n?a.a.createElement(He.a,{to:"/"}):a.a.createElement(Gt,null)}})))}));o.a.render(a.a.createElement(s.a,{store:Le},a.a.createElement(u.a,null,a.a.createElement(i.a,{persistor:Pe},a.a.createElement(Ht,null)))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e6d18316.chunk.js.map