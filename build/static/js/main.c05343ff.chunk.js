(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{31:function(e){e.exports=JSON.parse('{"data":[{"question":"Interacting with people makes me feel good. ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"My goals in life are clear ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"If people are rude to me I just shrug it off ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am confident in what I do ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I can work even when things are disorganized ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I consistently put full time and effort into everything I do?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I prefer achieving my goals than assisting others to achieve their goals?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I would describe myself as an extremely competent person?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I prefer working within a stable rather than flexible environment ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am ambitious ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"It\'s better to get a job done than aim for perfection ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I am able to complete tasks as well as, or better than other people ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I am confident in my abilities to complete difficult tasks at work ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I am happy to make speeches in public ?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"It is very important for me to achieve my goals ?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I approach life in an easy-going manner?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I tend to take on other people\u2019s problems?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"Changes in my work makes me feel uncomfortable?","choices":["Agree","Disagree"],"answer":"Disagree"},{"question":"I almost cross deadline of work when there is work pressure?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I am keen or specific about time management?","choices":["Agree","Disagree"],"answer":"Agree"},{"question":"I have leadership qualities?","choices":["Agree","Disagree"],"answer":"Agree"}]}')},70:function(e,t,s){},94:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(9),r=s.n(c),i=s(12),o=(s(70),s(128)),l=s(129),u=s(130),d=s(36),h=s.n(d),j=s(4),g=function(e){var t=e.onQuizStart,s=Object(a.useState)(" "),n=Object(i.a)(s,2),c=n[0],r=n[1],d=Object(a.useState)(" "),g=Object(i.a)(d,2),b=g[0],m=g[1],f=Object(a.useState)("0987654321"),O=Object(i.a)(f,2),w=O[0],p=O[1],x=Object(a.useState)({}),v=Object(i.a)(x,2),A=v[0],k=v[1];return Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-content",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(o.a,{style:{marginBottom:25},label:"Enter Your Name",variant:"outlined",autoComplete:"off",value:c,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)(o.a,{style:{marginBottom:25},label:"Enter Your Phone No.",variant:"outlined",autoComplete:"off",value:w,onChange:function(e){return p(e.target.value)}}),Object(j.jsx)(o.a,{style:{marginBottom:25},label:"Enter Your Email ID",variant:"outlined",autoComplete:"off",value:b,onChange:function(e){return m(e.target.value)}}),Object(j.jsx)(u.a,{control:Object(j.jsx)(l.a,{name:"checkedA"}),onClick:function(e){k({data:{theName:c,thePhone:w,emailId:b}})},label:"I accept the terms and conditions."}),Object(j.jsx)("button",{className:"button is-success is-medium",onClick:function(){k(A),h.a.post("../../details",A).then((function(e){e.data.message?window.alert(e.data.message):(console.log(e.data.id),sessionStorage.setItem("userId",e.data.id),window.alert("You can now start the test!"))}))},children:"Submit"}),Object(j.jsx)("h1",{children:"Start the quiz"}),Object(j.jsx)("p",{children:"Good luck!"}),Object(j.jsx)("button",{className:"button is-info is-large",onClick:t,children:"Predictability Test"})]})})})},b=s(57),m=function(e){var t=e.data,s=e.onAnswerUpdate,n=e.numberOfQuestions,c=e.activeQuestion,r=e.onSetActiveQuestion,o=e.onSetStep,l=Object(a.useState)(""),u=Object(i.a)(l,2),d=u[0],h=u[1],g=Object(a.useState)(""),m=Object(i.a)(g,2),f=m[0],O=m[1],w=Object(a.useRef)();Object(a.useEffect)((function(){var e=w.current.querySelector("input:checked");e&&(e.checked=!1)}),[t]);var p=function(e){h(e.target.value),f&&O("")};return Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-content",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{className:"mb-5",children:t.question}),Object(j.jsx)("div",{className:"control",ref:w,children:t.choices.map((function(e,t){return Object(j.jsxs)("label",{className:"radio has-background-light",children:[Object(j.jsx)("input",{type:"radio",name:"answer",value:e,onChange:p}),e]},t)}))}),f&&Object(j.jsx)("div",{className:"has-text-danger",children:f}),Object(j.jsx)("button",{className:"button is-link is-medium is-fullwidth mt-4",onClick:function(e){if(""===d)return O("Please select one option!");s((function(e){return[].concat(Object(b.a)(e),[{q:t.question,a:d}])})),h(""),c<n-1?r(c+1):o(3)},children:"Next"})]})})})},f=s(127),O=function(e){var t=e.results,s=e.data,n=(e.onReset,e.onAnswersCheck),c=(e.time,Object(a.useState)(0)),r=Object(i.a)(c,2),o=r[0],l=r[1],u=sessionStorage.getItem("userId");return Object(a.useEffect)((function(){var e=0;t.forEach((function(t,a){t.a===s[a].answer&&e++})),l(e)}),[]),Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-content",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h3",{children:"Your results"}),Object(j.jsxs)("p",{children:[o," of ",s.length]}),Object(j.jsx)("button",{className:"button is-info mr-2",onClick:n,children:"Check your answers"}),Object(j.jsx)("button",{className:"button is-success",onClick:function(){h.a.post("../../score",{result:t,userid:u}).then((function(e){console.log(e),window.alert(e.data.message),sessionStorage.removeItem("userId"),window.location="/"}))},children:"Submit"}),Object(j.jsx)(f.a,{variant:"contained",color:"secondary",size:"large",style:{alignSelf:"center",marginTop:20},onClick:function(){sessionStorage.removeItem("userId")},href:"/",children:"Go to homepage"})]})})})},w=function(e){var t=e.onClose,s=e.results,a=e.data;return Object(j.jsxs)("div",{className:"modal is-active",children:[Object(j.jsx)("div",{className:"modal-background",onClick:t}),Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("p",{className:"modal-card-title",children:"Your answers"}),Object(j.jsx)("button",{className:"delete",onClick:t})]}),Object(j.jsx)("section",{className:"modal-card-body content",children:Object(j.jsx)("ul",{children:s.map((function(e,t){return Object(j.jsxs)("li",{className:"mb-6",children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:e.q})}),Object(j.jsxs)("p",{className:e.a===a[t].answer?"has-background-success has-text-white p-2":"has-background-danger has-text-white p-2",children:["Your answer: ",e.a]}),e.a!==a[t].answer&&Object(j.jsxs)("p",{className:"has-background-link has-text-white p-2",children:["Correct answer: ",a[t].answer]})]},t)}))})})]})]})},p=s(31),x=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(0),r=Object(i.a)(c,2),o=r[0],l=r[1],u=Object(a.useState)([]),d=Object(i.a)(u,2),h=d[0],b=d[1],f=Object(a.useState)(!1),x=Object(i.a)(f,2),v=x[0],A=x[1];Object(a.useEffect)((function(){3===s&&clearInterval(undefined)}),[s]);return Object(j.jsxs)("div",{className:"App",children:[1===s&&Object(j.jsx)(g,{onQuizStart:function(){sessionStorage.getItem("userId")?n(2):(window.alert("please enter details first"),window.location="/")}}),2===s&&Object(j.jsx)(m,{data:p.data[o],onAnswerUpdate:b,numberOfQuestions:p.data.length,activeQuestion:o,onSetActiveQuestion:l,onSetStep:n}),3===s&&Object(j.jsx)(O,{results:h,data:p.data,onReset:function(){l(0),b([]),n(2)},onAnswersCheck:function(){return A(!0)}}),v&&Object(j.jsx)(w,{onClose:function(){return A(!1)},results:h,data:p.data})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,132)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};s(93);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()}},[[94,1,2]]]);
//# sourceMappingURL=main.c05343ff.chunk.js.map