(this.webpackJsonpwordbook=this.webpackJsonpwordbook||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),o=n.n(c),u=n(23),i=n(8),s=n(49),l=n(11),b=(n(66),n(56)),p=n(35),d=n(50),f=n.n(d),m=n(5),E={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",FACEBOOK_SIGN_IN_START:"FACEBOOK_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"\xa0CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},O={currentUser:null,error:null,signCheckEnd:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SIGN_IN_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{currentUser:t.payload,error:null,signCheckEnd:!0});case E.SIGN_OUT_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{currentUser:null,error:null,signCheckEnd:!0});case E.SIGN_IN_FAILURE:case E.SIGN_OUT_FAILURE:case E.SIGN_UP_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{error:t.payload,signCheckEnd:!0});default:return e}},_={CREATE_WORD_START:"CREATE_WORD_START",CREATE_WORD_SUCCESS:"CREATE_WORD_SUCCESS",CREATE_WORD_FAILURE:"CREATE_WORD_FAILURE",DELETE_WORD_START:"DELETE_WORD_START",DELETE_WORD_SUCCESS:"DELETE_WORD_SUCCESS",DELETE_WORD_FAILURE:"DELETE_WORD_FAILURE",FETCH_WORD_START:"FETCH_WORD_START",FETCH_WORD_START_FROM_USER:"FETCH_WORD_START_FROM_USER",FETCH_WORD_SUCCESS:"FETCH_WORD_SUCCESS",FETCH_WORD_FAILURE:"FETCH_WORD_FAILURE",UPDATE_WORD_LIMIT:"UPDATE_WORD_LIMIT"},v={collections:null,isFetching:!1,error:null,limit:6},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.UPDATE_WORD_LIMIT:return Object(m.a)(Object(m.a)({},e),{},{limit:t.payload});case _.CREATE_WORD_START:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null});case _.CREATE_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.CREATE_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.DELETE_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.DELETE_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case _.FETCH_WORD_START:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null});case _.FETCH_WORD_START_FROM_USER:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,error:null,limit:t.payload});case _.FETCH_WORD_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,collections:t.payload,error:null});case _.FETCH_WORD_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});default:return e}},g={key:"root",storage:f.a,whitelist:[]},j=Object(l.c)({user:S,word:h}),x=Object(p.a)(g,j),T=n(2),w=n.n(T),R=n(3),I=n(18),k=n(25),C=n.n(k),N=(n(70),n(73),function(){var e=Object(I.a)(w.a.mark((function e(t,n){var r,a,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=L.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,o=new Date,e.prev=9,e.next=12,r.set(Object(m.a)({displayName:a,email:c,createdAt:o},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),y=function(){var e=Object(I.a)(w.a.mark((function e(t,n,r){var a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=L.collection("words"),c=new Date,e.prev=4,e.next=7,a.add(Object(m.a)(Object(m.a)({},n),{},{createdAt:c,uid:t.uid},r));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log("error creating word",e.t0.message);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t,n,r){return e.apply(this,arguments)}}(),U=function(){var e=Object(I.a)(w.a.mark((function e(t,n){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=L.collection("words"),e.prev=3,e.next=6,r.doc(n).delete();case 6:console.log("Document successfully deleted!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("error removing word",e.t0.message);case 12:return e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(e){var t=e.docs.map((function(e){var t=e.data(),n=t.content,r=t.meaning,a=t.uid;return{id:e.id,content:n,meaning:r,uid:a}}));return console.log(t),t};C.a.initializeApp({apiKey:"AIzaSyCiOvCSbY7Le_sz-AlM_zxk_A4tWCoW5g8",authDomain:"wordbook-c7d53.firebaseapp.com",databaseURL:"https://wordbook-c7d53.firebaseio.com",projectId:"wordbook-c7d53",storageBucket:"wordbook-c7d53.appspot.com",messagingSenderId:"983028184348",appId:"1:983028184348:web:5c8fa8062aa05f8c14b6d9",measurementId:"G-D22170SBM3"});var D=function(){return new Promise((function(e,t){var n=F.onAuthStateChanged((function(t){n(),e(t)}),t)}))},F=C.a.auth(),L=C.a.firestore(),W=new C.a.auth.GoogleAuthProvider;W.setCustomParameters({prompt:"select_account"});var G=new C.a.auth.FacebookAuthProvider;G.setCustomParameters({prompt:"select_account"});C.a;var P=function(){return{type:E.GOOGLE_SIGN_IN_START}},H=function(){return{type:E.FACEBOOK_SIGN_IN_START}},M=function(e){return{type:E.SIGN_IN_FAILURE,payload:e}},B=function(e){var t=e.user,n=e.addtionalData;return{type:E.SIGN_UP_SUCCESS,payload:{user:t,addtionalData:n}}},q=w.a.mark(oe),z=w.a.mark(ue),K=w.a.mark(ie),J=w.a.mark(se),Y=w.a.mark(le),Q=w.a.mark(be),V=w.a.mark(pe),X=w.a.mark(de),Z=w.a.mark(fe),$=w.a.mark(me),ee=w.a.mark(Ee),te=w.a.mark(Oe),ne=w.a.mark(Se),re=w.a.mark(_e),ae=w.a.mark(ve),ce=w.a.mark(he);function oe(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(R.b)(N,e);case 3:return t=r.sent,r.next=6,t.get();case 6:return n=r.sent,r.next=9,Object(R.c)((a=Object(m.a)({id:n.id},n.data()),{type:E.SIGN_IN_SUCCESS,payload:a}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(R.c)(M(r.t0));case 15:case"end":return r.stop()}var a}),q,null,[[0,11]])}function ue(){var e,t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.signInWithPopup(W);case 3:return e=n.sent,t=e.user,n.next=7,oe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(R.c)(M(n.t0));case 13:case"end":return n.stop()}}),z,null,[[0,9]])}function ie(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("onGoogleSignInStart"),e.next=3,Object(R.d)(E.GOOGLE_SIGN_IN_START,ue);case 3:case"end":return e.stop()}}),K)}function se(){var e,t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.signInWithPopup(G);case 3:return e=n.sent,t=e.user,n.next=7,oe(t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(R.c)(M(n.t0));case 13:case"end":return n.stop()}}),J,null,[[0,9]])}function le(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(E.FACEBOOK_SIGN_IN_START,se);case 2:case"end":return e.stop()}}),Y)}function be(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,r=t.password,o.prev=1,o.next=4,F.signInWithEmailAndPassword(n,r);case 4:return a=o.sent,c=a.user,o.next=8,oe(c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(R.c)(M(o.t0));case 14:case"end":return o.stop()}}),Q,null,[[1,10]])}function pe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(E.EMAIL_SIGN_IN_START,be);case 2:case"end":return e.stop()}}),V)}function de(){var e;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:if(e=t.sent){t.next=7;break}return t.next=7,Object(R.c)(M());case 7:return t.next=9,oe(e);case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(R.c)(M(t.t0));case 15:case"end":return t.stop()}}),X,null,[[0,11]])}function fe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(E.CHECK_USER_SESSION,de);case 2:case"end":return e.stop()}}),Z)}function me(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.signOut();case 3:return e.next=5,Object(R.c)({type:E.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(R.c)((t=e.t0,{type:E.SIGN_OUT_FAILURE,payload:t}));case 11:case"end":return e.stop()}var t}),$,null,[[0,7]])}function Ee(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(E.SIGN_OUT_START,me);case 2:case"end":return e.stop()}}),ee)}function Oe(e){var t,n,r,a,c,o;return w.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.email,r=t.password,a=t.displayName,u.prev=1,u.next=4,F.createUserWithEmailAndPassword(n,r);case 4:return c=u.sent,o=c.user,u.next=8,Object(R.c)(B({user:o,additionalData:{displayName:a}}));case 8:u.next=14;break;case 10:return u.prev=10,u.t0=u.catch(1),u.next=14,Object(R.c)((i=u.t0,{type:E.SIGN_UP_FAILURE,payload:i}));case 14:case"end":return u.stop()}var i}),te,null,[[1,10]])}function Se(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(E.SIGN_UP_START,Oe);case 2:case"end":return e.stop()}}),ne)}function _e(e){var t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,n=t.user,t.additionalData,r.next=3,oe(n);case 3:case"end":return r.stop()}}),re)}function ve(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(E.SIGN_UP_SUCCESS,_e);case 2:case"end":return e.stop()}}),ae)}function he(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([Object(R.b)(le),Object(R.b)(ie),Object(R.b)(pe),Object(R.b)(fe),Object(R.b)(Ee),Object(R.b)(Se),Object(R.b)(ve)]);case 2:case"end":return e.stop()}}),ce)}var ge=function(e){return{type:_.FETCH_WORD_SUCCESS,payload:e}},je=function(e){return{type:_.FETCH_WORD_FAILURE,payload:e}},xe=function(e){return{type:_.UPDATE_WORD_LIMIT,payload:e}},Te=w.a.mark(Ae),we=w.a.mark(De),Re=w.a.mark(Fe),Ie=w.a.mark(Le),ke=w.a.mark(We),Ce=w.a.mark(Ge),Ne=w.a.mark(Pe),ye=w.a.mark(He),Ue=w.a.mark(Me);function Ae(e){var t,n,r,a,c,o,u;return w.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.content,r=t.meaning,i.prev=1,i.next=4,D();case 4:if(a=i.sent){i.next=7;break}return i.abrupt("return");case 7:return i.next=9,Object(R.b)(y,a,{content:n,meaning:r});case 9:return c=i.sent,i.next=12,c.where("uid","==",a.uid).get();case 12:return o=i.sent,i.next=15,Object(R.b)(A,o);case 15:return u=i.sent,i.next=18,Object(R.c)({type:_.CREATE_WORD_SUCCESS,payload:u});case 18:i.next=24;break;case 20:return i.prev=20,i.t0=i.catch(1),i.next=24,Object(R.c)((s=i.t0,{type:_.CREATE_WORD_FAILURE,payload:s}));case 24:case"end":return i.stop()}var s}),Te,null,[[1,20]])}function De(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,D();case 4:if(n=o.sent){o.next=7;break}return o.abrupt("return");case 7:return o.next=9,Object(R.b)(U,n,t);case 9:return r=o.sent,o.next=12,r.where("uid","==",n.uid).get();case 12:return a=o.sent,o.next=15,Object(R.b)(A,a);case 15:return c=o.sent,o.next=18,Object(R.c)({type:_.DELETE_WORD_SUCCESS,payload:c});case 18:o.next=24;break;case 20:return o.prev=20,o.t0=o.catch(1),o.next=24,Object(R.c)((u=o.t0,{type:_.DELETE_WORD_FAILURE,payload:u}));case 24:case"end":return o.stop()}var u}),we,null,[[1,20]])}function Fe(e){var t,n,r,a,c;return w.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,o.prev=1,o.next=4,D();case 4:if(n=o.sent){o.next=7;break}return o.abrupt("return");case 7:return r=L.collection("words").where("uid","==",n.uid).orderBy("createdAt","desc").limit(t||6),o.next=10,r.get();case 10:return a=o.sent,o.next=13,Object(R.b)(A,a);case 13:if(!((c=o.sent).length<t)){o.next=16;break}return o.abrupt("return");case 16:return o.next=18,Object(R.c)(xe(t));case 18:return o.next=20,Object(R.c)(ge(c));case 20:o.next=26;break;case 22:return o.prev=22,o.t0=o.catch(1),o.next=26,Object(R.c)(je(o.t0.message));case 26:case"end":return o.stop()}}),Re,null,[[1,22]])}function Le(){var e,t,n;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=L.collection("words"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(R.b)(A,t);case 7:return n=r.sent,r.next=10,Object(R.c)(ge(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(R.c)(je(r.t0.message));case 16:case"end":return r.stop()}}),Ie,null,[[0,12]])}function We(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(_.FETCH_WORD_START_FROM_USER,Fe);case 2:case"end":return e.stop()}}),ke)}function Ge(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(_.FETCH_WORD_START,Le);case 2:case"end":return e.stop()}}),Ce)}function Pe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(_.CREATE_WORD_START,Ae);case 2:case"end":return e.stop()}}),Ne)}function He(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.d)(_.DELETE_WORD_START,De);case 2:case"end":return e.stop()}}),ye)}function Me(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([Object(R.b)(Pe),Object(R.b)(He),Object(R.b)(Ge),Object(R.b)(We)]);case 2:case"end":return e.stop()}}),Ue)}var Be=w.a.mark(qe);function qe(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([Object(R.b)(Me),Object(R.b)(he)]);case 2:case"end":return e.stop()}}),Be)}var ze=Object(b.a)(),Ke=[ze];var Je=Object(l.e)(x,l.a.apply(void 0,Ke));ze.run(qe);var Ye=Object(p.b)(Je),Qe=(n(75),n(10)),Ve=(n(76),n(9)),Xe=function(e){return e.user},Ze=Object(Ve.a)([Xe],(function(e){return e.currentUser})),$e=Object(Ve.a)([Xe],(function(e){return e.signCheckEnd})),et=n(20),tt=n(21),nt=(n(77),n(28)),rt=(n(78),function(e){var t=e.handleChange,n=e.label,r=Object(nt.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),n?a.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},n):null)}),at=n(13),ct=n(14);function ot(){var e=Object(at.a)(["\nmin-width: 165px;\nwidth: 100%;\nheight: 50px;\nletter-spacing: 0.5px;\nline-height: 50px;\nfont-size: 15px;\nbackground-color: black;\ncolor: white;\ntext-transform: uppercase;\nfont-family: 'Open Sans Condensed';\nfont-weight: bolder;\nborder: none;\ncursor: pointer;\ndisplay: flex;\njustify-content: center;\n\n","\n\n\n"]);return ot=function(){return e},e}function ut(){var e=Object(at.a)(["\n    width:auto;\n    background-color: #357ae8;\n    color: white;\n\n    &:hover{\n        background-color: #4285f4;\n    }\n"]);return ut=function(){return e},e}function it(){var e=Object(at.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    margin-top:10px;\n\n    span {\n        height:35px;\n    }\n    &:hover{\n        span {\n            border-bottom:1px solid #333;\n        }\n    }\n"]);return it=function(){return e},e}function st(){var e=Object(at.a)(["\n\n    background-color: #3b5998;\n    color: white;\n    width:49%;\n    float:left;\n    &:hover {\n      background-color: #365088;\n      border: none;\n    }\n"]);return st=function(){return e},e}function lt(){var e=Object(at.a)(["\n\n    background-color: #4285f4;\n    color: white;\n    width:49%;\n    margin-right:2%;\n    float:left;\n  \n    &:hover {\n      background-color: #357ae8;\n      border: none;\n    }\n"]);return lt=function(){return e},e}function bt(){var e=Object(at.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n        background-color: black;\n        color: white;\n        border: none;\n    }\n"]);return bt=function(){return e},e}function pt(){var e=Object(at.a)(["\n    background-color:black;\n    color:white;\n    border:none;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return pt=function(){return e},e}var dt=Object(ct.a)(pt()),ft=Object(ct.a)(bt()),mt=Object(ct.a)(lt()),Et=Object(ct.a)(st()),Ot=Object(ct.a)(it()),St=Object(ct.a)(ut()),_t=ct.b.button(ot(),(function(e){return e.isGoogleSignIn?mt:e.isfacebookSignIn?Et:e.isMember?Ot:e.isbtnStudy?St:e.inverted?ft:dt})),vt=function(e){var t=e.children,n=Object(nt.a)(e,["children"]);return a.a.createElement(_t,n,t)},ht=n(27),gt=n(34),jt=n.n(gt),xt=function(){document.getElementById("sign-up").classList.add("show")},Tt=function(){document.getElementById("sign-up").classList.remove("show")},wt=Object(i.b)(null,(function(e){return{googleSignInStart:function(){return e(P())},facebookSignInStart:function(){return e(H())},emailSignInStart:function(t,n){return e({type:E.EMAIL_SIGN_IN_START,payload:{email:t,password:n}})}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,c=e.facebookSignInStart,o=Object(r.useState)({email:"",password:""}),u=Object(tt.a)(o,2),i=u[0],s=u[1],l=i.email,b=i.password,p=function(){var e=Object(I.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(l,b);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,n=t.value,r=t.name;s(Object(m.a)(Object(m.a)({},i),{},Object(et.a)({},r,n)))};return a.a.createElement("div",{id:"sign-in",className:"sign-in"},a.a.createElement("div",{className:"inner"},a.a.createElement("h2",null,"\ub85c\uadf8\uc778"),a.a.createElement("div",{className:"auth-button"},a.a.createElement(vt,{type:"button",onClick:n,isGoogleSignIn:!0}," Google \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778"),a.a.createElement(vt,{type:"button",onClick:c,isfacebookSignIn:!0}," facebook \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778")),a.a.createElement("form",{onSubmit:p},a.a.createElement(rt,{name:"email",type:"email",value:l,onChange:d,label:"\uc774\uba54\uc77c",required:!0}),a.a.createElement(rt,{name:"password",type:"password",value:b,onChange:d,label:"\ube44\ubc00\ubc88\ud638",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(vt,{type:"submit"},"\ub85c\uadf8\uc778"))),a.a.createElement("button",{className:"btn-close",onClick:function(e){document.getElementById("sign-in").classList.remove("show")}},a.a.createElement(ht.Icon,{icon:jt.a,width:"40"},"\ub2eb\uae30"))))})),Rt=(n(79),Object(i.b)(null,(function(e){return{googleSignInStart:function(){return e(P())},facebookSignInStart:function(){return e(H())},signUpStart:function(t){return e(function(e){return{type:E.SIGN_UP_START,payload:e}}(t))}}}))((function(e){var t=e.googleSignInStart,n=e.facebookSignInStart,c=e.signUpStart,o=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),u=Object(tt.a)(o,2),i=u[0],s=u[1],l=i.displayName,b=i.email,p=i.password,d=i.confirmPassword,f=function(){var e=Object(I.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p===d){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:c({displayName:l,email:b,password:p});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,n=t.value,r=t.name;s(Object(m.a)(Object(m.a)({},i),{},Object(et.a)({},r,n)))};return a.a.createElement("div",{id:"sign-up",className:"sign-up"},a.a.createElement("div",{className:"inner"},a.a.createElement("h2",{className:"title"},"\ud68c\uc6d0 \uac00\uc785"),a.a.createElement("span",null,"\ud68c\uc6d0\uac00\uc785\ud558\uc5ec \uc790\uc2e0\ub9cc\uc758 \ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4e4\uace0 \ud559\uc2b5\ud574\ubcf4\uc138\uc694."),a.a.createElement("div",{className:"auth-button"},a.a.createElement(vt,{type:"button",onClick:t,isGoogleSignIn:!0}," Google \uacc4\uc815\uc73c\ub85c \uac00\uc785"),a.a.createElement(vt,{type:"button",onClick:n,isfacebookSignIn:!0}," facebook \uacc4\uc815\uc73c\ub85c \uac00\uc785")),a.a.createElement("form",{className:"sign-up-form",onSubmit:f},a.a.createElement(rt,{name:"displayName",type:"text",value:l,onChange:E,label:"\uc0ac\uc6a9\uc790 \uc774\ub984",required:!0}),a.a.createElement(rt,{name:"email",type:"email",value:b,onChange:E,label:"\uc774\uba54\uc77c",required:!0}),a.a.createElement(rt,{name:"password",type:"password",value:p,onChange:E,label:"\ube44\ubc00\ubc88\ud638",required:!0}),a.a.createElement(rt,{name:"confirmPassword",type:"password",value:d,onChange:E,label:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",required:!0}),a.a.createElement(vt,{type:"submit"},"\uc774\uba54\uc77c\ub85c \ud68c\uc6d0 \uac00\uc785"),a.a.createElement(vt,{type:"button",onClick:function(e){Tt(),document.getElementById("sign-in").classList.add("show")},isMember:!0},"\ud68c\uc6d0 \uc774\uc2e0\uac00\uc694? ",a.a.createElement("span",null,"\ub85c\uadf8\uc778")," ")),a.a.createElement("button",{className:"btn-close",onClick:function(e){Tt()}},a.a.createElement(ht.Icon,{icon:jt.a,width:"40"},"\ub2eb\uae30"))))}))),It=(n(80),Object(Ve.b)({currentUser:Ze})),kt=Object(i.b)(It,(function(e){return{signOutStart:function(){return e({type:E.SIGN_OUT_START})}}}))((function(e){var t=e.currentUser,n=e.signOutStart;return a.a.createElement("div",{className:"header"},a.a.createElement(u.b,{className:"logo-container",to:"/"},"HOME"),t?a.a.createElement("div",{className:"options"},a.a.createElement(u.b,{className:"option",to:"/word"},"WORD"),a.a.createElement(u.b,{className:"option",onClick:n},"SIGN OUT")):a.a.createElement("div",{className:"options"},a.a.createElement(u.b,{className:"option",onClick:function(e){t||xt()}},"SIGN IN"),a.a.createElement("div",{className:"popup-area"},a.a.createElement(Rt,null),a.a.createElement(wt,null))))}));function Ct(){var e=Object(at.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Ct=function(){return e},e}function Nt(){var e=Object(at.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Nt=function(){return e},e}var yt=ct.b.div(Nt()),Ut=ct.b.div(Ct()),At=function(e){return function(t){var n=t.isLoading,r=Object(nt.a)(t,["isLoading"]);return n?a.a.createElement(yt,null,a.a.createElement(Ut,null)):a.a.createElement(e,r)}},Dt=function(e){return e.word},Ft=Object(Ve.a)([Dt],(function(e){return e.collections})),Lt=(Object(Ve.a)([Dt],(function(e){return e.isFetching})),Object(Ve.a)([Dt],(function(e){return!!e.collections})),Object(Ve.a)([Dt],(function(e){return e.limit}))),Wt=(n(82),n(54)),Gt=n.n(Wt);function Pt(){var e=Object(at.a)(["\nbackground:none;\nborder:0;\nfont-size:20px;\npadding: 5px;\nmargin: 5px 5px 0 0;\nline-height:0;\noutline:none;\n&:hover {\n    color: #357ae8;\n    \n}\n","\n\n"]);return Pt=function(){return e},e}function Ht(){var e=Object(at.a)(["cursor:pointer;"]);return Ht=function(){return e},e}function Mt(){var e=Object(at.a)(["cursor:move;"]);return Mt=function(){return e},e}function Bt(){var e=Object(at.a)(["\ntext-align:right;\n\n"]);return Bt=function(){return e},e}var qt=ct.b.div(Bt()),zt=ct.b.button(Pt(),(function(e){return e.isMove?Object(ct.a)(Mt()):Object(ct.a)(Ht())})),Kt=Object(i.b)(null,(function(e){return{deleteWordStart:function(t){return e(function(e){return{type:_.DELETE_WORD_START,payload:e}}(t))}}}))((function(e){var t=e.deleteWordStart,n=e.id,c=e.index,o=e.item,u=e.isIcon,i=Object(r.useState)({correct:!1}),s=Object(tt.a)(i,2),l=s[0],b=s[1],p=l.correct;return a.a.createElement("div",{className:"card-content"},u?a.a.createElement(qt,null,a.a.createElement(zt,{onClick:function(){t(n)}},a.a.createElement(ht.Icon,{icon:Gt.a}))):null,a.a.createElement("div",{className:"card-inner"},a.a.createElement("span",{className:"num"},c),a.a.createElement("h3",null,o.content),u||p?a.a.createElement("p",null,o.meaning):a.a.createElement("p",null),u?null:a.a.createElement("input",{type:"text",placeholder:"FILL IN THE ANSWER.",onChange:function(e){var t=e.target.value,n=o.meaning===t;b({correct:n})}})))})),Jt=(n(83),Object(Ve.b)({collections:Ft,currentUser:Ze})),Yt=Object(i.b)(Jt,(function(e){return{fetchWordStart:function(){return e({type:_.FETCH_WORD_START})}}}))((function(e){var t=e.history,n=(e.collections,e.fetchWordStart,e.currentUser);Object(r.useEffect)((function(){n&&t.push("/word")}),n);return a.a.createElement("div",{className:"homepage"},a.a.createElement("div",{className:"container"},a.a.createElement("h2",null,"\ub098\uc758 \uc554\uae30 \uc0ac\ucd98\uae30"),a.a.createElement("p",null,"\uac1c\uc778 \ub2e8\uc5b4\uc7a5 \uc0dd\uc131\ud574\ubcf4\uace0 \ud559\uc2b5\ud574\ubcf4\uc138\uc694~!"),a.a.createElement(vt,{onClick:function(){xt()}},"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30")))})),Qt=Object(Ve.b)({isLoading:function(e){return!$e(e)}}),Vt=Object(l.d)(Object(i.b)(Qt),At)(Yt),Xt=(n(84),Object(Ve.b)({collections:Ft,limit:Lt})),Zt=Object(i.b)(Xt,(function(e){return{fetchWordsStartFromUser:function(t){return e(function(e){return{type:_.FETCH_WORD_START_FROM_USER,payload:e}}(t))},updateLimit:function(t){return e(xe(t))}}}))((function(e){var t=e.collections,n=e.limit,c=e.fetchWordsStartFromUser;Object(r.useEffect)((function(){return c(n),window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[n,c]);var o=function(e){var t=e.srcElement.scrollingElement,r=t.scrollTop+t.offsetHeight;Math.ceil(r)>=t.scrollHeight&&(console.log("update"),c(n+6))};return a.a.createElement("div",{onScroll:o},a.a.createElement("ul",{className:"card-list"},t&&t.map((function(e,t){return a.a.createElement("li",{className:"card"},a.a.createElement(Kt,{key:e.id,id:e.id,index:(n=t+1,n<10?"0"+n:n),item:e,isIcon:!0}));var n}))))})),$t=Object(i.b)(null,(function(e){return{createWordStart:function(t,n){return e({type:_.CREATE_WORD_START,payload:{content:t,meaning:n}})}}}))((function(e){var t=e.createWordStart,n=Object(r.useState)({content:"",meaning:""}),c=Object(tt.a)(n,2),o=c[0],u=c[1],i=o.content,s=o.meaning,l=function(e){var t=e.target,n=t.name,r=t.value;u(Object(m.a)(Object(m.a)({},o),{},Object(et.a)({},n,r)))},b=function(){var e=Object(I.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(i,s),u({content:"",meaning:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{className:"create-word",onSubmit:b},a.a.createElement("div",{className:"create-word-inner"},a.a.createElement(rt,{name:"content",type:"text",value:i,onChange:l,label:"content",required:!0}),a.a.createElement(rt,{name:"meaning",type:"text",onChange:l,value:s,label:"meaning",required:!0}),a.a.createElement(vt,{type:"submit"},"Add Wordbook")))})),en=(n(85),Object(Ve.b)({currentUser:Ze})),tn=Object(i.b)(en)((function(e){var t=e.history,n=e.currentUser;Object(r.useEffect)((function(){n||t.push("/")}),n);return a.a.createElement("div",{className:"container"},a.a.createElement($t,null),a.a.createElement(Zt,null),a.a.createElement(vt,{className:"btnStudy",type:"button",onClick:function(){t.push("/quiz")},isbtnStudy:!0},"\ud559\uc2b5\ud558\uae30"))})),nn=Object(Ve.b)({isLoading:function(e){return!$e(e)}}),rn=Object(l.d)(Object(i.b)(nn),At)(tn),an=n(55),cn=n.n(an),on=(n(101),n(102),n(103),Object(Ve.b)({currentUser:Ze,collections:Ft})),un=Object(i.b)(on)((function(e){var t=e.history,n=e.currentUser,c=e.collections;Object(r.useEffect)((function(){n||t.push("/")}),[n,t]);var o={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:1}}]};return a.a.createElement("div",{className:"container quiz"},a.a.createElement(cn.a,o,c&&c.map((function(e,t){return a.a.createElement("div",{className:"card"},a.a.createElement(Kt,{key:e.id,id:e.id,item:e,index:(n=t+1,n<10?"0"+n:n)}));var n}))))})),sn=Object(Ve.b)({isLoading:function(e){return!$e(e)}}),ln=Object(l.d)(Object(i.b)(sn),At)(un),bn=(n(104),Object(Ve.b)({currentUser:Ze})),pn=Object(i.b)(bn,(function(e){return{checkUserSession:function(){return e({type:E.CHECK_USER_SESSION})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"App"},a.a.createElement(kt,null),a.a.createElement(Qe.d,null,a.a.createElement(Qe.b,{exact:!0,path:"/",component:Vt}),a.a.createElement(Qe.b,{exact:!0,path:"/wordbook",component:Vt}),a.a.createElement(Qe.b,{path:"/word",component:rn}),a.a.createElement(Qe.b,{path:"/quiz",component:ln}),a.a.createElement(Qe.b,{exact:!0,path:"/signin",render:function(){return n?a.a.createElement(Qe.a,{to:"/"}):a.a.createElement(wt,null)}}),a.a.createElement(Qe.b,{exact:!0,path:"/signup",render:function(){return n?a.a.createElement(Qe.a,{to:"/"}):a.a.createElement(Rt,null)}})))}));o.a.render(a.a.createElement(i.a,{store:Je},a.a.createElement(u.a,null,a.a.createElement(s.a,{persistor:Ye},a.a.createElement(pn,null)))),document.getElementById("root"))},57:function(e,t,n){e.exports=n(105)},75:function(e,t,n){},76:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.7065c1ea.chunk.js.map