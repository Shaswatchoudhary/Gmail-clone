"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[123],{2123:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var o=n(5043),a=n(4535),i=n(2314),s=n(6446),r=n(5263),l=n(6611),d=n(3287),c=n(9484),p=n(746),m=n(4279),x=n(7871),A=n(8490),h=n(703),g=n(7444),u=n(579);const f=(0,a.Ay)(i.A)`
    background: #f5F5F5;
    box-shadow: none;
`,j=(0,a.Ay)(s.A)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`,E=(0,a.Ay)(s.A)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`,S=e=>{let{toggleDrawer:t}=e;return(0,u.jsx)(f,{position:"static",children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(d.A,{color:"action",onClick:t}),(0,u.jsx)("img",{src:g._3,alt:"logo",style:{width:110,marginLeft:15}}),(0,u.jsxs)(j,{children:[(0,u.jsx)(c.A,{color:"action"}),(0,u.jsx)(l.Ay,{}),(0,u.jsx)(p.A,{color:"action"})]}),(0,u.jsxs)(E,{children:[(0,u.jsx)(m.A,{color:"action"}),(0,u.jsx)(x.A,{color:"action"}),(0,u.jsx)(A.A,{color:"action"}),(0,u.jsx)(h.A,{color:"action"})]})]})})};var y=n(4109),_=n(1906),w=n(5721),b=n(1322),P=n(1485),v=n(5865),C=n(3184),T=n(3438),D=n(349),R=n(9469),O=n(3697);const k={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},F=(0,a.Ay)(s.A)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`,M=(0,a.Ay)(s.A)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`,L=(0,a.Ay)(s.A)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`,B=(0,a.Ay)(_.A)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`,I=e=>{let{open:t,setOpenDrawer:n}=e;const[a,i]=(0,o.useState)({}),s=(0,R.A)(O.y.saveSentEmails),r=(0,R.A)(O.y.saveDraftEmails),d={Username:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAIL_HOST:"smtp.elasticemail.com",REACT_APP_EMAIL_USERNAME:"smilejack42@gmail.com",REACT_APP_EMAIL_PASSWORD:"416D76FCFE69BFC7866E860058AB0B285870",REACT_APP_EMAIL_PORT:"2525"}.REACT_APP_USERNAME,Password:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAIL_HOST:"smtp.elasticemail.com",REACT_APP_EMAIL_USERNAME:"smilejack42@gmail.com",REACT_APP_EMAIL_PASSWORD:"416D76FCFE69BFC7866E860058AB0B285870",REACT_APP_EMAIL_PORT:"2525"}.REACT_APP_PASSWORD,Host:"smtp.elasticemail.com",Port:2525},c=e=>{i({...a,[e.target.name]:e.target.value})};return(0,u.jsxs)(P.A,{open:t,PaperProps:{sx:k},children:[(0,u.jsxs)(F,{children:[(0,u.jsx)(v.A,{children:"New Message"}),(0,u.jsx)(T.A,{fontSize:"small",onClick:e=>(e=>{e.preventDefault();const t={to:a.to,from:"codeforinterview03@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"drafts"};r.call(t),r.error||(n(!1),i({}))})(e)})]}),(0,u.jsxs)(M,{children:[(0,u.jsx)(l.Ay,{placeholder:"Recipients",name:"to",onChange:e=>c(e),value:a.to}),(0,u.jsx)(l.Ay,{placeholder:"Subject",name:"subject",onChange:e=>c(e),value:a.subject})]}),(0,u.jsx)(C.A,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:e=>c(e),value:a.body}),(0,u.jsxs)(L,{children:[(0,u.jsx)(B,{onClick:e=>(async e=>{e.preventDefault(),window.Email&&window.Email.send({...d,To:a.to,From:"codeforinterview03@gmail.com",Subject:a.subject,Body:a.body}).then((e=>alert(e)));const t={to:a.to,from:"codeforinterview03@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Code for Interview",starred:!1,type:"sent"};s.call(t),s.error||(n(!1),i({}))})(e),children:"Send"}),(0,u.jsx)(D.A,{onClick:()=>n(!1)})]})]})};var H=n(9297),W=n(1418),N=n(4252),U=n(1084),J=n(5837),K=n(5069),z=n(7289);const $=[{name:"inbox",title:"Inbox",icon:W.A,path:H.J.emails.path},{name:"starred",title:"Starred",icon:N.A,path:H.J.emails.path},{name:"sent",title:"Sent",icon:U.A,path:H.J.emails.path},{name:"drafts",title:"Drafts",icon:J.A,path:H.J.emails.path},{name:"bin",title:"Bin",icon:K.A,path:H.J.emails.path},{name:"allmail",title:"All Mail",icon:z.A,path:H.J.emails.path}];var V=n(286),G=n(3216),q=n(5475);const Q=(0,a.Ay)(s.A)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`,X=(0,a.Ay)(_.A)`
    background: #c2e7ff;
    color: #001d35;
    border-radius: 16px;
    padding: 15px;
    min-width: 140px;
    text-transform: none;
`,Y=()=>{const[e,t]=(0,o.useState)(!1),{type:n}=(0,G.g)();return(0,u.jsxs)(Q,{children:[(0,u.jsxs)(X,{onClick:()=>{t(!0)},children:[(0,u.jsx)(V.A,{style:{marginRight:10}}),"Compose"]}),(0,u.jsx)(w.A,{children:$.map((e=>(0,u.jsx)(q.k2,{to:`${H.J.emails.path}/${e.name}`,children:(0,u.jsxs)(b.Ay,{style:n===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,u.jsx)(e.icon,{fontSize:"small"}),e.title]})},e.name)))}),(0,u.jsx)(I,{open:e,setOpenDrawer:t})]})},Z=(0,a.Ay)(y.Ay)`
    margin-top: 54px;
`,ee=e=>{let{toggleDrawer:t,openDrawer:n}=e;return(0,u.jsx)(Z,{anchor:"left",open:n,onClose:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,u.jsx)(Y,{})})};var te=n(2912);const ne=(0,a.Ay)(s.A)`
    display: flex;
`,oe=()=>{const[e,t]=(0,o.useState)(!0),n=()=>{t((e=>!e))};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(S,{toggleDrawer:n}),(0,u.jsxs)(ne,{children:[(0,u.jsx)(ee,{toggleDrawer:n,openDrawer:e}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(te.A,{}),children:(0,u.jsx)(G.sv,{context:{openDrawer:e}})})]})]})}},3697:(e,t,n)=>{n.d(t,{y:()=>o});const o={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}},9469:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(5043),a=n(6213);const i=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const{params:o,urlParams:i,...s}=t;return await(0,a.A)({method:e.method,url:`/${e.endpoint}/${n}`,data:t})},s=e=>{const[t,n]=(0,o.useState)(null),[a,s]=(0,o.useState)(""),[r,l]=(0,o.useState)(!1);return{call:async function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";n(null),l(!0),s("");try{let a=await i(e,t,o);n(a.data)}catch(a){s(a.message)}finally{l(!1)}},response:t,error:a,isLoading:r}}}}]);
//# sourceMappingURL=123.fce2996a.chunk.js.map