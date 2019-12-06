import * as d3 from 'd3';
import moment from 'moment';
import buildLine from './buildLine';
import setTimeIntervals from './setTimeIntervals'

const bisectDate = (data, matcher) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].date > matcher) {
      return i;
    }
  }
  return 1;
}

const updateLegend = (currentData, prices, svg, view) => {
  d3.selectAll('.lineLegend').remove();
  let offset, xRate;
  const formatDate = (date) => {
    switch (view) {
      case '1D': offset = 33; xRate = 6.315; return (`${moment(date).format('h:mm a')} ET`);
      case '1W': offset = 56; xRate = 4.38; return (`${moment(date).format('h:mm a, MMM D')} ET`);
      case '1M': offset = 56; xRate = 5.68; return (`${moment(date).format('h:mm a, MMM D')} ET`);
      case '3M': offset = 56; xRate = 1.88; return (`${moment(date).format('h:mm a, MMM D')} ET`);
      case '1Y': offset = 47; xRate = 2.71; return (`${moment(date).format('MMM D, YYYY')} ET`);
      case '5Y': offset = 47; xRate = 2.605; return (`${moment(date).format('MMM D, YYYY')} ET`);
    }
  }

  const lineLegend = svg
    .selectAll('.lineLegend')
    .data(['date'])
    .enter()
    .append('g')
    .attr('class', 'lineLegend')
    .attr('transform', (d, i) => {
      return `translate(0, ${i * 20})`;
    });
  lineLegend
    .append('text')
    .text(d => {
      if (d === 'date') {
        return formatDate(currentData[d]);
      }
    })
    .style('fill', '#cbcbcd')
    .attr('transform', `translate(${prices.indexOf(currentData.price) * xRate - offset},-5)`);
}

const buildGreyLine = (data, view, svg, xScale, yScale) => {
  if (view === '1D') {
    let ticks = [];
    for (let i = 0; i < data.length; i++) { ticks.push({date: data[i].date, price: data[0].price }); }
    svg.selectAll('circle')
      .data(ticks)
      .enter()
      .append('circle')
        // .attr('color', ()=> {debugger})
        .attr('cx', (d) => { return xScale(d['date']); })
        .attr('cy', (d) => { return yScale(d['price']); })
        .attr('r', '0.7')
        .attr('fill', 'grey')
        .attr('z-index', '10');
  } else {
    d3.selectAll('circle').remove();
  }
}

const updateHover = (date, view) => {
  if (view === '1D') {
    let preMarket = new Date().setHours(9, 30, 0, 0);
    let afterMarket = new Date().setHours(16, 0, 0, 0);
    d3.select('#pre-market')
      .attr('stroke-opacity', '.5');
    d3.select('#market')
      .attr('stroke-opacity', '.5');
    d3.select('#after-market')
      .attr('stroke-opacity', '.5');
    if (date <= preMarket) {
      d3.select('#pre-market')
        .attr('stroke-opacity', '1');
    }
    if (date >= preMarket && date <= afterMarket) {
      d3.select('#market')
        .attr('stroke-opacity', '1');
    }
    if (date >= afterMarket) {
      d3.select('#after-market')
        .attr('stroke-opacity', '1');
    }
  }
}

const hoverOutShade = (view) => {
  if (view === '1D') {
    d3.select('#pre-market')
      .attr('stroke-opacity', '.5');
    d3.select('#market')
      .attr('stroke-opacity', '1');
    d3.select('#after-market')
      .attr('stroke-opacity', '.5');
  }
}

const buildChart = (prices, view, updateTicker, name) => {
  //do setup
  d3.selectAll('svg').remove();
  let data = [];
  let [mostRecentDate, mostRecentPrice] = setTimeIntervals(data, view, prices);
  const margin = { top: 50, right: 60, bottom: 20, left: 60 };
  const width = 676;
  const height = 196;
  const xMin = d3.min(data, d => { return d['date']; });
  const xMax = d3.max(data, d => { return d['date']; });
  const yMin = d3.min(data, d => { return d['price']; });
  const yMax = d3.max(data, d => { return d['price']; });
  const xScale = d3
    .scaleTime()
    .domain([xMin, xMax])
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([height, 0]);
  //append svg to page and set attributes
  const svg = d3
    .select('#stockPriceHistoryChart')
    .append('svg')
    .attr('width', width + margin['left'] + margin['right'])
    .attr('height', height + margin['top'] + margin['bottom'])
    .append('g')
    .attr('transform', `translate(${margin['left']},  ${margin['top']})`);
  const line = d3
    .line()
    .x(d => { return xScale(d['date']); })
    .y(d => { return yScale(d['price']); });

  //Divide into sections and build line
  buildLine(data, view, svg, line);

  //Append grey axis overlay
  buildGreyLine(data, view, svg, xScale, yScale);

  function generateCrosshair() {
    const correspondingDate = xScale.invert(d3.mouse(this)[0]);
    const i = bisectDate(data, correspondingDate.getTime());
    let currentPoint;
    if (data[i].price) {
      updateTicker(data[i].price, '');
      currentPoint = data[i];
    } else {
      currentPoint = { date: mostRecentDate, price: mostRecentPrice };
    }
    updateHover(currentPoint['date'], view)
    focus.attr('transform', `translate(${xScale(currentPoint['date'])},${yScale(currentPoint['price'])})`);

    focus
      .select('line.y')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', height - height - yScale(currentPoint['price']))
      .attr('y2', height - yScale(currentPoint['price']))
      updateLegend(currentPoint, prices, svg, view);
    }
    const focus = svg
    .append('g')
    .attr('class', 'focus')
    .attr('fill', '#21ce99')
    .attr('stroke', '#1b1b1d')
    .attr('stroke-width', '2')
    .style('display', 'none');
    focus.append('line').classed('y', true);
    focus.append('circle').attr('r', 4.5);
  //legend of date
  svg
    .append('rect')
    .attr('class', 'overlay')
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', () => (focus.style('display', null)))
    .on('mouseout', () => {
      updateTicker(mostRecentPrice);
      hoverOutShade(view);
      d3.selectAll('.lineLegend').remove();
      focus.style('display', 'none')
    })
    .on('mousemove', generateCrosshair)
  d3.select('.overlay')
    .style('fill', 'none')
    .style('pointer-events', 'all');
  d3.selectAll('.focus line')
    .style('z-index', '-1')
    .style('fill', 'none')
    .style('stroke', '#ababab')
    .style('stroke-width', '1.5px');
  return { mostRecentDate, mostRecentPrice };
}

export default buildChart;
