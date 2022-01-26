"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(e),l=o(t);const n=l.default.div`
  display: block;
  height: 100vh;
  overflow: hidden;
  background-color: #00000025;
  background-color: ${e=>e.bckg};
`,a=l.default.div`
  width: 40rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: #009879;
  background-color: ${e=>e.txtBckg};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: ${e=>e.color};
`,d=l.default.button`
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  border: none;
  border-radius: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;exports.Modal=({message:e,background:t,txtBackground:o,txtColor:l})=>r.default.createElement("div",{id:"modalElement"},r.default.createElement(n,{bckg:t},r.default.createElement(a,{color:l,txtBckg:o},e,r.default.createElement(d,{onClick:()=>{document.getElementById("modalElement").style.display="none"}},"x"))));
