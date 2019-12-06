import styled from 'styled-components';

const Tab = styled.button`
  color: white;
  border: none;
  background: none;
  font-size: 13px;
  font-family: "DINPro";
  width: 18px;
  height: 35px;
  align-text: left;
  padding-left:2px;
  margin-right: 18px;
  margin-bottom: -1.5px;
  :hover {
    color: #21ce99;
  }
`;
const ChartTab = styled.span`
  display: flex;
  margin left
  justify-content: space-evenly;
  width: 220px;
`;

const Tab1D = styled(Tab)`
  color: ${props => props.view === '1D' ? '#21ce99' : 'white'};
  border-bottom: ${props => props.view === '1D' ? '1.5px solid #21ce99;' : 'none'};
`;
const Tab1W = styled(Tab)`
  color: ${props => props.view === '1W' ? '#21ce99' : 'white'};
  border-bottom: ${props => props.view === '1W' ? '1.5px solid #21ce99;' : 'none'};
  `;
  const Tab1M = styled(Tab)`
  color: ${props => props.view === '1M' ? '#21ce99' : 'white'};
  border-bottom: ${props => props.view === '1M' ? '1.5px solid #21ce99;' : 'none'};
  `;
  const Tab3M = styled(Tab)`
  color: ${props => props.view === '3M' ? '#21ce99' : 'white'};
  border-bottom: ${props => props.view === '3M' ? '1.5px solid #21ce99;' : 'none'};
  `;
  const Tab1Y = styled(Tab)`
  color: ${props => props.view === '1Y' ? '#21ce99' : 'white'};
  border-bottom: ${props => props.view === '1Y' ? '1.5px solid #21ce99;' : 'none'};
  `;
  const Tab5Y = styled(Tab)`
  color: ${props => props.view === '5Y' ? '#21ce99' : 'white'};
  border-bottom: ${props => props.view === '5Y' ? '1.5px solid #21ce99;' : 'none'};
`;

export { ChartTab, Tab1D , Tab1W, Tab1M, Tab3M, Tab1Y, Tab5Y };