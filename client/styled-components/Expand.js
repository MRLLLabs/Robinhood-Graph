import styled from 'styled-components';

const Image = styled.div`
  
`;

const Expand = styled.div`
background-image: url('/img/expand-off.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 10% center;
  :hover {
    color: #21ce99;
    background-image: url('/img/expand-on.png');
    background-size: 13px 13px;
    background-repeat: no-repeat;
    background-position: 10% center;
  }
`;

export { Image, Expand };