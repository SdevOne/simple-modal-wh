import o from"react";import t from"styled-components";const e=t.div.withConfig({displayName:"Modal__ModalContainer",componentId:"sc-wtzc5r-0"})(["position:absolute;overflow:hidden;"]),r=t.div.withConfig({displayName:"Modal__ModalComp",componentId:"sc-wtzc5r-1"})(["width:100vw;height:100vh;background-color:#00000050;background-color:",";"],(o=>o.bckg)),n=t.div.withConfig({displayName:"Modal__ModalMsg",componentId:"sc-wtzc5r-2"})(["width:25rem;height:10rem;border-radius:1rem;background-color:#009879;background-color:",";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;font-size:1.5rem;color:#fff;color:",";"],(o=>o.txtBckg),(o=>o.color)),a=t.button.withConfig({displayName:"Modal__CrossBtn",componentId:"sc-wtzc5r-3"})(["width:1.6rem;height:1.6rem;position:absolute;top:0;right:0;margin:1rem;border:none;border-radius:1.5rem;&:hover{cursor:pointer;}"]),c=({message:t,background:c,txtBackground:i,txtColor:l,showModal:d,updateModalState:s})=>d?o.createElement(e,null,o.createElement(r,{bckg:c},o.createElement(n,{color:l,txtBckg:i},t,o.createElement(a,{onClick:s},"x")))):null;export{c as Modal};
