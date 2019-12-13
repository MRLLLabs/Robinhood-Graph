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
const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 18px;
`;
const Tags = styled.button`
  font-family: "DINPro";
  font-size: 13px;
  background: #182b27;
  color: #21ce99;
  border-radius: 13px;
  border-color: #182b27;
  height: 28px;
  vertical-align: middle;
  margin-right: 20px;
  :hover {
    color: #1b1b1d;
    background: #21ce99;
  }    
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
  margin-top: 30px;
  margin-left: -118px;
  position: absolute;
  z-index: 1;
`;
const AnalystHold = styled(HeaderButton)`
  background-image: url('/graph/img/analyst-off.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 15% center;
  :hover {
    background: white;
    color: #1b1b1d;
    background-image: url('/graph/img/analyst-on.png');
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
  margin-top: 30px;
  margin-left: -110px;
  position: absolute;
  z-index: 1;
`;
const RobinhoodOwners = styled(HeaderButton)`
  background-image: url('/graph/img/owners-off.png');
  background-size: 13px 13px;
  background-repeat: no-repeat;
  background-position: 17% center;
  :hover {
    background: white;
    color: #1b1b1d;
    background-image: url('/graph/img/owners-on.png');
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
  focus: {
    outline:none !important;
  }
`;
const Ticker = styled.div.attrs((/* props */) => ({ id: "odometer" }))`
  font-family: "DINPro-Light";
  line-height: 26px;
  margin-bottom: none;
  font-weight: 650;
  height: 40px !important;
  font-size: 30px;
`;
const GainLoss = styled.div`
  font-size: 13px;
  font-family: "DINPro"
  padding-top: 30px;
  width: 280px;
  `;
const ViewText = styled.span`
  font-size: 13px;
  color: #8c8c8e;
  font-family: "DINPro-Light"
  height: 15px;
`;

export { Header, Company, Tags, TagsContainer, AnalystHold, AnalystHoldTooltip, RobinhoodOwners, RobinhoodOwnersTooltip, HeaderTopContainer, HeaderTopButtons, Ticker, GainLoss, ViewText };