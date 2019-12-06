import styled from 'styled-components';

const Image = styled.div`
  
`;

const Expand = styled.div`
background-image: url('/img/expand-off.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 90% center;
  height: 35px;
  margin-bottom: -2px;
  line-height: 35px;
  font-family: "DINPro";
  :hover {
    color: #21ce99;
    background-image: url('/img/expand-on.png');
    background-size: 13px 13px;
    background-repeat: no-repeat;
    background-position: 90% center;
  }
`;

export { Image, Expand };