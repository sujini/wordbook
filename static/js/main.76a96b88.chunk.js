(this.webpackJsonpwordbook=this.webpackJsonpwordbook||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),o=n.n(c),u=n(21),i=n(8),s=n(49),l=n(11),b=(n(67),n(57)),p=n(35),d=n(50),f=n.n(d),m=n(5),E={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",FACEBOOK_SIGN_IN_START:"FACEBOOK_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"\xa0CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},O={currentUser:null,error:null,signCheckEnd:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SIGN_IN_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{currentUser:t.payload,error:null,signCheckEnd:!0});case E.SIGN_OUT_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{currentUser:null,error:null,signCheckEnd:!0});case E.SIGN_IN_FAILURE:case E.SIGN_OUT_FAILURE:case E.SIGN_UP_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload,signCheckEnd:!0});default:return e}},_={CREATE_WORD_START:"CREATE_WORD_START",CREATE_WORD_SUCCESS:"CREATE_WORD_SUCCESS",CREATE_WORD_FAILURE:"CREATE_WORD_FAILURE",DELETE_WORD_START:"DELETE_WORD_START",DELETE_WORD_SUCCESS:"DELETE_WORD_SUCCESS",DELETE_WORD_FAILURE:"DELETE_WORD_FAILURE",FETCH_WORD_START_FROM_USER:"FETCH_WORD_START_FROM_USER",FETCH_WORD_SUCCESS:"FETCH_WORD_SUCCESS",FETCH_WORD_FAILURE:"FETCH_WORD_FAILURE",UPDATE_WORD_LIMIT:"UPDATE_WORD_LIMIT",SEARCH_WORD_START:"SEARCH_WORD_START",SEARCH_WORD_SUCCESS:"SEARCH_WORD_SUCCESS",SEARCH_WORD_FAILURE:"SEARCH_WORD_FAILURE"},h={collections:null,searchCollections:null,isFetching:!1,error:null,limit:6},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.UPDATE_WORD_LIMIT:return Object(m.a)(Object(m.a)({},e),{},{limit:t.payload});case _.CREATE_WORD_START:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null});case _.CREATE_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.CREATE_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.DELETE_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.DELETE_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.SEARCH_WORD_START:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null});case _.FETCH_WORD_START_FROM_USER:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null,limit:t.payload});case _.FETCH_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.FETCH_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.SEARCH_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,searchCollections:t.payload,error:null});case _.SEARCH_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});default:return e}},j={key:"root",storage:f.a,whitelist:[]},g=Object(l.c)({user:S,word:v}),R=Object(p.a)(j,g),x=n(2),w=n.n(x),C=n(3),I=n(15),T=n(25),k=n.n(T),y=(n(71),n(74),function(){var e=Object(I.a)(w.a.mark((function e(t,n){var r,a,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=L.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,o=new Date,e.prev=9,e.next=12,r.set(Object(m.a)({displayName:a,email:c,createdAt:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),N=function(){var e=Object(I.a)(w.a.mark((function e(t,n,r){var a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=L.collection("words"),c=new Date,e.prev=4,e.next=7,a.add(Object(m.a)(Object(m.a)({},n),{},{createdAt:c,uid:t.uid},r));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log("error creating word",e.t0.message);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(I.a)(w.a.mark((function e(t,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=L.collection("words"),e.prev=3,e.next=6,r.doc(n).delete();case 6:console.log("Document successfully deleted!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("error removing word",e.t0.message);case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t,n){return e.apply(this,arguments)}}(),U=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.content,r=t.meaning,a=t.uid;return{id:e.id,content:n,meaning:r,uid:a}}));return console.log(t),t};k.a.initializeApp({apiKey:"AIzaSyCiOvCSbY7Le_sz-AlM_zxk_A4tWCoW5g8",authDomain:"wordbook-c7d53.firebaseapp.com",databaseURL:"https://wordbook-c7d53.firebaseio.com",projectId:"wordbook-c7d53",storageBucket:"wordbook-c7d53.appspot.com",messagingSenderId:"983028184348",appId:"1:983028184348:web:5c8fa8062aa05f8c14b6d9",measurementId:"G-D22170SBM3"});var D=function(){return new Promise((function(e,t){var n=W.onAuthStateChanged((function(t){n(),e(t)}),t)}))},W=k.a.auth(),L=k.a.firestore(),F=new k.a.auth.GoogleAuthProvider;F.setCustomParameters({prompt:"select_account"});var G=new k.a.auth.FacebookAuthProvider;G.setCustomParameters({prompt:"select_account"});k.a;var H=function(){return{type:E.GOOGLE_SIGN_IN_START}},P=function(){return{type:E.FACEBOOK_SIGN_IN_START}},M=function(e){return{type:E.SIGN_IN_FAILURE,payload:e}},B=function(e){var t=e.user,n=e.addtionalData;return{type:E.SIGN_UP_SUCCESS,payload:{user:t,addtionalData:n}}},q=w.a.mark(oe),z=w.a.mark(ue),K=w.a.mark(ie),J=w.a.mark(se),X=w.a.mark(le),Y=w.a.mark(be),Q=w.a.mark(pe),V=w.a.mark(de),Z=w.a.mark(fe),$=w.a.mark(me),ee=w.a.mark(Ee),te=w.a.mark(Oe),ne=w.a.mark(Se),re=w.a.mark(_e),ae=w.a.mark(he),ce=w.a.mark(ve);function oe(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(C.b)(y,e);case 3:return t=r.sent,r.next=6,t.get();case 6:return n=r.sent,r.next=9,Object(C.c)((a=Object(m.a)({id:n.id},n.data()),{type:E.SIGN_IN_SUCCESS,payload:a}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(C.c)(M(r.t0));case 15:case"end":return r.stop()}var a}),q,null,[[0,11]])}function ue(){var e,t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.signInWithPopup(F);case 3:return e=n.sent,t=e.user,n.next=7,oe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(C.c)(M(n.t0));case 13:case"end":return n.stop()}}),z,null,[[0,9]])}function ie(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onGoogleSignInStart"),e.next=3,Object(C.d)(E.GOOGLE_SIGN_IN_START,ue);case 3:case"end":return e.stop()}}),K)}function se(){var e,t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W.signInWithPopup(G);case 3:return e=n.sent,t=e.user,n.next=7,oe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(C.c)(M(n.t0));case 13:case"end":return n.stop()}}),J,null,[[0,9]])}function le(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(E.FACEBOOK_SIGN_IN_START,se);case 2:case"end":return e.stop()}}),X)}function be(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,o.prev=1,o.next=4,W.signInWithEmailAndPassword(n,r);case 4:return a=o.sent,c=a.user,o.next=8,oe(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(C.c)(M(o.t0));case 14:case"end":return o.stop()}}),Y,null,[[1,10]])}function pe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(E.EMAIL_SIGN_IN_START,be);case 2:case"end":return e.stop()}}),Q)}function de(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:if(e=t.sent){t.next=7;break}return t.next=7,Object(C.c)(M());case 7:return t.next=9,oe(e);case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(C.c)(M(t.t0));case 15:case"end":return t.stop()}}),V,null,[[0,11]])}function fe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(E.CHECK_USER_SESSION,de);case 2:case"end":return e.stop()}}),Z)}function me(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.signOut();case 3:return e.next=5,Object(C.c)({type:E.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(C.c)((t=e.t0,{type:E.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),$,null,[[0,7]])}function Ee(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(E.SIGN_OUT_START,me);case 2:case"end":return e.stop()}}),ee)}function Oe(e){var t,n,r,a,c,o;return w.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,u.prev=1,u.next=4,W.createUserWithEmailAndPassword(n,r);case 4:return c=u.sent,o=c.user,u.next=8,Object(C.c)(B({user:o,additionalData:{displayName:a}}));case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(C.c)((i=u.t0,{type:E.SIGN_UP_FAILURE,payload:i}));case 14:case"end":return u.stop()}var i}),te,null,[[1,10]])}function Se(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(E.SIGN_UP_START,Oe);case 2:case"end":return e.stop()}}),ne)}function _e(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,t.additionalData,r.next=3,oe(n);case 3:case"end":return r.stop()}}),re)}function he(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(E.SIGN_UP_SUCCESS,_e);case 2:case"end":return e.stop()}}),ae)}function ve(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.b)(le),Object(C.b)(ie),Object(C.b)(pe),Object(C.b)(fe),Object(C.b)(Ee),Object(C.b)(Se),Object(C.b)(he)]);case 2:case"end":return e.stop()}}),ce)}var je=n(51)("XOIA43O7CN","c60c5db698c1672afecda431544e9d24").initIndex("words"),ge=function(){var e=Object(I.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(I.a)(w.a.mark((function e(n,r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:je.search(t,{attributesToRetrieve:["content","meaning"],hitsPerPage:5}).then((function(e){var t=e.hits;e.e;n(t)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(e){return{type:_.UPDATE_WORD_LIMIT,payload:e}},xe=w.a.mark(Ue),we=w.a.mark(De),Ce=w.a.mark(We),Ie=w.a.mark(Le),Te=w.a.mark(Fe),ke=w.a.mark(Ge),ye=w.a.mark(He),Ne=w.a.mark(Pe),Ae=w.a.mark(Me);function Ue(e){var t,n,r,a,c,o,u;return w.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.content,r=t.meaning,i.prev=1,i.next=4,D();case 4:if(a=i.sent){i.next=7;break}return i.abrupt("return");case 7:return i.next=9,Object(C.b)(N,a,{content:n,meaning:r});case 9:return c=i.sent,i.next=12,c.where("uid","==",a.uid).orderBy("createdAt","desc").get();case 12:return o=i.sent,i.next=15,Object(C.b)(U,o);case 15:return u=i.sent,i.next=18,Object(C.c)({type:_.CREATE_WORD_SUCCESS,payload:u});case 18:i.next=24;break;case 20:return i.prev=20,i.t0=i.catch(1),i.next=24,Object(C.c)((s=i.t0,{type:_.CREATE_WORD_FAILURE,payload:s}));case 24:case"end":return i.stop()}var s}),xe,null,[[1,20]])}function De(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,D();case 4:if(n=o.sent){o.next=7;break}return o.abrupt("return");case 7:return o.next=9,Object(C.b)(A,n,t);case 9:return r=o.sent,o.next=12,r.where("uid","==",n.uid).orderBy("createdAt","desc").get();case 12:return a=o.sent,o.next=15,Object(C.b)(U,a);case 15:return c=o.sent,o.next=18,Object(C.c)({type:_.DELETE_WORD_SUCCESS,payload:c});case 18:o.next=24;break;case 20:return o.prev=20,o.t0=o.catch(1),o.next=24,Object(C.c)((u=o.t0,{type:_.DELETE_WORD_FAILURE,payload:u}));case 24:case"end":return o.stop()}var u}),we,null,[[1,20]])}function We(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,D();case 4:if(n=o.sent){o.next=7;break}return o.abrupt("return");case 7:return r=L.collection("words").where("uid","==",n.uid).orderBy("createdAt","desc").limit(t||6),o.next=10,r.get();case 10:return a=o.sent,o.next=13,Object(C.b)(U,a);case 13:if(!((c=o.sent).length<t)){o.next=16;break}return o.abrupt("return");case 16:return o.next=18,Object(C.c)(Re(t));case 18:return o.next=20,Object(C.c)({type:_.FETCH_WORD_SUCCESS,payload:c});case 20:o.next=26;break;case 22:return o.prev=22,o.t0=o.catch(1),o.next=26,Object(C.c)((u=o.t0.message,{type:_.FETCH_WORD_FAILURE,payload:u}));case 26:case"end":return o.stop()}var u}),Ce,null,[[1,22]])}function Le(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,console.log(t),r.next=5,Object(C.b)(ge,t);case 5:return n=r.sent,r.next=8,Object(C.c)({type:_.SEARCH_WORD_SUCCESS,payload:n});case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(C.c)((a=r.t0.message,{type:_.SEARCH_WORD_FAILURE,payload:a}));case 14:case"end":return r.stop()}var a}),Ie,null,[[1,10]])}function Fe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(_.FETCH_WORD_START_FROM_USER,We);case 2:case"end":return e.stop()}}),Te)}function Ge(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(_.SEARCH_WORD_START,Le);case 2:case"end":return e.stop()}}),ke)}function He(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(_.CREATE_WORD_START,Ue);case 2:case"end":return e.stop()}}),ye)}function Pe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)(_.DELETE_WORD_START,De);case 2:case"end":return e.stop()}}),Ne)}function Me(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.b)(He),Object(C.b)(Pe),Object(C.b)(Fe),Object(C.b)(Ge)]);case 2:case"end":return e.stop()}}),Ae)}var Be=w.a.mark(qe);function qe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.b)(Me),Object(C.b)(ve)]);case 2:case"end":return e.stop()}}),Be)}var ze=Object(b.a)(),Ke=[ze];var Je=Object(l.e)(R,l.a.apply(void 0,Ke));ze.run(qe);var Xe=Object(p.b)(Je),Ye=(n(76),n(10)),Qe=(n(77),n(9)),Ve=function(e){return e.user},Ze=Object(Qe.a)([Ve],(function(e){return e.currentUser})),$e=Object(Qe.a)([Ve],(function(e){return e.signCheckEnd})),et=n(19),tt=n(20),nt=(n(78),n(28)),rt=(n(79),function(e){var t=e.handleChange,n=e.label,r=Object(nt.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),n?a.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},n):null)}),at=n(13),ct=n(14);function ot(){var e=Object(at.a)(["\nmin-width: 165px;\nwidth: 100%;\nheight: 50px;\nletter-spacing: 0.5px;\nline-height: 50px;\nfont-size: 15px;\nbackground-color: black;\ncolor: white;\ntext-transform: uppercase;\nfont-family: 'Open Sans Condensed';\nfont-weight: bolder;\nborder: none;\ncursor: pointer;\ndisplay: flex;\njustify-content: center;\n\n","\n\n\n"]);return ot=function(){return e},e}function ut(){var e=Object(at.a)(["\n    width:auto;\n    background-color: #357ae8;\n    color: white;\n\n    &:hover{\n        background-color: #4285f4;\n    }\n"]);return ut=function(){return e},e}function it(){var e=Object(at.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    margin-top:10px;\n\n    span {\n        height:35px;\n    }\n    &:hover{\n        span {\n            border-bottom:1px solid #333;\n        }\n    }\n"]);return it=function(){return e},e}function st(){var e=Object(at.a)(["\n\n    background-color: #3b5998;\n    color: white;\n    width:49%;\n    float:left;\n    &:hover {\n      background-color: #365088;\n      border: none;\n    }\n"]);return st=function(){return e},e}function lt(){var e=Object(at.a)(["\n\n    background-color: #4285f4;\n    color: white;\n    width:49%;\n    margin-right:2%;\n    float:left;\n  \n    &:hover {\n      background-color: #357ae8;\n      border: none;\n    }\n"]);return lt=function(){return e},e}function bt(){var e=Object(at.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n    }\n"]);return bt=function(){return e},e}function pt(){var e=Object(at.a)(["\n    background-color:black;\n    color:white;\n    border:none;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return pt=function(){return e},e}var dt=Object(ct.a)(pt()),ft=Object(ct.a)(bt()),mt=Object(ct.a)(lt()),Et=Object(ct.a)(st()),Ot=Object(ct.a)(it()),St=Object(ct.a)(ut()),_t=ct.b.button(ot(),(function(e){return e.isGoogleSignIn?mt:e.isfacebookSignIn?Et:e.isMember?Ot:e.isbtnStudy?St:e.inverted?ft:dt})),ht=function(e){var t=e.children,n=Object(nt.a)(e,["children"]);return a.a.createElement(_t,n,t)},vt=n(27),jt=n(34),gt=n.n(jt),Rt=function(){document.getElementById("sign-up").classList.add("show")},xt=function(){document.getElementById("sign-up").classList.remove("show")},wt=Object(i.b)(null,(function(e){return{googleSignInStart:function(){return e(H())},facebookSignInStart:function(){return e(P())},emailSignInStart:function(t,n){return e({type:E.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=e.facebookSignInStart,o=Object(r.useState)({email:"",password:""}),u=Object(tt.a)(o,2),i=u[0],s=u[1],l=i.email,b=i.password,p=function(){var e=Object(I.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(l,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,r=t.name;s(Object(m.a)(Object(m.a)({},i),{},Object(et.a)({},r,n)))};return a.a.createElement("div",{id:"sign-in",className:"sign-in"},a.a.createElement("div",{className:"inner"},a.a.createElement("h2",null,"\ub85c\uadf8\uc778"),a.a.createElement("div",{className:"auth-button"},a.a.createElement(ht,{type:"button",onClick:n,isGoogleSignIn:!0}," Google \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778"),a.a.createElement(ht,{type:"button",onClick:c,isfacebookSignIn:!0}," facebook \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778")),a.a.createElement("form",{onSubmit:p},a.a.createElement(rt,{name:"email",type:"email",value:l,onChange:d,label:"\uc774\uba54\uc77c",required:!0}),a.a.createElement(rt,{name:"password",type:"password",value:b,onChange:d,label:"\ube44\ubc00\ubc88\ud638",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(ht,{type:"submit"},"\ub85c\uadf8\uc778"))),a.a.createElement("button",{className:"btn-close",onClick:function(e){document.getElementById("sign-in").classList.remove("show")}},a.a.createElement(vt.Icon,{icon:gt.a,width:"40"},"\ub2eb\uae30"))))})),Ct=(n(80),Object(i.b)(null,(function(e){return{googleSignInStart:function(){return e(H())},facebookSignInStart:function(){return e(P())},signUpStart:function(t){return e(function(e){return{type:E.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.googleSignInStart,n=e.facebookSignInStart,c=e.signUpStart,o=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),u=Object(tt.a)(o,2),i=u[0],s=u[1],l=i.displayName,b=i.email,p=i.password,d=i.confirmPassword,f=function(){var e=Object(I.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p===d){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:c({displayName:l,email:b,password:p});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,n=t.value,r=t.name;s(Object(m.a)(Object(m.a)({},i),{},Object(et.a)({},r,n)))};return a.a.createElement("div",{id:"sign-up",className:"sign-up"},a.a.createElement("div",{className:"inner"},a.a.createElement("h2",{className:"title"},"\ud68c\uc6d0 \uac00\uc785"),a.a.createElement("span",null,"\ud68c\uc6d0\uac00\uc785\ud558\uc5ec \uc790\uc2e0\ub9cc\uc758 \ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4e4\uace0 \ud559\uc2b5\ud574\ubcf4\uc138\uc694."),a.a.createElement("div",{className:"auth-button"},a.a.createElement(ht,{type:"button",onClick:t,isGoogleSignIn:!0}," Google \uacc4\uc815\uc73c\ub85c \uac00\uc785"),a.a.createElement(ht,{type:"button",onClick:n,isfacebookSignIn:!0}," facebook \uacc4\uc815\uc73c\ub85c \uac00\uc785")),a.a.createElement("form",{className:"sign-up-form",onSubmit:f},a.a.createElement(rt,{name:"displayName",type:"text",value:l,onChange:E,label:"\uc0ac\uc6a9\uc790 \uc774\ub984",required:!0}),a.a.createElement(rt,{name:"email",type:"email",value:b,onChange:E,label:"\uc774\uba54\uc77c",required:!0}),a.a.createElement(rt,{name:"password",type:"password",value:p,onChange:E,label:"\ube44\ubc00\ubc88\ud638",required:!0}),a.a.createElement(rt,{name:"confirmPassword",type:"password",value:d,onChange:E,label:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",required:!0}),a.a.createElement(ht,{type:"submit"},"\uc774\uba54\uc77c\ub85c \ud68c\uc6d0 \uac00\uc785"),a.a.createElement(ht,{type:"button",onClick:function(e){xt(),document.getElementById("sign-in").classList.add("show")},isMember:!0},"\ud68c\uc6d0 \uc774\uc2e0\uac00\uc694? ",a.a.createElement("span",null,"\ub85c\uadf8\uc778")," ")),a.a.createElement("button",{className:"btn-close",onClick:function(e){xt()}},a.a.createElement(vt.Icon,{icon:gt.a,width:"40"},"\ub2eb\uae30"))))}))),It=(n(81),Object(Ye.g)((function(e){var t=e.history,n=Object(r.useState)({search:""}),c=Object(tt.a)(n,2),o=c[0],u=c[1],i=o.search;return a.a.createElement("div",{className:"search"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.push("/word/"+i)}},a.a.createElement("input",{type:"text",name:"search",id:"",placeholder:"search",onChange:function(e){var t=e.target,n=t.value,r=t.name;u(Object(et.a)({},r,n)),console.log(i)}})))}))),Tt=(n(83),Object(Qe.b)({currentUser:Ze})),kt=Object(i.b)(Tt,(function(e){return{signOutStart:function(){return e({type:E.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.signOutStart;return a.a.createElement("div",{className:"header"},a.a.createElement(u.b,{className:"logo-container",to:"/"},"HOME"),t?a.a.createElement("div",{className:"options"},a.a.createElement(It,null),a.a.createElement(u.b,{className:"option",to:"/word"},"WORD"),a.a.createElement(u.b,{className:"option",onClick:n},"SIGN OUT")):a.a.createElement("div",{className:"options"},a.a.createElement(It,null),a.a.createElement(u.b,{className:"option",onClick:function(e){t||Rt()}},"SIGN IN"),a.a.createElement("div",{className:"popup-area"},a.a.createElement(Ct,null),a.a.createElement(wt,null))))}));function yt(){var e=Object(at.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return yt=function(){return e},e}function Nt(){var e=Object(at.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Nt=function(){return e},e}var At=ct.b.div(Nt()),Ut=ct.b.div(yt()),Dt=function(e){return function(t){var n=t.isLoading,r=Object(nt.a)(t,["isLoading"]);return n?a.a.createElement(At,null,a.a.createElement(Ut,null)):a.a.createElement(e,r)}},Wt=(n(84),n(55)),Lt=n.n(Wt);function Ft(){var e=Object(at.a)(["\nbackground:none;\nborder:0;\nfont-size:20px;\npadding: 5px;\nmargin: 5px 5px 0 0;\nline-height:0;\noutline:none;\n&:hover {\n    color: #357ae8;\n    \n}\n","\n\n"]);return Ft=function(){return e},e}function Gt(){var e=Object(at.a)(["cursor:pointer;"]);return Gt=function(){return e},e}function Ht(){var e=Object(at.a)(["cursor:move;"]);return Ht=function(){return e},e}function Pt(){var e=Object(at.a)(["\ntext-align:right;\n\n"]);return Pt=function(){return e},e}var Mt=ct.b.div(Pt()),Bt=ct.b.button(Ft(),(function(e){return e.isMove?Object(ct.a)(Ht()):Object(ct.a)(Gt())})),qt=Object(i.b)(null,(function(e){return{deleteWordStart:function(t){return e(function(e){return{type:_.DELETE_WORD_START,payload:e}}(t))}}}))((function(e){var t=e.deleteWordStart,n=e.id,c=e.index,o=e.item,u=e.isIcon,i=Object(r.useState)({correct:!1}),s=Object(tt.a)(i,2),l=s[0],b=s[1],p=l.correct;return a.a.createElement("div",{className:"card-content"},u?a.a.createElement(Mt,null,a.a.createElement(Bt,{onClick:function(){t(n)}},a.a.createElement(vt.Icon,{icon:Lt.a}))):null,a.a.createElement("div",{className:"card-inner"},a.a.createElement("span",{className:"num"},c),a.a.createElement("h3",null,o.content),u||p?a.a.createElement("p",null,o.meaning):a.a.createElement("p",null),u?null:a.a.createElement("input",{type:"text",placeholder:"FILL IN THE ANSWER.",onChange:function(e){var t=e.target.value,n=o.meaning===t;b({correct:n})}})))})),zt=(n(85),Object(Qe.b)({currentUser:Ze})),Kt=Object(i.b)(zt)((function(e){var t=e.history,n=e.currentUser;Object(r.useEffect)((function(){n&&t.push("/word")}),n);return a.a.createElement("div",{className:"homepage"},a.a.createElement("div",{className:"container"},a.a.createElement("h2",null,"\ub098\uc758 \uc554\uae30 \uc0ac\ucd98\uae30"),a.a.createElement("p",null,"\uac1c\uc778 \ub2e8\uc5b4\uc7a5 \uc0dd\uc131\ud574\ubcf4\uace0 \ud559\uc2b5\ud574\ubcf4\uc138\uc694~!"),a.a.createElement(ht,{onClick:function(){Rt()}},"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30")))})),Jt=Object(Qe.b)({isLoading:function(e){return!$e(e)}}),Xt=Object(l.d)(Object(i.b)(Jt),Dt)(Kt),Yt=function(e){return e.word},Qt=Object(Qe.a)([Yt],(function(e){return e.collections})),Vt=Object(Qe.a)([Yt],(function(e){return e.isFetching})),Zt=(Object(Qe.a)([Yt],(function(e){return!!e.collections})),Object(Qe.a)([Yt],(function(e){return e.limit}))),$t=Object(Qe.a)([Yt],(function(e){return e.searchCollections})),en=(Object(Qe.a)([Yt],(function(e){return!!e.searchCollections})),n(86),Object(Qe.b)({collections:Qt,limit:Zt})),tn=Object(i.b)(en,(function(e){return{fetchWordsStartFromUser:function(t){return e(function(e){return{type:_.FETCH_WORD_START_FROM_USER,payload:e}}(t))},updateLimit:function(t){return e(Re(t))}}}))((function(e){var t=e.collections,n=e.limit,c=e.fetchWordsStartFromUser;Object(r.useEffect)((function(){return c(n),window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[n,c]);var o=function(e){var t=e.srcElement.scrollingElement,r=t.scrollTop+t.offsetHeight;Math.ceil(r)>=t.scrollHeight&&(console.log("update"),c(n+6))};return a.a.createElement("div",{onScroll:o},a.a.createElement("ul",{className:"card-list"},t&&t.map((function(e,t){return a.a.createElement("li",{className:"card"},a.a.createElement(qt,{key:e.id,id:e.id,index:(n=t+1,n<10?"0"+n:n),item:e,isIcon:!0}));var n}))))})),nn=Object(i.b)(null,(function(e){return{createWordStart:function(t,n){return e({type:_.CREATE_WORD_START,payload:{content:t,meaning:n}})}}}))((function(e){var t=e.createWordStart,n=Object(r.useState)({content:"",meaning:""}),c=Object(tt.a)(n,2),o=c[0],u=c[1],i=o.content,s=o.meaning,l=function(e){var t=e.target,n=t.name,r=t.value;u(Object(m.a)(Object(m.a)({},o),{},Object(et.a)({},n,r)))},b=function(){var e=Object(I.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(i,s),u({content:"",meaning:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{className:"create-word",onSubmit:b},a.a.createElement("div",{className:"create-word-inner"},a.a.createElement(rt,{name:"content",type:"text",value:i,onChange:l,label:"content",required:!0}),a.a.createElement(rt,{name:"meaning",type:"text",onChange:l,value:s,label:"meaning",required:!0}),a.a.createElement(ht,{type:"submit"},"Add Wordbook")))})),rn=(n(87),Object(Qe.b)({currentUser:Ze})),an=Object(i.b)(rn)((function(e){var t=e.history,n=(e.match,e.currentUser);Object(r.useEffect)((function(){n||t.push("/"),console.log(t.location.search.split("=")[1])}),n);return a.a.createElement("div",{className:"container"},a.a.createElement(nn,null),a.a.createElement(tn,null),a.a.createElement(ht,{className:"btnStudy",type:"button",onClick:function(){t.push("/quiz")},isbtnStudy:!0},"\ud559\uc2b5\ud558\uae30"))})),cn=Object(Qe.b)({isLoading:function(e){return!$e(e)}}),on=Object(l.d)(Object(i.b)(cn),Dt)(an),un=(n(88),Object(Qe.b)({searchCollections:$t})),sn=Object(i.b)(un,(function(e){return{searchWordStart:function(t){return e(function(e){return{type:_.SEARCH_WORD_START,payload:e}}(t))}}}))((function(e){var t=e.match,n=e.searchWordStart,c=e.searchCollections;return Object(r.useEffect)((function(){console.log(t.params.search),n(t.params.search)}),[n]),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"searchpage"},a.a.createElement("ul",{className:"search-list"},c&&c.length>0?c.map((function(e){return a.a.createElement("li",{className:"card",key:e.objectID},a.a.createElement("h3",null,e.content),e.meaning)})):a.a.createElement("li",{className:"nodata"},"nodata"))))})),ln=Object(Qe.b)({isLoading:function(e){return Vt(e)}}),bn=Object(l.d)(Object(i.b)(ln),Dt)(sn),pn=n(56),dn=n.n(pn),fn=(n(104),n(105),n(106),Object(Qe.b)({currentUser:Ze,collections:Qt})),mn=Object(i.b)(fn)((function(e){var t=e.history,n=e.currentUser,c=e.collections;Object(r.useEffect)((function(){n||t.push("/")}),[n,t]);var o={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]};return a.a.createElement("div",{className:"container quiz"},a.a.createElement(dn.a,o,c&&c.map((function(e,t){return a.a.createElement("div",{className:"card"},a.a.createElement(qt,{key:e.id,id:e.id,item:e,index:(n=t+1,n<10?"0"+n:n)}));var n}))))})),En=Object(Qe.b)({isLoading:function(e){return!$e(e)}}),On=Object(l.d)(Object(i.b)(En),Dt)(mn),Sn=(n(107),Object(Qe.b)({currentUser:Ze})),_n=Object(i.b)(Sn,(function(e){return{checkUserSession:function(){return e({type:E.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"App"},a.a.createElement(kt,null),a.a.createElement(Ye.d,null,a.a.createElement(Ye.b,{exact:!0,path:"/",component:Xt}),a.a.createElement(Ye.b,{exact:!0,path:"/wordbook",component:Xt}),a.a.createElement(Ye.b,{exact:!0,path:"/word",component:on}),a.a.createElement(Ye.b,{path:"/word/:search",component:bn}),a.a.createElement(Ye.b,{path:"/quiz",component:On}),a.a.createElement(Ye.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(Ye.a,{to:"/"}):a.a.createElement(wt,null)}}),a.a.createElement(Ye.b,{exact:!0,path:"/signup",render:function(){return n?a.a.createElement(Ye.a,{to:"/"}):a.a.createElement(Ct,null)}})))}));o.a.render(a.a.createElement(i.a,{store:Je},a.a.createElement(u.a,null,a.a.createElement(s.a,{persistor:Xe},a.a.createElement(_n,null)))),document.getElementById("root"))},58:function(e,t,n){e.exports=n(108)},76:function(e,t,n){},77:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.76a96b88.chunk.js.map