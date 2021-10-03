import styled from "styled-components";
export const MainDiv = styled.div`
position: fixed;
width: 9.6rem;
height: 100vh;
left: 0px;
top: 0px;
`;

export const LeftDiv = styled.div`
position: absolute;
left: 0%;
width:1rem;
top: 0%;
bottom: 0%;
background: #ffe01b;
`;
export const RightDiv = styled.div`
position: absolute;
width:8.6rem;
margin-left:1rem;
top: 0%;
bottom: 0%;
border-right: 1px solid rgba(184, 184, 184, 0.8);
> div {
  width:100%;
  height:5.9rem;
  display:flex;
  justify-content:center;
  align-items:center;
  margin:2px 0 2px 0; 
  :nth-child(1) {
    margin-top:10px;
  }
  :nth-child(8){
    position:absolute;
    bottom:1.3rem;
  }
}
`;

export const NameInitial = styled.div`
z-index:100;
position:absolute;
font-family:Source Serif Pro;
font-size:6rem;
bottom:1.3rem;
font-weight:400;
> p{
  margin:.8rem .8rem 0 0;
  font-size:2rem;
}
`;