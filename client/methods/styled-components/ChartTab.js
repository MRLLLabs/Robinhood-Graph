import styled from 'styled-components';

const ChartTab = styled.button`
  background: black;
  color: white;
`;

const Tab1D = styled(ChartTab)`
  color: ${props => props.view === '1D' ? '#21ce99' : 'white'};
`;
const Tab1W = styled(ChartTab)`
  color: ${props => props.view === '1W' ? '#21ce99' : 'white'};
`;
const Tab1M = styled(ChartTab)`
  color: ${props => props.view === '1M' ? '#21ce99' : 'white'};
`;
const Tab3M = styled(ChartTab)`
  color: ${props => props.view === '3M' ? '#21ce99' : 'white'};
`;
const Tab1Y = styled(ChartTab)`
  color: ${props => props.view === '1Y' ? '#21ce99' : 'white'};
`;
const Tab5Y = styled(ChartTab)`
  color: ${props => props.view === '5Y' ? '#21ce99' : 'white'};
`;

export { Tab1D , Tab1W, Tab1M, Tab3M, Tab1Y, Tab5Y };