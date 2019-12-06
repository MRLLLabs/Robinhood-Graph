import styled from 'styled-components';

const HeaderButton = styled.button`
  background: #0e0d0d;
  font-size: 13px;
  font-family: "DINPro";
  color: white;
  border-radius: 15px
  border: none;
  height: 28px;
`;
const Header = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  font-size: 36px;
`;
const Company = styled.span`
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
  font-family: "DINPro-Light";
  font-weight: 650;
`;
const GainLoss = styled.div`
  font-size: 13px;
  font-family: "DINPro"
  `;
const ViewText = styled.span`
  font-size: 13px;
  color: #8c8c8e;
  font-family: "DINPro-Light"
`;

export { Header, Company, AnalystHold, AnalystHoldTooltip, RobinhoodOwners, RobinhoodOwnersTooltip, HeaderTopContainer, HeaderTopButtons, Ticker, GainLoss, ViewText };