import styled from "styled-components";
export const MainDiv = styled.div`
position: fixed;
width: 96px;
height: 100vh;
left: 0px;
top: 0px;
`;

export const LeftDiv = styled.div`
position: absolute;
left: 0%;
right: 89.58%;
top: 0%;
bottom: 0%;
background: #ffe01b;
`;
export const RightDiv = styled.div`
position: absolute;
width: 90%;
margin-left: 10%;
top: 0%;
bottom: 0%;
display: flex;
flex-direction:column;
align-items:center;
border-right: 1px solid rgba(184, 184, 184, 0.8);
> div {
  margin-top:4rem;
  :nth-child(1) {
    margin-top:0%;
  }

}
`;

export const NameInitial = styled.div``;