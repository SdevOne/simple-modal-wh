import e from"react";import o from"styled-components";const t=o.div`
  display: block;
  height: 100vh;
  overflow: hidden;
  background-color: #00000025;
  background-color: ${e=>e.bckg};
`,r=o.div`
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
`,n=o.button`
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
`,c=({message:o,background:c,txtBackground:l,txtColor:i})=>e.createElement("div",{id:"modalElement"},e.createElement(t,{bckg:c},e.createElement(r,{color:i,txtBckg:l},o,e.createElement(n,{onClick:()=>{document.getElementById("modalElement").style.display="none"}},"x"))));export{c as Modal};
