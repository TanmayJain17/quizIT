(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"data":[{"question":"Interacting with people makes me feel good. ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"My goals in life are clear ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"If people are rude to me I just shrug it off ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am confident in what I do ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I can work even when things are disorganized ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I consistently put full time and effort into everything I do?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I prefer achieving my goals than assisting others to achieve their goals?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I would describe myself as an extremely competent person?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I prefer working within a stable rather than flexible environment ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am ambitious ?","choices":["Agree","Disagree"],"answer":"Agree"}]}')},65:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(8),i=a.n(c),r=a(12),o=(a(65),a(21)),l=a(119),u=a(120),d=a(34),j=a.n(d),h=a(3),b=function(e){var t=e.onQuizStart,a=Object(s.useState)({theEmail:"",theName:"",thePhone:""}),n=Object(r.a)(a,2),c=n[0],i=n[1];return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-content",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(l.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",autoComplete:"off",id:"name",value:c.theNames,onChange:function(e){!function(e){i(Object(o.a)(Object(o.a)({},c),{},{theName:e.target.value}))}(e)}}),Object(h.jsx)(l.a,{style:{marginBottom:25},label:"Enter Your Phone No.",variant:"outlined",autoComplete:"off",name:"phone",value:c.Phone,onChange:function(e){!function(e){i(Object(o.a)(Object(o.a)({},c),{},{thePhone:e.target.value}))}(e)}}),Object(h.jsx)(l.a,{style:{marginBottom:25},label:"Enter Your Email ID",variant:"outlined",autoComplete:"off",name:"email",value:c.theEmail,onChange:function(e){!function(e){i(Object(o.a)(Object(o.a)({},c),{},{theEmail:e.target.value}))}(e)}}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{className:"button is-success is-medium",onClick:function(){i(c),j.a.post("../../details",c).then((function(e){e.data.message?window.alert(e.data.message):(console.log(e.data.id),sessionStorage.setItem("userId",e.data.id),window.alert("You can now start the test!"))}))},children:"Submit"}),Object(h.jsx)("h1",{className:"letg",children:"Predictability Test"}),Object(h.jsx)("p",{className:"letc",children:"Good luck!"}),Object(h.jsx)(u.a,{className:"button is-info is-medium",onClick:t,children:"Start"})]})})})},m=a(55),g=function(e){var t=e.data,a=e.onAnswerUpdate,n=e.numberOfQuestions,c=e.activeQuestion,i=e.onSetActiveQuestion,o=e.onSetStep,l=Object(s.useState)(""),u=Object(r.a)(l,2),d=u[0],j=u[1],b=Object(s.useState)(""),g=Object(r.a)(b,2),O=g[0],f=g[1],x=Object(s.useRef)();Object(s.useEffect)((function(){var e=x.current.querySelector("input:checked");e&&(e.checked=!1)}),[t]);var v=function(e){j(e.target.value),O&&f("")};return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-content",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{className:"mb-5",children:t.question}),Object(h.jsx)("div",{className:"control",ref:x,children:t.choices.map((function(e,t){return Object(h.jsxs)("label",{className:"radio has-background-light",children:[Object(h.jsx)("input",{type:"radio",name:"answer",value:e,onChange:v}),e]},t)}))}),O&&Object(h.jsx)("div",{className:"has-text-danger",children:O}),Object(h.jsx)("button",{className:"button is-link is-medium is-fullwidth mt-4",onClick:function(e){if(""===d)return f("Please select one option!");a((function(e){return[].concat(Object(m.a)(e),[{q:t.question,a:d}])})),j(""),c<n-1?i(c+1):o(3)},children:"Next"})]})})})},O=function(e){var t=e.results,a=e.data,n=(e.onReset,e.onAnswersCheck,e.time,Object(s.useState)(0)),c=Object(r.a)(n,2),i=c[0],o=c[1],l=sessionStorage.getItem("userId");return Object(s.useEffect)((function(){var e=0;t.forEach((function(t,s){t.a===a[s].answer&&e++})),o(e)}),[]),Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-content",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h1",{className:"letg",children:"Your Result"}),Object(h.jsxs)("p",{className:"letc",children:[i," of ",a.length]}),Object(h.jsx)(u.a,{variant:"contained",color:"secondary",tyle:{alignSelf:"left",marginbottom:1},className:"button is-success  is-medium",onClick:function(){j.a.post("../../score",{result:t,userid:l}).then((function(e){console.log(e),window.alert(e.data.message),sessionStorage.removeItem("userId"),window.location="/"}))},children:"Submit"}),Object(h.jsx)(u.a,{className:"button is-info is-large",variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:7},onClick:function(){sessionStorage.removeItem("userId")},href:"/",children:"Go To Homepage"})]})})})},f=function(e){var t=e.onClose,a=e.results,s=e.data;return Object(h.jsxs)("div",{className:"modal is-active",children:[Object(h.jsx)("div",{className:"modal-background",onClick:t}),Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("p",{className:"modal-card-title",children:"Your answers"}),Object(h.jsx)("button",{className:"delete",onClick:t})]}),Object(h.jsx)("section",{className:"modal-card-body content",children:Object(h.jsx)("ul",{children:a.map((function(e,t){return Object(h.jsxs)("li",{className:"mb-6",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:e.q})}),Object(h.jsxs)("p",{className:e.a===s[t].answer?"has-background-success has-text-white p-2":"has-background-danger has-text-white p-2",children:["Your answer: ",e.a]}),e.a!==s[t].answer&&Object(h.jsxs)("p",{className:"has-background-link has-text-white p-2",children:["Correct answer: ",s[t].answer]})]},t)}))})})]})]})},x=a(29),v=function(){var e=Object(s.useState)(1),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(0),i=Object(r.a)(c,2),o=i[0],l=i[1],u=Object(s.useState)([]),d=Object(r.a)(u,2),j=d[0],m=d[1],v=Object(s.useState)(!1),w=Object(r.a)(v,2),p=w[0],N=w[1];Object(s.useEffect)((function(){3===a&&clearInterval(undefined)}),[a]);return Object(h.jsxs)("div",{className:"App",children:[1===a&&Object(h.jsx)(b,{onQuizStart:function(){sessionStorage.getItem("userId")?n(2):(window.alert("please enter details first"),window.location="/")}}),2===a&&Object(h.jsx)(g,{data:x.data[o],onAnswerUpdate:m,numberOfQuestions:x.data.length,activeQuestion:o,onSetActiveQuestion:l,onSetStep:n}),3===a&&Object(h.jsx)(O,{results:j,data:x.data,onReset:function(){l(0),m([]),n(2)},onAnswersCheck:function(){return N(!0)}}),p&&Object(h.jsx)(f,{onClose:function(){return N(!1)},results:j,data:x.data})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};a(88);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),w()}},[[89,1,2]]]);
//# sourceMappingURL=main.85358c82.chunk.js.map