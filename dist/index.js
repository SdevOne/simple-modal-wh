"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e),a=o(t);const d=a.default.div.withConfig({displayName:"Modal__ModalComp",componentId:"sc-wtzc5r-0"})(["width:100vw;height:100vh;background-color:#00000050;background-color:",";"],(e=>e.bckg)),l=a.default.div.withConfig({displayName:"Modal__ModalMsg",componentId:"sc-wtzc5r-1"})(["width:25rem;height:10rem;border-radius:1rem;background-color:#009879;background-color:",";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;font-size:1.5rem;color:#fff;color:",";"],(e=>e.txtBckg),(e=>e.color)),n=a.default.button.withConfig({displayName:"Modal__CrossBtn",componentId:"sc-wtzc5r-2"})(["width:1.6rem;height:1.6rem;position:absolute;top:0;right:0;margin:1rem;border:none;border-radius:1.5rem;&:hover{cursor:pointer;}"]);exports.Modal=({message:e,background:t,txtBackground:o,txtColor:a,showModal:c,updateModalState:i})=>c?r.default.createElement("div",{id:"modal"},r.default.createElement(d,{bckg:t},r.default.createElement(l,{color:a,txtBckg:o},e,r.default.createElement(n,{onClick:i},"x")))):null;
