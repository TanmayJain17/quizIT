(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"data":[{"question":"Interacting with people makes me feel good. ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"My goals in life are clear ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"If people are rude to me I just shrug it off ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am confident in what I do ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I can work even when things are disorganized ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I consistently put full time and effort into everything I do?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I prefer achieving my goals than assisting others to achieve their goals?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I would describe myself as an extremely competent person?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I prefer working within a stable rather than flexible environment ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am ambitious ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"It\'s better to get a job done than aim for perfection ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am able to complete tasks as well as, or better than other people ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I am confident in my abilities to complete difficult tasks at work ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I am happy to make speeches in public ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"It is very important for me to achieve my goals ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I approach life in an easy-going manner?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I tend to take on other people\u2019s problems?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"Changes in my work makes me feel uncomfortable?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I almost cross deadline of work when there is work pressure?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I am keen or specific about time management?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I have leadership qualities?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I strive to do the best I can ?","choices":["Agree","Disagree"],"answer":"Agree"}]}')},65:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(8),i=s.n(c),r=s(12),o=(s(65),s(21)),l=s(119),u=s(34),d=s.n(u),h=s(3),g=function(e){var t=e.onQuizStart,s=Object(a.useState)({theEmail:"",theName:"",thePhone:""}),n=Object(r.a)(s,2),c=n[0],i=n[1];return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-content",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(l.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",autoComplete:"off",id:"name",value:c.theNames,onChange:function(e){!function(e){i(Object(o.a)(Object(o.a)({},c),{},{theName:e.target.value}))}(e)}}),Object(h.jsx)(l.a,{style:{marginBottom:25},label:"Enter Your Phone No.",variant:"outlined",autoComplete:"off",name:"phone",type:"number",value:c.Phone,onChange:function(e){!function(e){i(Object(o.a)(Object(o.a)({},c),{},{thePhone:e.target.value}))}(e)}}),Object(h.jsx)(l.a,{style:{marginBottom:25},label:"Enter Your Email ID",variant:"outlined",autoComplete:"off",name:"email",value:c.theEmail,onChange:function(e){!function(e){i(Object(o.a)(Object(o.a)({},c),{},{theEmail:e.target.value}))}(e)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"button is-success is-medium",onClick:function(){i(c),d.a.post("../../details",c).then((function(e){e.data.message?window.alert(e.data.message):(console.log(e.data.id),sessionStorage.setItem("userId",e.data.id),window.alert("You can now start the test!"))}))},children:"Submit"}),Object(h.jsx)("h1",{children:"Predictability Test"}),Object(h.jsx)("p",{children:"Good luck!"}),Object(h.jsx)("button",{className:"button is-info is-large",onClick:t,children:"Start"})]})})})},j=s(54),b=function(e){var t=e.data,s=e.onAnswerUpdate,n=e.numberOfQuestions,c=e.activeQuestion,i=e.onSetActiveQuestion,o=e.onSetStep,l=Object(a.useState)(""),u=Object(r.a)(l,2),d=u[0],g=u[1],b=Object(a.useState)(""),m=Object(r.a)(b,2),f=m[0],O=m[1],w=Object(a.useRef)();Object(a.useEffect)((function(){var e=w.current.querySelector("input:checked");e&&(e.checked=!1)}),[t]);var p=function(e){g(e.target.value),f&&O("")};return Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-content",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h2",{className:"mb-5",children:t.question}),Object(h.jsx)("div",{className:"control",ref:w,children:t.choices.map((function(e,t){return Object(h.jsxs)("label",{className:"radio has-background-light",children:[Object(h.jsx)("input",{type:"radio",name:"answer",value:e,onChange:p}),e]},t)}))}),f&&Object(h.jsx)("div",{className:"has-text-danger",children:f}),Object(h.jsx)("button",{className:"button is-link is-medium is-fullwidth mt-4",onClick:function(e){if(""===d)return O("Please select one option!");s((function(e){return[].concat(Object(j.a)(e),[{q:t.question,a:d}])})),g(""),c<n-1?i(c+1):o(3)},children:"Next"})]})})})},m=s(120),f=function(e){var t=e.results,s=e.data,n=(e.onReset,e.onAnswersCheck),c=(e.time,Object(a.useState)(0)),i=Object(r.a)(c,2),o=i[0],l=i[1],u=sessionStorage.getItem("userId");return Object(a.useEffect)((function(){var e=0;t.forEach((function(t,a){t.a===s[a].answer&&e++})),l(e)}),[]),Object(h.jsx)("div",{className:"card",children:Object(h.jsx)("div",{className:"card-content",children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("h3",{children:"Your results"}),Object(h.jsxs)("p",{children:[o," of ",s.length]}),Object(h.jsx)("button",{className:"button is-info mr-2",onClick:n,children:"Check your answers"}),Object(h.jsx)("button",{className:"button is-success",onClick:function(){d.a.post("../../score",{result:t,userid:u}).then((function(e){console.log(e),window.alert(e.data.message),sessionStorage.removeItem("userId"),window.location="/"}))},children:"Submit"}),Object(h.jsx)(m.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},onClick:function(){sessionStorage.removeItem("userId")},href:"/",children:"Go to homepage"})]})})})},O=function(e){var t=e.onClose,s=e.results,a=e.data;return Object(h.jsxs)("div",{className:"modal is-active",children:[Object(h.jsx)("div",{className:"modal-background",onClick:t}),Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("p",{className:"modal-card-title",children:"Your answers"}),Object(h.jsx)("button",{className:"delete",onClick:t})]}),Object(h.jsx)("section",{className:"modal-card-body content",children:Object(h.jsx)("ul",{children:s.map((function(e,t){return Object(h.jsxs)("li",{className:"mb-6",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:e.q})}),Object(h.jsxs)("p",{className:e.a===a[t].answer?"has-background-success has-text-white p-2":"has-background-danger has-text-white p-2",children:["Your answer: ",e.a]}),e.a!==a[t].answer&&Object(h.jsxs)("p",{className:"has-background-link has-text-white p-2",children:["Correct answer: ",a[t].answer]})]},t)}))})})]})]})},w=s(29),p=function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(0),i=Object(r.a)(c,2),o=i[0],l=i[1],u=Object(a.useState)([]),d=Object(r.a)(u,2),j=d[0],m=d[1],p=Object(a.useState)(!1),x=Object(r.a)(p,2),v=x[0],A=x[1];Object(a.useEffect)((function(){3===s&&clearInterval(undefined)}),[s]);return Object(h.jsxs)("div",{className:"App",children:[1===s&&Object(h.jsx)(g,{onQuizStart:function(){sessionStorage.getItem("userId")?n(2):(window.alert("please enter details first"),window.location="/")}}),2===s&&Object(h.jsx)(b,{data:w.data[o],onAnswerUpdate:m,numberOfQuestions:w.data.length,activeQuestion:o,onSetActiveQuestion:l,onSetStep:n}),3===s&&Object(h.jsx)(f,{results:j,data:w.data,onReset:function(){l(0),m([]),n(2)},onAnswersCheck:function(){return A(!0)}}),v&&Object(h.jsx)(O,{onClose:function(){return A(!1)},results:j,data:w.data})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,122)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};s(88);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),x()}},[[89,1,2]]]);
//# sourceMappingURL=main.abacab67.chunk.js.map