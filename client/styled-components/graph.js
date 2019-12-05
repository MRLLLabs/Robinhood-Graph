import styled from 'styled-components';

const Graph = styled.div`

`;

const Chart = styled.div.attrs((props) => {
  id: "stockPriceHistoryChart"
})`

`;
const GraphBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`;


export { Graph, Chart, GraphBottomContainer };