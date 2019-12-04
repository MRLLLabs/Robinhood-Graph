import { ChartTab, Tab1D , Tab1W, Tab1M, Tab3M, Tab1Y, Tab5Y } from './ChartTab.js';
import { App } from './App';
import { Expand, Image } from './Expand';
import { Graph, Chart } from './Graph';
import { Header, Company, AnalystHold, RobinhoodOwners, AnalystHoldImage, RobinhoodOwnersImage, Ticker, GainLoss } from './Header';

let Wrapper = {};
Wrapper.App = App;
Wrapper.ChartTab = ChartTab;
Wrapper.Tab1D = Tab1D;
Wrapper.Tab1W = Tab1W;
Wrapper.Tab1M = Tab1M;
Wrapper.Tab3M = Tab3M;
Wrapper.Tab1Y = Tab1Y;
Wrapper.Tab5Y = Tab5Y;

Wrapper.Image = Image;
Wrapper.Expand = Expand;

Wrapper.Graph = Graph;
Wrapper.Chart = Chart;

Wrapper.Header = Header;
Wrapper.Company = Company;
Wrapper.AnalystHold = AnalystHold;
Wrapper.RobinhoodOwners = RobinhoodOwners;
Wrapper.AnalystHoldImage = AnalystHoldImage;
Wrapper.RobinhoodOwnersImage = RobinhoodOwnersImage;
Wrapper.Ticker = Ticker;
Wrapper.GainLoss = GainLoss;

export default Wrapper