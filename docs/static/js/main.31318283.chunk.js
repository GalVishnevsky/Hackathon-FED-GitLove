(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{247:function(e,t,a){e.exports=a.p+"static/media/gay.a5187fc9.svg"},248:function(e,t,a){e.exports=a.p+"static/media/hetero.a6224340.svg"},249:function(e,t,a){e.exports=a.p+"static/media/lesbian.52d7dd11.svg"},250:function(e,t,a){e.exports=a.p+"static/media/trans.ec6dc392.svg"},251:function(e,t,a){e.exports=a.p+"static/media/cat.3c633702.svg"},252:function(e,t,a){e.exports=a.p+"static/media/dog.dadc9ba5.svg"},253:function(e,t,a){e.exports=a.p+"static/media/duck.d34dbf0a.svg"},254:function(e,t,a){e.exports=a.p+"static/media/fish.fb10e632.svg"},265:function(e,t,a){e.exports=a(543)},273:function(e,t,a){},541:function(e,t,a){},543:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(63),i=a.n(o);a(270),a(273),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(566),l=a(555),c=a(553),u=r.a.createContext(null),m=a(17),d=a(18),p=a(20),h=a(19),f=a(21),E=r.a.createContext(null),g=function(e){return function(t){return r.a.createElement(E.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},b=E,v=a(24),O=a(53),y=a.n(O),w=(a(280),a(282),{apiKey:"AIzaSyA7ToUgoy3UOvxiRvPpe43DkTR_aGwHVKc",authDomain:"gitlove-a27e8.firebaseapp.com",databaseURL:"https://gitlove-a27e8.firebaseio.com",projectId:"gitlove-a27e8",storageBucket:"gitlove-a27e8.appspot.com",messagingSenderId:"402376988815"}),k=function e(){var t=this;Object(m.a)(this,e),this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_KEY:"AIzaSyA7ToUgoy3UOvxiRvPpe43DkTR_aGwHVKc",REACT_APP_AUTH_DOMAIN:"gitlove-a27e8.firebaseapp.com",REACT_APP_DATABASE_URL:"https://gitlove-a27e8.firebaseio.com",REACT_APP_PROJECT_ID:"gitlove-a27e8",REACT_APP_STORAGE_BUCKET:"gitlove-a27e8.appspot.com",REACT_APP_MESSAGING_SENDER_ID:"402376988815"}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged(function(n){n?t.user(n.uid).get().then(function(t){var a=t.data();n=Object(v.a)({uid:n.uid,email:n.email,emailVerified:n.emailVerified,providerData:n.providerData},a),e(n)}):a()})},this.user=function(e){return t.db.collection("users").doc(e)},this.users=function(){return t.db.collection("users")},this.message=function(e){return t.db.collection("messages").doc(e)},this.messages=function(){return t.db.collection("messages")},y.a.initializeApp(w),this.serverValue=y.a.firestore.ServerValue,this.emailAuthProvider=y.a.auth.EmailAuthProvider,this.auth=y.a.auth(),this.db=y.a.firestore(),this.facebookProvider=new y.a.auth.FacebookAuthProvider},C=function(e){var t=function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(f.a)(a,t),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(u.Provider,{value:this.state.authUser},r.a.createElement(e,Object.assign({},this.props,{auth:this.state.authUser})))}}]),a}(r.a.Component);return g(t)},j=a(568),S=a(30),M="/setup",P="/match",U=function(e){return function(t){var a=function(a){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(f.a)(n,a),Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(a){e(a)||t.props.history.push("/")},function(){return t.props.history.push("/")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(u.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(S.a)(j.a,g)(a)}},I=function(e){var t=function(t){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then(function(){return t.setState({isSent:!0})})},t.state={isSent:!1},t}return Object(f.a)(a,t),Object(d.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(u.Consumer,null,function(a){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(a)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)})}}]),a}(r.a.Component);return g(t)},A=a(563),x=g(function(e){var t=e.firebase;return r.a.createElement(A.a.Menu,{position:"right"},r.a.createElement(A.a.Item,{name:"Logout",onClick:t.doSignOut}))}),D=a(552),T=function(e){e.authUser;return r.a.createElement(A.a,{pointing:!0,secondary:!0},r.a.createElement(D.a,null,r.a.createElement(A.a.Item,{name:"home",as:c.a,to:"/home"}),r.a.createElement(A.a.Item,{name:"Account",as:c.a,to:"/account"}),r.a.createElement(x,null)))},R=function(){return r.a.createElement(A.a,{pointing:!0,secondary:!0},r.a.createElement(D.a,null,r.a.createElement(A.a.Menu,{position:"right"},r.a.createElement(A.a.Item,{name:"Sign in",as:c.a,to:"/"}))))},L=function(){return r.a.createElement(u.Consumer,null,function(e){return e?r.a.createElement(T,{authUser:e}):r.a.createElement(R,null)})},N=a(37),_=a(65),F=a.n(_),B=a(564),W=a(561),H=a(557),V=a(562),q={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},G="auth/email-already-in-use",J="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.gitUsername,o=t.tenBisEmail,i=t.tenBisPassword;return F.a.post("https://gitlove.herokuapp.com/updateProfile",{userId:a.props.auth.uid,username:n,gitUsername:r,tenBisEmail:o,tenBisPassword:i}).then(function(){a.setState({error:null}),a.props.history.push(P)}).catch(function(e){e.code===G&&(e.message=J),a.setState({error:e})})},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.state=a.props,a.state=Object(v.a)({},q,{facebookUser:JSON.parse(localStorage.getItem("facebookData")||{})}),a.state.username=a.state.facebookUser.name,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.gitUsername,a=e.username,n=e.tenBisEmail,o=e.tenBisPassword,i=e.error,s=""===o||""===n||""===t;return r.a.createElement("div",null,i&&r.a.createElement(W.a,{negative:!0},r.a.createElement("p",null,i.message)),r.a.createElement(H.a,{onSubmit:this.onSubmit},r.a.createElement(H.a.Field,null,r.a.createElement("img",{className:"profilePic",src:"https://graph.facebook.com/".concat(this.state.facebookUser.id,"/picture?width=800")}),r.a.createElement("h1",{id:"welcomeMessage"},"Hi, ",this.state.facebookUser.name),r.a.createElement("label",{className:"signUpMessage"},"Let's connect to GitHub and 10bis"),r.a.createElement("input",{name:"username",value:a,onChange:this.onChange,type:"text",placeholder:"GitLove Username"})),r.a.createElement(H.a.Field,null,r.a.createElement("input",{name:"gitUsername",value:t,onChange:this.onChange,type:"text",placeholder:"Github Username"})),r.a.createElement(H.a.Field,null,r.a.createElement("input",{name:"tenBisEmail",value:n,onChange:this.onChange,type:"text",placeholder:"10Bis Email"})),r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(H.a.Field,null,r.a.createElement("input",{name:"tenBisPassword",value:o,onChange:this.onChange,type:"password",placeholder:"10Bis Password"}))),r.a.createElement(V.a,{primary:!0,disabled:s,type:"submit",className:"signUpButton"},"Connect")))}}]),t}(n.Component),K=Object(j.a)(g(C(z))),X=function(){return r.a.createElement(B.a,{centered:!0,columns:1},r.a.createElement(B.a.Column,{textAlign:"center"},r.a.createElement(K,null)))},$=a(224),Y="auth/account-exists-with-different-credential",Z="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t;a.props.firebase.doSignInWithFacebook().then(function(e){return t=e,a.props.firebase.user(e.user.uid).get()}).then(function(e){if(localStorage.setItem("facebookData",JSON.stringify(t.additionalUserInfo.profile)),!e.exists)return a.props.firebase.user(t.user.uid).set({name:t.additionalUserInfo.profile.name,profilePic:"https://graph.facebook.com/".concat(t.additionalUserInfo.profile.id,"/picture?width=800"),gender:"male"})}).then(function(){a.setState({error:null}),a.props.history.push(M)}).catch(function(e){e.code===Y&&(e.message=Z),a.setState({error:e})}),e.preventDefault()},a.state={error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"inline"},r.a.createElement(V.a,{type:"submit",className:"facebookLogin"},r.a.createElement($.a,{name:"facebook"})," Connect with Facebook"),e&&r.a.createElement(W.a,{negative:!0},r.a.createElement("p",null,e.message)))}}]),t}(n.Component),ee=Object(S.a)(j.a,g)(Q),te=function(){return r.a.createElement(B.a,{centered:!0,columns:1},r.a.createElement(B.a.Column,{textAlign:"center"},r.a.createElement("img",{src:"/images/logo.png",id:"logo"}),r.a.createElement(ee,{textAlign:"center"})))},ae=a(565),ne={email:"",error:null},re=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(v.a)({},ne))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.state=Object(v.a)({},ne),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("div",null,a&&r.a.createElement(W.a,{negative:!0},r.a.createElement("p",null,a.message)),r.a.createElement(H.a,{onSubmit:this.onSubmit},r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"})),r.a.createElement(V.a,{primary:!0,disabled:n,type:"submit"},"Reset My Password")))}}]),t}(n.Component),oe=function(){return r.a.createElement(B.a,{centered:!0,columns:2},r.a.createElement(B.a.Column,null,r.a.createElement(ae.a,{as:"h2",textAlign:"center"},"Password Forget"),r.a.createElement(ie,null)))},ie=g(re),se=a(245),le=a(558),ce=function(e){var t=e.time;return r.a.createElement("time",null,Object(se.distanceInWordsToNow)(t)," ago")},ue=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onToggleEditMode=function(){a.setState(function(e){return{editMode:!e.editMode,editText:a.props.message.text}})},a.onChangeEditText=function(e){a.setState({editText:e.target.value})},a.onSaveEditText=function(){a.props.onEditMessage(a.props.message,a.state.editText),a.setState({editMode:!1})},a.state={editMode:!1,editText:a.props.message.text},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.message,a=e.onRemoveMessage,n=this.state,o=n.editMode,i=n.editText;return r.a.createElement(le.a.Event,null,r.a.createElement(le.a.Content,null,r.a.createElement(le.a.Summary,null,r.a.createElement(le.a.User,{as:c.a,to:"/"},t.user.username||t.user.userId),r.a.createElement(le.a.Date,null,r.a.createElement(ce,{time:t.createdAt}))),r.a.createElement(le.a.Extra,null,o?r.a.createElement(H.a,null,r.a.createElement(H.a.Field,null,r.a.createElement("input",{type:"text",value:i,onChange:this.onChangeEditText}))):r.a.createElement("span",null,t.text," ",t.editedAt&&r.a.createElement("span",null,"(Edited)"))),r.a.createElement(le.a.Meta,null,o?r.a.createElement("span",null,r.a.createElement(V.a,{icon:!0,onClick:this.onSaveEditText},r.a.createElement($.a,{color:"green",name:"save outline"})),r.a.createElement(V.a,{icon:!0,onClick:this.onToggleEditMode},r.a.createElement($.a,{color:"blue",name:"undo alternate"}))):r.a.createElement("span",null,r.a.createElement(V.a,{icon:!0,onClick:this.onToggleEditMode},r.a.createElement($.a,{color:"blue",name:"edit outline"})),r.a.createElement(V.a,{icon:!0,onClick:function(){return a(t.uid)}},r.a.createElement($.a,{color:"red",name:"trash alternate"}))))))}}]),t}(n.Component),me=function(e){var t=e.messages,a=e.onEditMessage,n=e.onRemoveMessage;return r.a.createElement(le.a,null,t.map(function(e){return r.a.createElement(ue,{key:e.uid,message:e,onEditMessage:a,onRemoveMessage:n})}))},de=a(560),pe=a(554),he=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onListenForMessages=function(){a.setState({loading:!0}),a.props.firebase.messages().orderBy("createdAt").limit(a.state.limit).onSnapshot(function(e){var t=e.docs.map(function(e){return e.data()});if(t){var n=Object.keys(t).map(function(e){return Object(v.a)({},t[e],{uid:e})});a.setState({messages:n,loading:!1})}else a.setState({messages:null,loading:!1})})},a.onChangeText=function(e){a.setState({text:e.target.value})},a.onCreateMessage=function(e,t){a.props.firebase.messages().add({text:a.state.text,userId:t.uid,createdAt:Date.now()}),a.setState({text:""}),e.preventDefault()},a.onEditMessage=function(e,t){a.props.firebase.message(e.uid).set(Object(v.a)({},e,{text:t,editedAt:Date.now()}))},a.onRemoveMessage=function(e){a.props.firebase.message(e).remove()},a.onNextPage=function(){a.setState(function(e){return{limit:e.limit+5}},a.onListenForMessages)},a.state={text:"",loading:!1,messages:[],limit:5},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.users,a=this.state,n=a.text,o=a.messages,i=a.loading;return r.a.createElement(u.Consumer,null,function(a){return r.a.createElement(de.a,{fluid:!0},r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Description,null,i&&r.a.createElement(pe.a,{active:!0,inline:"centered"}),!i&&o&&r.a.createElement(V.a,{size:"small",positive:!0,type:"button",onClick:e.onNextPage},"Load Older Messages"),o&&r.a.createElement(me,{messages:o.map(function(e){return Object(v.a)({},e,{user:t?t[e.userId]:{userId:e.userId}})}),onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!i&&!o&&r.a.createElement(W.a,{info:!0},r.a.createElement("p",null,"There are no messages ...")),!i&&r.a.createElement(H.a,{onSubmit:function(t){return e.onCreateMessage(t,a)}},r.a.createElement(H.a.TextArea,{value:n,onChange:e.onChangeText,placeholder:"Enter your message here..."}),r.a.createElement(V.a,{primary:!0,type:"submit"},"Send ",r.a.createElement($.a,{name:"send"}))))))})}}]),t}(n.Component),fe=g(he),Ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={users:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.users().onSnapshot(function(t){var a={};t.docs.forEach(function(e){a[e.id]=e.data()}),e.setState({users:a})})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."),r.a.createElement(fe,{users:this.state.users}))}}]),t}(n.Component),ge=Object(S.a)(g,I,U(function(e){return!!e}))(Ee),be={passwordOne:"",passwordTwo:"",error:null},ve=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.passwordOne;a.props.firebase.doPasswordUpdate(t).then(function(){a.setState(Object(v.a)({},be))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.state=Object(v.a)({},be),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement(H.a,{onSubmit:this.onSubmit},n&&r.a.createElement(W.a,{negative:!0},r.a.createElement("p",null,n.message)),r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Old Password"),r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"New Password"),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}))),r.a.createElement(V.a,{primary:!0,disabled:o,type:"submit"},"Reset My Password"))}}]),t}(n.Component),Oe=g(ve),ye=[{id:"facebook.com",provider:"facebookProvider"}],we=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).fetchSignInMethods=function(){a.props.firebase.auth.fetchSignInMethodsForEmail(a.props.authUser.email).then(function(e){return a.setState({activeSignInMethods:e,error:null})}).catch(function(e){return a.setState({error:e})})},a.onSocialLoginLink=function(e){a.props.firebase.auth.currentUser.linkWithPopup(a.props.firebase[e]).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.onDefaultLoginLink=function(e){var t=a.props.firebase.emailAuthProvider.credential(a.props.authUser.email,e);a.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.onUnlink=function(e){a.props.firebase.auth.currentUser.unlink(e).then(a.fetchSignInMethods).catch(function(e){return a.setState({error:e})})},a.state={activeSignInMethods:[],error:null},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,a=t.activeSignInMethods,n=t.error;return r.a.createElement(de.a,{fluid:!0},r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Header,null,"Sign In Methods"),r.a.createElement(de.a.Description,null,n&&r.a.createElement(W.a,{negative:!0},r.a.createElement("p",null,n.message)),r.a.createElement("div",null,ye.map(function(t){var n=1===a.length,o=a.includes(t.id);return r.a.createElement("span",{key:t.id},"password"===t.id?r.a.createElement(B.a,{columns:1},r.a.createElement(B.a.Column,null,r.a.createElement(Ce,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}),r.a.createElement("br",null))):r.a.createElement(ke,{onlyOneLeft:n,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})))))}}]),t}(n.Component),ke=function(e){var t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onLink,i=e.onUnlink;return a?r.a.createElement(V.a,{color:"google.com"===n.id?"google plus":"facebook.com"===n.id?"facebook":"twitter.com"===n.id?"twitter":"",type:"button",onClick:function(){return i(n.id)},disabled:t},"Deactivate ",n.id):r.a.createElement(V.a,{color:"google.com"===n.id?"google plus":"facebook.com"===n.id?"facebook":"twitter.com"===n.id?"twitter":"",type:"button",onClick:function(){return o(n.provider)}},"Link ",n.id)},Ce=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.props.onLink(a.state.passwordOne),a.setState({passwordOne:"",passwordTwo:""})},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.state={passwordOne:"",passwordTwo:""},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,a=e.isEnabled,n=e.signInMethod,o=e.onUnlink,i=this.state,s=i.passwordOne,l=i.passwordTwo,c=s!==l||""===s;return a?r.a.createElement("span",null,r.a.createElement(V.a,{type:"button",onClick:function(){return o(n.id)},disabled:t},"Deactivate ",n.id),r.a.createElement("br",null)):r.a.createElement(H.a,{onSubmit:this.onSubmit},r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"New Password"),r.a.createElement("input",{name:"passwordOne",value:s,onChange:this.onChange,type:"password",placeholder:"New Password"})),r.a.createElement(H.a.Field,null,r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}))),r.a.createElement(V.a,{primary:!0,disabled:c,type:"submit"},"Link ",n.id))}}]),t}(n.Component),je=g(we),Se=Object(S.a)(I,U(function(e){return!!e}))(function(){return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement(ae.a,{as:"h2"},"Account: ",e.email),r.a.createElement(B.a,{columns:2},r.a.createElement(B.a.Column,null,r.a.createElement(de.a,{fluid:!0},r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Header,null,"Reset Password"),r.a.createElement(de.a.Description,null,r.a.createElement(ie,null))))),r.a.createElement(B.a.Column,null,r.a.createElement(de.a,{fluid:!0},r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Header,null,"New Password"),r.a.createElement(de.a.Description,null,r.a.createElement(Oe,null)))))),r.a.createElement(je,{authUser:e}))})}),Me=a(567),Pe=a(559),Ue=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={loading:!1,users:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().onSnapshot(function(t){var a=t.docs.map(function(e){return e.data()}),n=Object.keys(a).map(function(e){return Object(v.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement(ae.a,{as:"h2"},"Users"),a?r.a.createElement(pe.a,{active:!0,inline:!0}):r.a.createElement(Pe.a,{singleLine:!0},r.a.createElement(Pe.a.Header,null,r.a.createElement(Pe.a.Row,null,r.a.createElement(Pe.a.HeaderCell,null,"ID"),r.a.createElement(Pe.a.HeaderCell,null,"Username"),r.a.createElement(Pe.a.HeaderCell,null,"Email Address"),r.a.createElement(Pe.a.HeaderCell,null,"Actions"))),r.a.createElement(Pe.a.Body,null,t.map(function(e,t){return r.a.createElement(Pe.a.Row,{key:t},r.a.createElement(Pe.a.Cell,null,e.uid),r.a.createElement(Pe.a.Cell,null,e.username),r.a.createElement(Pe.a.Cell,null,e.email),r.a.createElement(Pe.a.Cell,null,r.a.createElement(V.a,{primary:!0,as:c.a,to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))}))))}}]),t}(n.Component),Ie=g(Ue),Ae=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).onSendPasswordResetEmail=function(){a.props.firebase.doPasswordReset(a.state.user.email)},a.state=Object(v.a)({loading:!1,user:null},e.location.state),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.loading;return r.a.createElement(de.a,{fluid:!0},a?r.a.createElement(pe.a,{active:!0,inline:"centered"}):r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Header,null,"User: ",t.uid),r.a.createElement(de.a.Description,null,t&&r.a.createElement("div",null,r.a.createElement(de.a.Content,null,r.a.createElement(de.a.Meta,null,r.a.createElement("span",null,"Username: ",t.username)),r.a.createElement(de.a.Description,null,t.email),r.a.createElement("br",null),r.a.createElement(V.a,{primary:!0,type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))))}}]),t}(n.Component),xe=g(Ae),De=Object(S.a)(I,U(function(e){return e&&e.roles.includes("ADMIN")}))(function(){return r.a.createElement("div",null,r.a.createElement(ae.a,{as:"h2"},"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(Me.a,null,r.a.createElement(l.a,{exact:!0,path:"/admin/:id",component:xe}),r.a.createElement(l.a,{exact:!0,path:"/admin",component:Ie})))}),Te=a(247),Re=a.n(Te),Le=a(248),Ne=a.n(Le),_e=a(249),Fe=a.n(_e),Be=a(250),We=a.n(Be),He=a(251),Ve=a.n(He),qe=a(252),Ge=a.n(qe),Je=a(253),ze=a.n(Je),Ke=a(254),Xe=a.n(Ke),$e=a(556),Ye=a(544),Ze=[{label:"What is your sexual orientation?",answers:[{value:"hetero",image:Ne.a},{value:"gay",image:Re.a},{value:"lesbian",image:Fe.a},{value:"trans",image:We.a}]},{image:"",label:"What is favorite animal?",answers:[{value:"cat",image:Ve.a},{value:"dog",image:Ge.a},{value:"duck",image:ze.a},{value:"fish",image:Xe.a}]}],Qe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this))).question=Ze.shift(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(B.a,{centered:!0,columns:2},r.a.createElement(B.a.Row,{textAlign:"center"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"inline"},r.a.createElement(ae.a,{as:"h2"},this.question.label),r.a.createElement($e.a,null),r.a.createElement(B.a,null,r.a.createElement(B.a.Row,{columns:2},this.question.answers.map(function(t){return r.a.createElement(B.a.Column,{key:t.value},r.a.createElement(Ye.a,{src:t.image,size:"small",className:e.selectedAnswer===t.value?"question-image":"question-image clickable no-fill",onClick:e.onAnswerClick.bind(e,t.value)}),r.a.createElement(ae.a,{as:"h3"},t.value.charAt(0).toUpperCase()+t.value.slice(1)))}))))))}},{key:"onAnswerClick",value:function(e){e&&(this.question=Ze.shift(),this.setState({errors:null}),this.question||this.props.history.push(P))}}]),t}(n.Component),et=Object(S.a)(j.a,g,C)(Qe),tt=(a(541),window.$),at=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).swipe=!1,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;tt("#"+this.props.userId).on("swiperight",function(t){tt(this).addClass("rotate-left").delay(700).fadeOut(1),tt("#"+e.props.userId).find(".status").remove(),tt("#"+e.props.userId).append('<div class="status like">Like!</div>'),F.a.post("http://172.168.168.67:5000/match",{userId:e.props.auth.uid,matchedId:e.props.userId,result:!0})}),tt("#"+this.props.userId).on("swipeleft",function(t){tt(this).addClass("rotate-right").delay(700).fadeOut(1),tt("#"+e.props.userId).find(".status").remove(),tt("#"+e.props.userId).append('<div class="status dislike">Dislike!</div>')})}},{key:"render",value:function(){var e={backgroundImage:"url("+this.props.pic+")",display:"block"},t=10*Math.random()+20;return r.a.createElement("div",{className:"buddy",id:this.props.userId,style:{display:"block"}},r.a.createElement("div",{className:"avatar",style:e}),r.a.createElement("div",{className:"score"},r.a.createElement("span",{className:"inScore"},this.props.score,"%")),r.a.createElement(ae.a,{as:"h3",style:{backgroundColor:"#f9f9f9"}},this.props.username,", ",t.toFixed(0)),r.a.createElement(ae.a,{as:"h4",style:{backgroundColor:"#f9f9f9"}},this.props.langs.join(", ")))}}]),t}(n.Component),nt=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={error:null,hasFetched:!1,swipes:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!this.state.hasFetched}},{key:"componentDidMount",value:function(){var e=this;F.a.get("https://gitlove.herokuapp.com/getMatches/20FW9KzUP6XV4HZPrW6PXD3PTie2").then(function(t){e.setState({swipes:t.data})})}},{key:"render",value:function(){var e={uid:"123"};return this.state.swipes.length?(this.setState({hasFetched:!0}),r.a.createElement("div",{className:"swipeCon"},this.state.swipes.map(function(t){return r.a.createElement(at,{username:t.username,userId:t.usedId,pic:t.profilePic,score:t.rank,langs:t.languages,auth:e})}),r.a.createElement("div",{style:{position:"absolute",top:"603.2px",left:"107.5px"}},r.a.createElement("img",{src:"/images/icon-04.png",id:"xLogo"}),r.a.createElement("img",{src:"/images/icon-05.png",id:"vLogo"})))):r.a.createElement("div",null)}}]),t}(n.Component),rt=Object(S.a)(j.a,g,C)(nt),ot=C(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(D.a,null,r.a.createElement(l.a,{path:M,component:X}),r.a.createElement(l.a,{exact:!0,path:"/",component:te}),r.a.createElement(l.a,{path:"/pw-forget",component:oe}),r.a.createElement(l.a,{path:"/home",component:ge}),r.a.createElement(l.a,{path:"/account",component:Se}),r.a.createElement(l.a,{path:P,component:rt}),r.a.createElement(l.a,{path:"/admin",component:De}),r.a.createElement(l.a,{path:"/question",component:et}))))});i.a.render(r.a.createElement(b.Provider,{value:new k},r.a.createElement(ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[265,2,1]]]);
//# sourceMappingURL=main.31318283.chunk.js.map