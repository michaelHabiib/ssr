import{a as R}from"./chunk-2665OGWU.js";import{c as xe,e as H}from"./chunk-QWGTGSJY.js";import{$ as B,Fa as te,Ga as ie,Ha as ne,Ia as ae,Ja as re,Na as oe,Oa as ce,Pa as se,S as W,T as X,Wa as N,Ya as le,Za as pe,_a as me,ab as _e,h as q,i as G,j as Y,ja as F,k as D,kb as de,l as K,lb as ue,n as Q,sa as Z,ta as ee}from"./chunk-UYRRL4HD.js";import{Bb as r,Cb as o,Db as C,Gc as O,Hb as b,Hc as A,Kb as p,Kc as $,Mb as c,Ub as d,Vb as _,Wb as S,Xb as g,Za as a,_a as w,ba as j,cc as v,dc as y,ec as u,fc as x,la as V,ma as U,pb as h,rb as k,sb as z,tb as I,va as s,wa as l,zc as J}from"./chunk-7NKZXXYM.js";var Ee=(m,f)=>({"ms-auto":m,"me-auto":f});function Ve(m,f){m&1&&C(0,"img",19)}function Ie(m,f){m&1&&C(0,"img",20)}function ye(m,f){m&1&&C(0,"img",21)}function Oe(m,f){m&1&&C(0,"img",22)}function Ae(m,f){m&1&&C(0,"img",23)}function De(m,f){m&1&&C(0,"img",24)}function Re(m,f){if(m&1&&(r(0,"li",25)(1,"a",26)(2,"mat-icon",27),_(3,"person"),o()()()),m&2){let i=c();a(2),k("matTooltip",i.isLang?"Profile":" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")}}function Be(m,f){if(m&1&&(r(0,"li",25)(1,"a",26)(2,"mat-icon",27),_(3,"notifications"),o()()()),m&2){let i=c();a(2),k("matTooltip",i.isLang?"Notifications":" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")}}function Fe(m,f){if(m&1&&(r(0,"li",28)(1,"a",26)(2,"mat-icon",27),_(3,"language"),o()()()),m&2){let i=c(),n=d(19);k("matMenuTriggerFor",n),a(2),k("matTooltip",i.isLang?"Select Langauge":"\u0623\u062E\u062A\u0627\u0631 \u0627\u0644\u0644\u063A\u0629")}}function Ne(m,f){if(m&1&&(r(0,"li",25)(1,"a",29)(2,"mat-icon",27),_(3,"login"),o()()()),m&2){let i=c();a(2),k("matTooltip",i.isLang?"Sign In":" \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")}}function He(m,f){if(m&1){let i=b();r(0,"li",25)(1,"a",30),p("click",function(){s(i);let e=c();return l(e.logout())}),r(2,"mat-icon",27),_(3,"logout"),o()()()}if(m&2){let i=c();a(2),k("matTooltip",i.isLang?"log out":"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C")}}function je(m,f){if(m&1){let i=b();r(0,"button",31),p("click",function(){s(i);let e=c();return l(e.changeLang("en"))}),_(1,"EN"),o()}}function Ue(m,f){if(m&1){let i=b();r(0,"button",31),p("click",function(){s(i);let e=c();return l(e.changeLang("ar"))}),_(1," \u0639"),o()}}function ze(m,f){m&1&&(r(0,"div",32),C(1,"mat-progress-spinner",33),o())}var ke=(()=>{let f=class f{constructor(n,e,t,T,E){this.translationService=n,this.router=e,this.translate=t,this.AuthService=T,this.document=E,this.localStorage=this.document.defaultView?.localStorage,this.loading=!1,this.isLang=!0,this.activeGlobal=!1,this.activeCRM=!1,this.activeHR=!1,this.activeOperation=!1,this.activeFinance=!1,this.activeSecurity=!1,this.isUserUseTwoLanguage=!1,this.translationService.direction$.subscribe(P=>{this.direction=P}),this.translationService.isUserUseTwoLanguage$.subscribe(P=>{this.isUserUseTwoLanguage=P}),this.translationService.language$.subscribe(P=>{this.langauge=P}),this.translate.setDefaultLang("en"),this.document.defaultView?.localStorage&&(this.localStorage=this.document.defaultView?.localStorage,this.isUserUseTwoLanguage=JSON.parse(this.localStorage.getItem("isUserUsingTwoLanguage")))}ngOnInit(){this.localStorage&&(this.isRegstired=JSON.parse(this.localStorage.getItem("isRegistered")||"false")),this.AuthService.isRegisteredChanged.subscribe(n=>{this.isRegstired=n}),this.localStorage&&(this.username=this.localStorage.getItem("username")),this.router.events.subscribe(n=>{n instanceof q&&this.setActiveState()})}setActiveState(){let n=this.router.url;this.activeGlobal=n.includes("sharedspace"),this.activeCRM=n.includes("crm"),this.activeHR=n.includes("hr"),this.activeOperation=n.includes("opreation"),this.activeFinance=n.includes("finance"),this.activeSecurity=n.includes("security")}changeLang(n){this.translationService.switchLangauge(n)}logout(){this.loading=!0,this.AuthService.setIsRegistered(!1),this.loading=!1}};f.\u0275fac=function(e){return new(e||f)(w(H),w(Y),w(Z),w(R),w(J))},f.\u0275cmp=V({type:f,selectors:[["app-main-navbar"]],decls:23,vars:19,consts:[["menu","matMenu"],[1,"navbar","navbar-expand-lg","bg-body-tertiary",3,"dir"],[1,"container-fluid"],["routerLink","",1,"navbar-brand","fs-2","ps-4"],["src","assets/images/icon.png","alt","",4,"ngIf"],["src","assets/images/DepartmentsLogo/Finance_2.ico","alt","Finance Logo",4,"ngIf"],["src","assets/images/DepartmentsLogo/CRM_3.ico","alt","CRM Logo",4,"ngIf"],["src","assets/images/DepartmentsLogo/HR_3.ico","alt","HR Logo",4,"ngIf"],["src","assets/images/DepartmentsLogo/Operation_2.ico","alt","Operation Logo",4,"ngIf"],["src","assets/images/DepartmentsLogo/Security _3.ico","alt","Security",4,"ngIf"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"navbar-nav",3,"ngClass"],["class","nav-item fs-4 fw-medium d-block ms-4",4,"ngIf"],["class","nav-item fs-4 fw-medium d-block ms-4",3,"matMenuTriggerFor",4,"ngIf"],[1,"menu","d-flex","justify-content-center","align-items-center"],["mat-menu-item","",3,"click",4,"ngIf"],["class","loading-layout",4,"ngIf"],["src","assets/images/icon.png","alt",""],["src","assets/images/DepartmentsLogo/Finance_2.ico","alt","Finance Logo"],["src","assets/images/DepartmentsLogo/CRM_3.ico","alt","CRM Logo"],["src","assets/images/DepartmentsLogo/HR_3.ico","alt","HR Logo"],["src","assets/images/DepartmentsLogo/Operation_2.ico","alt","Operation Logo"],["src","assets/images/DepartmentsLogo/Security _3.ico","alt","Security"],[1,"nav-item","fs-4","fw-medium","d-block","ms-4"],["aria-current","page",1,"nav-link"],[1,"fs-3","d-block",3,"matTooltip"],[1,"nav-item","fs-4","fw-medium","d-block","ms-4",3,"matMenuTriggerFor"],["routerLink","/login","aria-current","page",1,"nav-link"],["aria-current","page",1,"nav-link",3,"click"],["mat-menu-item","",3,"click"],[1,"loading-layout"],["color","primary","mode","indeterminate",1,"spinner"]],template:function(e,t){e&1&&(r(0,"nav",1)(1,"div",2)(2,"a",3),h(3,Ve,1,0,"img",4)(4,Ie,1,0,"img",5)(5,ye,1,0,"img",6)(6,Oe,1,0,"img",7)(7,Ae,1,0,"img",8)(8,De,1,0,"img",9),o(),r(9,"button",10),C(10,"span",11),o(),r(11,"div",12)(12,"ul",13),h(13,Re,4,1,"li",14)(14,Be,4,1,"li",14)(15,Fe,4,2,"li",15)(16,Ne,4,1,"li",14)(17,He,4,1,"li",14),o()()()(),r(18,"mat-menu",16,0),h(20,je,2,0,"button",17)(21,Ue,2,0,"button",17),o(),h(22,ze,2,0,"div",18)),e&2&&(k("dir",t.direction),a(3),k("ngIf",t.activeGlobal),a(),k("ngIf",t.activeFinance),a(),k("ngIf",t.activeCRM),a(),k("ngIf",t.activeHR),a(),k("ngIf",t.activeOperation),a(),k("ngIf",t.activeSecurity),a(4),k("ngClass",y(16,Ee,t.isLang,!t.isLang)),a(),k("ngIf",t.isRegstired),a(),k("ngIf",t.isRegstired),a(),k("ngIf",t.isRegstired&&t.isUserUseTwoLanguage),a(),k("ngIf",!t.isRegstired),a(),k("ngIf",t.isRegstired),a(3),k("ngIf",t.langauge=="ar"),a(),k("ngIf",t.langauge=="en"),a(),k("ngIf",t.loading))},dependencies:[O,A,B,F,N,pe,le,me,_e,D],styles:[".navbar[_ngcontent-%COMP%]{background-color:#fff!important;box-shadow:0 4px 8px #0000001a;z-index:2}.nav-link[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{background-color:#0ff;padding:8px 24px;border-radius:25px}.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#7c7c7c;background-color:transparent}mat-icon.fs-2[_ngcontent-%COMP%]{color:#7c7c7c;overflow:visible;cursor:pointer}mat-icon[_ngcontent-%COMP%]{width:32px!important;height:32px!important}.form-control[_ngcontent-%COMP%]{background-color:#f2f2f2;color:#fff}li[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#7c7c7c}  .mat-badge-content{background-color:#8b5cf6;color:#fff}.spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.loading-layout[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#00000080;z-index:9999;display:flex;justify-content:center;align-items:center}.nav-link[_ngcontent-%COMP%]{cursor:pointer}.user[_ngcontent-%COMP%]{background-color:#8b5cf6;color:#fff;padding:5px 8px;border-radius:16px!important}mat-menu[_ngcontent-%COMP%]{width:30px!important;height:25px!important}mat-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:15px!important;height:15px!important}img[_ngcontent-%COMP%]{width:50px!important}"]});let m=f;return m})();var M=m=>({tt:m}),L=m=>({borderr:m}),$e=(m,f)=>({arrow:m,arrowAra:f});function qe(m,f){m&1&&(r(0,"h2",70),C(1,"img",71),o())}function Ge(m,f){if(m&1&&(r(0,"mat-icon",72),_(1),o()),m&2){let i=c(2);a(),S(i.isSidenavExpanded&&i.direction=="ltr"?"arrow_circle_left":"arrow_circle_right")}}function Ye(m,f){if(m&1&&(r(0,"mat-icon",72),_(1),o()),m&2){let i=c(2);a(),S(i.isSidenavExpanded&&i.direction!="ltr"?"arrow_circle_right":"arrow_circle_left")}}function Ke(m,f){if(m&1){let i=b();r(0,"mat-drawer",10),h(1,qe,2,0,"h2",11),r(2,"mat-nav-list",12)(3,"mat-accordion")(4,"mat-expansion-panel",13,0),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(6,"mat-expansion-panel-header",14)(7,"mat-panel-title")(8,"img",15),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(9,"mat-panel-description")(10,"a",16)(11,"span",17),_(12),u(13,"translate"),o()()()(),r(14,"span",18),p("click",function(){s(i);let e=d(5),t=c();return l(t.onLinkClick(e))}),_(15),u(16,"translate"),o(),r(17,"span",19),p("click",function(){s(i);let e=d(5),t=c();return l(t.onLinkClick(e))}),_(18),u(19,"translate"),o(),r(20,"span",20),p("click",function(){s(i);let e=d(5),t=c();return l(t.onLinkClick(e))}),_(21),u(22,"translate"),o(),r(23,"span",21),p("click",function(){s(i);let e=d(5),t=c();return l(t.onLinkClick(e))}),_(24),u(25,"translate"),o(),r(26,"span",22),p("click",function(){s(i);let e=d(5),t=c();return l(t.onLinkClick(e))}),_(27),u(28,"translate"),o()(),r(29,"mat-expansion-panel",13,1),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(31,"mat-expansion-panel-header",14)(32,"mat-panel-title")(33,"img",23),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(34,"mat-panel-description")(35,"span"),_(36),u(37,"translate"),o()()(),r(38,"span",24),p("click",function(){s(i);let e=d(30),t=c();return l(t.onLinkClick(e))}),_(39),u(40,"translate"),o()(),r(41,"mat-expansion-panel",13,2),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(43,"mat-expansion-panel-header",14)(44,"mat-panel-title")(45,"img",25),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(46,"mat-panel-description")(47,"span"),_(48),u(49,"translate"),o()()(),r(50,"span",26),p("click",function(){s(i);let e=d(42),t=c();return l(t.onLinkClick(e))}),_(51),u(52,"translate"),o(),r(53,"span",27),p("click",function(){s(i);let e=d(42),t=c();return l(t.onLinkClick(e))}),_(54),u(55,"translate"),o(),r(56,"span",28),p("click",function(){s(i);let e=d(42),t=c();return l(t.onLinkClick(e))}),_(57),u(58,"translate"),o(),r(59,"span",29),p("click",function(){s(i);let e=d(42),t=c();return l(t.onLinkClick(e))}),_(60),u(61,"translate"),o(),r(62,"span",30),p("click",function(){s(i);let e=d(42),t=c();return l(t.onLinkClick(e))}),_(63),u(64,"translate"),o()(),r(65,"mat-expansion-panel",13,3),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(67,"mat-expansion-panel-header",14)(68,"mat-panel-title")(69,"img",31),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(70,"mat-panel-description")(71,"span"),_(72),u(73,"translate"),o()()(),r(74,"span",32),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(75),u(76,"translate"),o(),r(77,"span",33),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(78),u(79,"translate"),o(),r(80,"span",34),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(81),u(82,"translate"),o(),r(83,"span",35),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(84),u(85,"translate"),o(),r(86,"span",36),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(87),u(88,"translate"),o(),r(89,"span",37),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(90),u(91,"translate"),o(),r(92,"span",38),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(93),u(94,"translate"),o(),r(95,"span",39),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(96),u(97,"translate"),o(),r(98,"span",40),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(99),u(100,"translate"),o(),r(101,"span",41),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(102),u(103,"translate"),o(),r(104,"span",42),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(105),u(106,"translate"),o(),r(107,"span",43),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(108),u(109,"translate"),o(),r(110,"span",44),p("click",function(){s(i);let e=d(66),t=c();return l(t.onLinkClick(e))}),_(111),u(112,"translate"),o()(),r(113,"mat-expansion-panel",13,4),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(115,"mat-expansion-panel-header",14)(116,"mat-panel-title")(117,"img",45),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(118,"mat-panel-description")(119,"span"),_(120),u(121,"translate"),o()()(),r(122,"span",46),p("click",function(){s(i);let e=d(114),t=c();return l(t.onLinkClick(e))}),_(123),u(124,"translate"),o(),r(125,"span",47),p("click",function(){s(i);let e=d(114),t=c();return l(t.onLinkClick(e))}),_(126),u(127,"translate"),o(),r(128,"span",48),p("click",function(){s(i);let e=d(114),t=c();return l(t.onLinkClick(e))}),_(129),u(130,"translate"),o(),r(131,"span",49),p("click",function(){s(i);let e=d(114),t=c();return l(t.onLinkClick(e))}),_(132),u(133,"translate"),o(),r(134,"span",50),p("click",function(){s(i);let e=d(114),t=c();return l(t.onLinkClick(e))}),_(135),u(136,"translate"),o(),r(137,"span",51),p("click",function(){s(i);let e=d(114),t=c();return l(t.onLinkClick(e))}),_(138),u(139,"translate"),o()(),r(140,"mat-expansion-panel",13,5),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(142,"mat-expansion-panel-header",14)(143,"mat-panel-title")(144,"img",52),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(145,"mat-panel-description")(146,"span",17),_(147),u(148,"translate"),o()()(),r(149,"span",53),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(150),u(151,"translate"),o(),r(152,"span",54),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(153),u(154,"translate"),o(),r(155,"span",55),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(156),u(157,"translate"),o(),r(158,"span",56),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(159),u(160,"translate"),o(),r(161,"span",57),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(162),u(163,"translate"),o(),r(164,"span",58),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(165),u(166,"translate"),o(),r(167,"span",59),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(168),u(169,"translate"),o(),r(170,"span",19),p("click",function(){s(i);let e=d(141),t=c();return l(t.onLinkClick(e))}),_(171),u(172,"translate"),o()(),r(173,"mat-expansion-panel",13,6),p("opened",function(){s(i);let e=c();return l(e.onPanelOpened())}),r(175,"mat-expansion-panel-header",14)(176,"mat-panel-title")(177,"img",60),p("click",function(){s(i);let e=c();return l(e.show())}),o()(),r(178,"mat-panel-description")(179,"span"),_(180),u(181,"translate"),o()()(),r(182,"span",61),p("click",function(){s(i);let e=d(174),t=c();return l(t.onLinkClick(e))}),_(183),u(184,"translate"),o(),r(185,"span",62),p("click",function(){s(i);let e=d(174),t=c();return l(t.onLinkClick(e))}),_(186),u(187,"translate"),o(),r(188,"span",63),p("click",function(){s(i);let e=d(174),t=c();return l(t.onLinkClick(e))}),_(189),u(190,"translate"),o(),r(191,"span",64),p("click",function(){s(i);let e=d(174),t=c();return l(t.onLinkClick(e))}),_(192),u(193,"translate"),o(),r(194,"span",65),p("click",function(){s(i);let e=d(174),t=c();return l(t.onLinkClick(e))}),_(195),u(196,"translate"),o(),r(197,"span",66),p("click",function(){s(i);let e=d(174),t=c();return l(t.onLinkClick(e))}),_(198),u(199,"translate"),o()()()(),r(200,"div",67)(201,"div",68),p("click",function(){s(i);let e=d(5),t=d(30),T=d(42),E=d(66),P=d(114),fe=d(141),ve=d(174),Ce=c();return l(Ce.onArrowClick([ve,fe,P,E,T,e,t]))}),h(202,Ge,2,1,"mat-icon",69)(203,Ye,2,1,"mat-icon",69),o()()()}if(m&2){let i=c();z("width",i.isSidenavExpanded?220:90,"px"),k("opened",!0),a(),k("ngIf",i.isSidenavExpanded),a(),k("ngClass",i.isSidenavExpanded?"":"margin-50"),a(2),k("ngClass",v(186,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(188,L,i.panelOpenState)),a(6),S(x(13,84,"SharedArea")),a(3),g(" ",x(16,86,"MasterPage"),""),a(3),g(" ",x(19,88,"FinanceReporet"),""),a(3),g(" ",x(22,90,"CRMReport"),""),a(3),g(" ",x(25,92,"Approvals"),""),a(3),g(" ",x(28,94,"requests"),""),a(2),k("ngClass",v(190,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(192,L,i.panelOpenState4)),a(5),S(x(37,96,"AI")),a(3),g(" ",x(40,98,"Explore"),""),a(2),k("ngClass",v(194,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(196,L,i.panelOpenState1)),a(5),S(x(49,100,"operationLink")),a(3),g(" ",x(52,102,"projects"),""),a(3),g(" ",x(55,104,"units"),""),a(3),g(" ",x(58,106,"types"),""),a(3),g(" ",x(61,108,"Status"),""),a(3),g(" ",x(64,110,"phases"),""),a(2),k("ngClass",v(198,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(200,L,i.panelOpenState2)),a(5),g(" ",x(73,112,"HrLink")," "),a(3),g(" ",x(76,114,"HrLink2"),""),a(3),g(" ",x(79,116,"EmployeeLeader"),""),a(3),g(" ",x(82,118,"Allowance"),""),a(3),g(" ",x(85,120,"Deductions"),""),a(3),g(" ",x(88,122,"Payrolls"),""),a(3),g(" ",x(91,124,"timeOff"),""),a(3),g(" ",x(94,126,"sepration"),""),a(3),g(" ",x(97,128,"evalution"),""),a(3),g(" ",x(100,130,"Punishment"),""),a(3),g(" ",x(103,132,"Department"),""),a(3),g(" ",x(106,134,"insuranceProvider"),""),a(3),g(" ",x(109,136,"employeeInsurance"),""),a(3),g(" ",x(112,138,"employeeAnniversary"),""),a(2),k("ngClass",v(202,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(204,L,i.panelOpenState3)),a(5),g(" ",x(121,140,"crm"),""),a(3),g(" ",x(124,142,"Activity"),""),a(3),g(" ",x(127,144,"Leads"),""),a(3),g(" ",x(130,146,"Contacts"),""),a(3),g(" ",x(133,148,"Accounts"),""),a(3),g(" ",x(136,150,"Orders"),""),a(3),g(" ",x(139,152,"CRMReport"),""),a(2),k("ngClass",v(206,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(208,L,i.panelOpenState3)),a(5),g(" ",x(148,154,"Finance"),""),a(3),g(" ",x(151,156,"FiscyalYears"),""),a(3),g(" ",x(154,158,"Jounrals"),""),a(3),g(" ",x(157,160,"Payroll"),""),a(3),g(" ",x(160,162,"Accounts"),""),a(3),g(" ",x(163,164,"Invoices"),""),a(3),g(" ",x(166,166,"AccountType"),""),a(3),g(" ",x(169,168,"JounralDetailsAccountTypes"),""),a(3),g(" ",x(172,170,"Reports"),""),a(2),k("ngClass",v(210,M,i.isSidenavExpanded))("hideToggle",i.arrow),a(2),k("ngClass",v(212,L,i.panelOpenState4)),a(5),S(x(181,172,"security")),a(3),g(" ",x(184,174,"Users"),""),a(3),g(" ",x(187,176,"Accessibility"),""),a(3),g(" ",x(190,178,"register"),""),a(3),g(" ",x(193,180,"Approvers"),""),a(3),g(" ",x(196,182,"requestTypes"),""),a(3),g(" ",x(199,184,"cfg"),""),a(3),I("expand",i.isSidenavExpanded)("expandAra",i.isSidenavExpanded&&i.direction!="ltr"),k("ngClass",y(214,$e,i.direction=="ltr",i.direction!="ltr")),a(),k("ngIf",i.direction=="ltr"),a(),k("ngIf",i.direction!="ltr")}}var ot=(()=>{let f=class f{constructor(n,e,t,T){this.breakpointObserver=n,this.translationService=e,this.AuthService=t,this.dialog=T,this.isMenuExpanded=!1,this.panelOpenState=!1,this.panelOpenState1=!1,this.panelOpenState2=!1,this.panelOpenState3=!1,this.panelOpenState4=!1,this.isSidenavExpanded=!1,this.arrow=!0,this.isLang=!0,this.HRIDS=[1,2,3,4,5,6,7,8,9,10,11],this.OperIDS=[1,12,13,14,15,16,17,18],this.CRMIDS=[1,19,20,21,22,32,24,25,26],this.FinanceIDs=[],this.translationService.direction$.subscribe(E=>{this.direction=E})}ngOnInit(){this.AuthService.isRegistered$.subscribe(n=>{this.isRegstired=n}),this.isRegstired=JSON.parse(localStorage.getItem("isRegistered")||"false"),this.breakpointObserver.observe([X.Handset]).subscribe(n=>{n.matches?this.isSidenavExpanded=!1:this.isSidenavExpanded=!1})}onLinkClick(n){n.close(),this.toggleSidenav()}onArrowClick(n){n.forEach(e=>e.close()),this.toggleSidenav()}show(){this.arrow=!0}onPanelOpened(){this.isSidenavExpanded||(this.arrow=!this.arrow,this.isSidenavExpanded=!this.isSidenavExpanded)}toggleSidenav(){this.arrow=!this.arrow,this.panelOpenState||this.panelOpenState1||this.panelOpenState2||this.panelOpenState3||this.panelOpenState4?(this.panelOpenState=!1,this.panelOpenState1=!1,this.panelOpenState2=!1,this.panelOpenState3=!1,this.panelOpenState4=!1,this.isSidenavExpanded=!this.isSidenavExpanded):this.isSidenavExpanded=!this.isSidenavExpanded}toggleSidenavwithCheck(){this.isSidenavExpanded?this.isSidenavExpanded=this.isSidenavExpanded:this.isSidenavExpanded=!this.isSidenavExpanded}checkpermission(){this.AuthService.hasAccessToDepartment(this.HRIDS).subscribe(n=>{this.hasAccessToHR=n}),this.AuthService.hasAccessToDepartment(this.CRMIDS).subscribe(n=>{this.hasAccessToCRM=n}),this.AuthService.hasAccessToDepartment(this.FinanceIDs).subscribe(n=>{this.hasAccessToFinance=n}),this.AuthService.hasAccessToDepartment(this.OperIDS).subscribe(n=>{this.hasAccessToOoperation=n})}};f.\u0275fac=function(e){return new(e||f)(w(W),w(H),w(R),w(xe))},f.\u0275cmp=V({type:f,selectors:[["app-master-page"]],decls:5,vars:14,consts:[["expansionPanel5",""],["expansionPanel6",""],["expansionPanel4",""],["expansionPanel3",""],["expansionPanel2",""],["expansionPanel1",""],["expansionPanel",""],[1,"example-container",3,"dir"],["mode","side",3,"opened","width",4,"ngIf"],[1,"w-100","ps-2"],["mode","side",3,"opened"],["class","text-white text-center mt-3 fs-4",4,"ngIf"],[3,"ngClass"],[1,"mb-2","pt-2","pb-2",3,"opened","ngClass","hideToggle"],[1,"specific-class",3,"ngClass"],["matTooltip","Shared Area","alt","Shared Area","src","assets/images/DepartmentsLogo/AI_1.png",1,"Depart-img",3,"click"],[1,""],[1,"d-block"],["routerLink","/sharedspace/main/landing","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/reports/JounralHeader","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/sharedspace/main/Reports/crm","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/sharedspace/main/Approval","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/sharedspace/main/Request","routerLinkActive","active",1,"d-block",3,"click"],["matTooltip","AI","alt","AI","src","assets/images/DepartmentsLogo/AI_2.ico",1,"Depart-img",3,"click"],["routerLink","/AI/main/","routerLinkActive","active",1,"d-block",3,"click"],["matTooltip","Opreation","alt","Opreation","src","assets/images/DepartmentsLogo/Operation_2.ico",1,"Depart-img",3,"click"],["routerLink","/opreation/main/projects","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/opreation/main/units","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/opreation/main/types","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/opreation/main/status","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/opreation/main/phases","routerLinkActive","active",1,"d-block",3,"click"],["matTooltip","HR","src","assets/images/DepartmentsLogo/HR_3.ico",1,"Depart-img",3,"click"],["routerLink","/hr/main/EmployeeData","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/Leaders","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Allowance","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Deductions","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Payrolls","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/timeoff","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/separation","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/evalution","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/punishment","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/department","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/insurance/provider","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/insurance/employee","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/hr/main/Employee/anniversary","routerLinkActive","active",1,"d-block",3,"click"],["matTooltip","CRM","alt","CRM","src","assets/images/DepartmentsLogo/CRM_3.ico",1,"Depart-img",3,"click"],["routerLink","crm/main/activity","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","crm/main/leads","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","crm/main/contacts","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","crm/main/accounts","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","crm/main/manage","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/sharedspace/Reports/crm","routerLinkActive","active",1,"d-block",3,"click"],["matTooltip","Finance","alt","Finance","src","assets/images/DepartmentsLogo/Finance_2.ico",1,"Depart-img",3,"click"],["routerLink","/finance/main/fyperiod","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/Jounral/header","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/payrolls","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/Accounts","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/Invoices","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/AccountTypes","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/finance/main/Details/Account/Types","routerLinkActive","active",1,"d-block",3,"click"],["matTooltip","Security","alt","Security","src","assets/images/DepartmentsLogo/Security _3.ico",1,"Depart-img",3,"click"],["routerLink","/security/main","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/security/main/access","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/security/main/regstir","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/security/main/Approvers","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/security/main/request/type","routerLinkActive","active",1,"d-block",3,"click"],["routerLink","/security/main/comInfo","routerLinkActive","active",1,"d-block",3,"click"],[1,"index"],["mat-icon-button","",3,"click","ngClass"],["class","icon-color",4,"ngIf"],[1,"text-white","text-center","mt-3","fs-4"],["src","assets/images/Logoo.png","alt","BMD Logo"],[1,"icon-color"]],template:function(e,t){e&1&&(r(0,"mat-drawer-container",7),h(1,Ke,204,217,"mat-drawer",8),r(2,"mat-drawer-content",9),C(3,"app-main-navbar")(4,"router-outlet"),o()()),e&2&&(I("expanded",t.isSidenavExpanded&&t.direction=="ltr")("expandedAra",t.isSidenavExpanded&&t.direction!="ltr")("collapsed",!t.isSidenavExpanded),k("dir",t.direction),a(),k("ngIf",t.isRegstired),a(),I("ps-3",t.isRegstired&&t.direction==="ltr")("mika",t.direction=="ltr"&&t.isRegstired)("margin",!t.isRegstired))},dependencies:[O,A,B,F,re,te,ie,ae,ne,ce,se,oe,N,G,D,K,ke,ee],styles:[".example-container[_ngcontent-%COMP%]{display:flex}.collapsed[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{margin-left:0}.example-container[_ngcontent-%COMP%]{display:flex;height:100vh!important}.collapsed[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%]{transition:.5s;width:80px}.collapsed[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]{transition:.5s}.collapsedAra[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]{transition:.5s!important;margin-right:80px}.expanded[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%]{transition:.5s!important;width:240px}.expandedAra[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]{margin-left:0;transition:.5s!important}.expanded[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%]{margin-left:240px;transition:.5s!important}.mika[_ngcontent-%COMP%]{margin-left:74px!important;transition:.5s!important}.margin[_ngcontent-%COMP%]{margin-left:0!important;transition:.5s!important}mat-nav-list[_ngcontent-%COMP%]{position:relative!important}div.arrow[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #2c3e50;border-radius:50%;width:26px;height:26px;padding-right:8px!important;color:#fff!important;position:absolute;top:100px;right:-15.5%;z-index:10000000!important;display:block!important;cursor:pointer;transition:.5s}div.arrowAra[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #2c3e50;border-radius:50%;width:26px;height:26px;padding-right:-3px!important;color:#333!important;position:absolute;top:100px;right:85%;z-index:10000000!important;display:block!important;cursor:pointer;transition:.5s}.index[_ngcontent-%COMP%]{z-index:10000000!important}mat-drawer[_ngcontent-%COMP%]{overflow:visible!important;border-right:2px solid white;background-color:#2c3e50;z-index:100000000}mat-drawer-content[_ngcontent-%COMP%]{z-index:-100;transition:.5s}.expand[_ngcontent-%COMP%]{right:-6.5%!important}.expandAra[_ngcontent-%COMP%]{right:94%!important}mat-expansion-panel[_ngcontent-%COMP%]{background-color:#fff!important;box-shadow:none!important}.tt[_ngcontent-%COMP%]{box-shadow:0 5px 10px #6464645d!important}.borderr[_ngcontent-%COMP%]{border-bottom:1px solid white}span.d-block[_ngcontent-%COMP%]{min-height:20px!important;margin-bottom:10px!important;display:block;min-width:120px!important;width:100%!important;margin-top:10px;padding:5px 8px;cursor:pointer}a.d-block[_ngcontent-%COMP%]:hover{background-color:#fff;border-radius:7px;color:#000!important}a.d-block[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#000!important}  .specific-class>.mat-expansion-indicator:after{color:#333!important;width:8px!important;margin-bottom:2px!important}img[_ngcontent-%COMP%]{width:50px!important}.margin-50[_ngcontent-%COMP%]{margin-top:60px}a[_ngcontent-%COMP%]{cursor:pointer;color:#333}span[_ngcontent-%COMP%]{cursor:pointer;color:#333!important;font-size:17px}mat-icon[_ngcontent-%COMP%]{cursor:pointer;color:#2c3e50}.active[_ngcontent-%COMP%]{background-color:#2c3e50;color:#fff!important;border-radius:5px}.active[_ngcontent-%COMP%]:hover{color:#fff!important}mat-icon.icon-color[_ngcontent-%COMP%]{color:#2c3e50}.Depart-img[_ngcontent-%COMP%]{width:30px!important}"]});let m=f;return m})();var Qe=[],gt=(()=>{let f=class f{};f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=U({type:f}),f.\u0275inj=j({imports:[$,de,ue,Q.forChild(Qe)]});let m=f;return m})();export{ot as a,gt as b};
