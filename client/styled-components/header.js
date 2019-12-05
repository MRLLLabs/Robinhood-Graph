import styled from 'styled-components';

const HeaderButton = styled.button`
  background: #0e0d0d;
  font-family: "dinpro-bold";
  font-size: 13px;
  color: white;
  border-radius: 15px
  border: none;
  height: 28px;
`;

const Header = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  font-size: 36px;
  font-family: "dinpro";
`;
const Company = styled.span`
  font-family: din-2014 sans-serif;
`;
const AnalystHold = styled(HeaderButton)`
  background-image: url('/img/analyst-off.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 10% center;
  :hover {
    background: white;
    color: #1b1b1d;
    background-image: url('/img/analyst-on.png');
    background-size: 13px 13px;
    background-repeat: no-repeat;
    background-position: 10% center;
  }
`;
const RobinhoodOwners = styled(HeaderButton)`
  background-image: url('/img/owners-off.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 10% center;
  :hover {
    background: white;
    color: #1b1b1d;
    background-image: url('/img/owners-on.png');
    background-size: 13px 13px;
    background-repeat: no-repeat;
    background-position: 10% center;
  }
`;
const HeaderTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeaderTopButtons = styled.div`
  font-size: 16px;
`;
const Ticker = styled.div.attrs((/* props */) => ({ id: "ticker" }))`
`;
const GainLoss = styled.div`
  font-size: 13px;
`;

export { Header, Company, AnalystHold, RobinhoodOwners, HeaderTopContainer, HeaderTopButtons, Ticker, GainLoss };