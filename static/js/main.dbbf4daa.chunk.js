(window.webpackJsonptest_chat=window.webpackJsonptest_chat||[]).push([[0],[,,,,,function(e,a,t){},,,,,,,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);t(5);var s=t(0),n=t.n(s),c=t(8),r=t.n(c),m=(t(17),t(18),t(19),function(){return n.a.createElement("div",{className:"counts"},n.a.createElement("div",{className:"count-users"},"7 users "))}),l=(t(20),function(){return n.a.createElement("div",{className:"counts"},n.a.createElement("div",{className:"count-messages"},"9 messages"))}),i=(t(21),function(){return n.a.createElement("div",{className:"times"},"Last message: 2019-08/18 15:15:07")}),o=function(){return n.a.createElement("div",{className:"h-top"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"header-logo"},n.a.createElement("p",{className:"logo"},"My Chat"),n.a.createElement("div",{className:"counts"},n.a.createElement(m,null),n.a.createElement(l,null))),n.a.createElement(i,null)))))},u=(t(22),function(e){var a=e.data.map(function(e){return n.a.createElement("div",{className:"sent"},n.a.createElement("div",{className:"data"},e.created_at),n.a.createElement("div",{className:"dialogs"},n.a.createElement("div",{className:"message-avatar"},n.a.createElement("img",{src:e.avatar,alt:"",className:"d-item"})),n.a.createElement("div",{className:"message-content"},n.a.createElement("h4",{className:"message-name"},e.user),n.a.createElement("p",{className:"message-messages"},e.message))),n.a.createElement("div",{className:"fa-com"},n.a.createElement("i",{className:"far fa-heart"}),n.a.createElement("i",{className:"fas fa-backspace"})))});return n.a.createElement("div",{className:"container"},n.a.createElement(function(e){return a},null),n.a.createElement("div",{className:"inbox"},n.a.createElement("div",{className:"data"},"2019-08-18 10:23:00"),n.a.createElement("div",{className:"answers"},n.a.createElement("div",{className:"message-avatar"}),n.a.createElement("div",{className:"message-content"},n.a.createElement("h4",{className:"message-name"},"Taylor"),n.a.createElement("p",{className:"message-messages white"},"I have! Let\u2019s discuss it:`)`"))),n.a.createElement("i",{className:"far fa-edit"})))}),d=(t(23),t(24),function(e){var a=n.a.createRef();return n.a.createElement("div",{className:"form-input"},n.a.createElement("div",{className:"input-text"},n.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.updateNewPostText(t)},value:e.newPostText,ref:a,type:"text",placeholder:"Type something...",className:"input-txt"})),n.a.createElement("div",{className:"input-button"},n.a.createElement("input",{type:"submit",value:"Send",className:"input-btn",onClick:function(){var t=a.current.value;e.addPost(t)}})))}),v=function(e){return n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"form-input"},n.a.createElement(d,{addPost:e.addPost,newPostText:e.newPostText,updateNewPostText:e.updateNewPostText}))))},p=(t(25),t(26),function(){return n.a.createElement("nav",{className:"nav"},n.a.createElement("div",{className:"nav-menu"},n.a.createElement("p",{className:"menu"},"Home "),n.a.createElement("p",{className:"menu"},"About"),n.a.createElement("p",{className:"menu"},"Contact us")))}),E=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement(p,null),n.a.createElement("div",{className:"footer-copy"},n.a.createElement("p",null,"@ Copyright 2019")))))};var N=function(e){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null),n.a.createElement(u,{data:e.state.data}),n.a.createElement(v,{addPost:e.addPost,newPostText:e.state.newPostText,updateNewPostText:e.updateNewPostText}),n.a.createElement(E,null))},f={data:[{id:"9333000183101",user:"Kate",avatar:"https://i.pravatar.cc/300?img=5",created_at:"2019-08-17 23:30:11",message:"Hey, guys! Have you seen the new episode of 'Black Mirror'?"},{id:"9333000183102",user:"Dave",avatar:"https://i.pravatar.cc/300?img=14",created_at:"2019-08-17 23:54:45",message:"Nay, not yet:-("},{id:"9333000183103",user:"Taylor",avatar:"https://i.pravatar.cc/300?img=12",created_at:"2019-08-18 10:23:00",message:"I have! Let\u2019s discuss it)"},{id:"9333000183104",user:"Dave",avatar:"https://i.pravatar.cc/300?img=14",created_at:"2019-08-18 10:24:32",message:"No spoilers!!! I will watch it asap."},{id:"9333000183105",user:"Kim",avatar:"https://i.pravatar.cc/300?img=31",created_at:"2019-08-18 10:29:03",message:"Oh, Dave! But please, hurry up!"},{id:"9333000183106",user:"Dave",avatar:"https://i.pravatar.cc/300?img=14",created_at:"2019-08-18 10:34:47",message:"I have to finish my work and afterwards I will watch it."},{id:"9333000183107",user:"Kate",avatar:"https://i.pravatar.cc/300?img=5",created_at:"2019-08-18 10:35:19",message:"Oh\u2026 I'll go see \u2018The Boys\u2019 while Dave is busy."},{id:"9333000183108",user:"Dave",avatar:"https://i.pravatar.cc/300?img=14",created_at:"2019-08-18 10:35:57",message:"OK :)"},{id:"9333000183109",user:"Taylor",avatar:"https://i.pravatar.cc/300?img=12",created_at:"2019-08-18 10:37:50",message:"Alright, Dave. We\u2019ll wait until you finish your work."}],newPostText:""},g=function(){var e={id:"9333000183103",user:"Taylor",avatar:"https://i.pravatar.cc/300?img=12",created_at:"2019-08-18 10:37:50",message:f.newPostText};f.data.push(e),f.newPostText="",x(f)},h=function(e){f.newPostText=e,x(f)},w=f,y=t(11),x=function(e){r.a.render(n.a.createElement(y.a,null,n.a.createElement(N,{state:e,addPost:g,updateNewPostText:h})),document.getElementById("root"))};x(w)}],[[12,1,2]]]);
//# sourceMappingURL=main.dbbf4daa.chunk.js.map