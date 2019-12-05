import styled from 'styled-components';

const Tab = styled.button`
  background: black;
  color: white;
  border: none;
  background: none;
  :hover {
    color: #21ce99;
  }
`;
const ChartTab = styled.span`

`;

const Tab1D = styled(Tab)`
  color: ${props => props.view === '1D' ? '#21ce99' : 'white'};
`;
const Tab1W = styled(Tab)`
  color: ${props => props.view === '1W' ? '#21ce99' : 'white'};
`;
const Tab1M = styled(Tab)`
  color: ${props => props.view === '1M' ? '#21ce99' : 'white'};
`;
const Tab3M = styled(Tab)`
  color: ${props => props.view === '3M' ? '#21ce99' : 'white'};
`;
const Tab1Y = styled(Tab)`
  color: ${props => props.view === '1Y' ? '#21ce99' : 'white'};
`;
const Tab5Y = styled(Tab)`
  color: ${props => props.view === '5Y' ? '#21ce99' : 'white'};
`;

export { ChartTab, Tab1D , Tab1W, Tab1M, Tab3M, Tab1Y, Tab5Y };