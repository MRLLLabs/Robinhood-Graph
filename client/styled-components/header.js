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
const AnalystHoldTooltip = styled.span`
  visibility: hidden;
  width: 149px;
  height: 38px;
  text-size: 13px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
 
  // top: 100%;
  // left: 50%;
  margin-top: 30px;
  margin-left: -118px;
  position: absolute;
  z-index: 1;
`;
const AnalystHold = styled(HeaderButton)`
background-image: url('/img/analyst-off.png');
background-size: 13px 13px;
background-repeat: no-repeat;
background-position: 15% center;
:hover {
  background: white;
  color: #1b1b1d;
  background-image: url('/img/analyst-on.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 15% center;
}
:hover ${AnalystHoldTooltip} {
  visibility: visible;
}
`;
const RobinhoodOwnersTooltip = styled.span`
  visibility: hidden;
  width: 149px;
  height: 38px;
  text-size: 13px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;
 
  // top: 100%;
  // left: 50%;
  margin-top: 30px;
  margin-left: -110px;
  position: absolute;
  z-index: 1;
`;
const RobinhoodOwners = styled(HeaderButton)`
background-image: url('/img/owners-off.png');
background-size: 13px 13px;
background-repeat: no-repeat;
background-position: 17% center;
:hover {
  background: white;
  color: #1b1b1d;
  background-image: url('/img/owners-on.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 17% center;
}
:hover ${RobinhoodOwnersTooltip} {
  visibility: visible;
}
`;
const HeaderTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;
  const HeaderTopButtons = styled.div`
  vertical-align: bottom;
  font-size: 16px;
`;
const Ticker = styled.div.attrs((/* props */) => ({ id: "ticker" }))`
  margin-bottom: 10px;
`;
const GainLoss = styled.div`
  font-size: 13px;
`;
const ViewText = styled.span`
  color: #cbcbcd;
`;

export { Header, Company, AnalystHold, AnalystHoldTooltip, RobinhoodOwners, RobinhoodOwnersTooltip, HeaderTopContainer, HeaderTopButtons, Ticker, GainLoss, ViewText };