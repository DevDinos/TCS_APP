"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3146],{3146:(P,m,n)=>{n.r(m),n.d(m,{WelcomePageModule:()=>z});var c=n(6728),g=n(6814),u=n(95),f=n(3554),s=n(3044),o=n(6242),d=n(9862),p=n(7945);const h=[{path:"",component:(()=>{var t;class a{constructor(e,r){this.httpClient=e,this.ns=r,this.baseURL="sunriseconnectionsserver.mysql.database.azure.com",this.zoomFactor=1}navigateTo(e){this.ns.navigateTo(e)}getData(){let e=this.httpClient.get(this.baseURL);return console.log(e),console.log(e.source),console.log(e.operator),e}zoomIn(){this.zoomFactor+=.1,document.documentElement.style.setProperty("--zoom-factor",this.zoomFactor.toString())}zoomOut(){this.zoomFactor-=.1,document.documentElement.style.setProperty("--zoom-factor",this.zoomFactor.toString())}}return(t=a).\u0275fac=function(e){return new(e||t)(o.Y36(d.eN),o.Y36(p.f))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-Welcome"]],decls:25,vars:1,consts:[[1,"welcome-page","background-image",3,"fullscreen"],[1,"top"],[1,"bottom"],[1,"whiteText"],["id","createAcc",1,"action-button",3,"click"],["id","login",1,"action-button",3,"click"],["slot","fixed","horizontal","end","vertical","bottom"],[1,"zoomButton",3,"click"],["name","add",1,"zoomIcon"],["name","remove-outline",1,"zoomIcon"]],template:function(e,r){1&e&&(o.TgZ(0,"ion-content",0)(1,"div")(2,"div",1)(3,"h2"),o._uU(4,"Welcome to"),o.qZA(),o.TgZ(5,"h1"),o._uU(6,"Sunrise Connections!"),o.qZA()(),o.TgZ(7,"div",2)(8,"h2",3),o._uU(9,"Are you new here?"),o.qZA(),o.TgZ(10,"ion-button",4),o.NdJ("click",function(){return r.navigateTo("AccountCreation")}),o.TgZ(11,"ion-label"),o._uU(12,"Create Account"),o.qZA()(),o.TgZ(13,"h2",3),o._uU(14,"OR"),o.qZA(),o.TgZ(15,"h2",3),o._uU(16,"Are you a returning member?"),o.qZA(),o.TgZ(17,"ion-button",5),o.NdJ("click",function(){return r.navigateTo("Login")}),o.TgZ(18,"ion-label"),o._uU(19,"Log In"),o.qZA()()()(),o.TgZ(20,"ion-fab",6)(21,"ion-fab-button",7),o.NdJ("click",function(){return r.zoomIn()}),o._UZ(22,"ion-icon",8),o.qZA(),o.TgZ(23,"ion-fab-button",7),o.NdJ("click",function(){return r.zoomOut()}),o._UZ(24,"ion-icon",9),o.qZA()()()),2&e&&o.Q6J("fullscreen",!0)},dependencies:[c.YG,c.W2,c.IJ,c.W4,c.gu,c.Q$],styles:[".welcome-page[_ngcontent-%COMP%]{background-color:var(--ion-color-dark)}ion-title[_ngcontent-%COMP%]{font-size:calc(var(--title-font-size) * var(--zoom-factor))!important}h1[_ngcontent-%COMP%]{font-size:calc(var(--h1-font-size) * var(--zoom-factor))!important;text-align:center;margin-left:15px;margin-right:15px}h2[_ngcontent-%COMP%]{font-size:calc(var(--h2-font-size) * var(--zoom-factor))!important;text-align:center;margin-left:15px;margin-right:15px}.whiteText[_ngcontent-%COMP%]{color:#fff}h3[_ngcontent-%COMP%]{font-size:calc(var(--h3-font-size) * var(--zoom-factor))!important;text-align:center;margin-left:15px;margin-right:15px}ion-button[_ngcontent-%COMP%]{display:flex;margin:auto;width:350px}ion-label[_ngcontent-%COMP%]{font-size:calc(var(--h3-font-size) * var(--zoom-factor))!important}.background-image[_ngcontent-%COMP%]{--background: url(sunset3.81ddd9eeb06968a8.jpg) no-repeat center 45%;background-size:auto}.top[_ngcontent-%COMP%]{margin-top:15vh}.bottom[_ngcontent-%COMP%]{margin-top:40vh}"]}),a})()}];let v=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(h),s.Bz]}),a})(),z=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Pc,g.ez,u.u5,f.e,v]}),a})()}}]);