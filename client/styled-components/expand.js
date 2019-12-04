import styled from 'styled-components';

const Image = styled.div`
  background: url(/img/expand-off.png) no-repeat;
  &:hover {
    width: 13px;
    background: url("img/expand-on.png") no-repeat; 
  }
`;

const Expand = styled.div`
  
`;

export { Image, Expand };