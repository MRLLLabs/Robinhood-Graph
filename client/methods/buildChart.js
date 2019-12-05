import * as d3 from 'd3';
import moment from 'moment';

const timeIntervals = [300000, 3600000, 90000000, 90000000, 86400000, 604800000]; //FIX
const timeIds = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

const buildChart = (prices, view, updateTicker) => {
  d3.selectAll("svg").remove();
  let data = [];
  let time = Date.now();
  let timeInterval = timeIntervals[timeIds.indexOf(view)];
  for (let i = prices.length - 1; i >= 0; i--) {
    data[i] = { date: time, price: prices[i] };
    time -= timeInterval;
  }
  const margin = { top: 50, right: 50, bottom: 20, left: 50 };
  const width = 676;
  const height = 196;
  // add SVG to the page
  const svg = d3
    .select('#stockPriceHistoryChart')
    .append('svg')
    .attr('width', width + margin['left'] + margin['right'])
    .attr('height', height + margin['top'] + margin['bottom'])
    .append('g')
    .attr('transform', `translate(${margin['left']},  ${margin['top']})`);

  // find data range
  const xMin = d3.min(data, d => {
    return d['date'];
  });
  const xMax = d3.max(data, d => {
    return d['date'];
  });
  const yMin = d3.min(data, d => {
    return d['price'];
  });
  const yMax = d3.max(data, d => {
    return d['price'];
  });
  // scales for the charts
  const xScale = d3
    .scaleTime()
    .domain([xMin, xMax])
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([height, 0]);

  const line = d3
    .line()
    .x(d => {
      return xScale(d['date']);
    })
    .y(d => {
      return yScale(d['price']);
    });
  // Append the path and bind data
  svg
    .append('path')
    .data([data])
    .style('fill', 'none')
    .attr('id', 'priceChart')
    .attr('stroke', '#21ce99')
    .attr('stroke-width', '1.5')
    .attr('d', line);


  //HOVER OVER WITH MOUSE FUNCTUIONALITY
  const bisectDate = (data, matcher) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].date > matcher) {
        return i;
      }
    }
    return 1;
  }

  const updateLegend = (currentData) => {
    d3.selectAll('.lineLegend').remove();
    let offset;
    const formatDate = (date) => {
      switch (view) {
        case '1D': offset = 41; return (`${moment(date).format('h:mm a')} ET`);
        case '1W': offset = 65; return (`${moment(date).format('h:mm a, MMM D')} ET`);
        case '1M': offset = 65; return (`${moment(date).format('h:mm a, MMM D')} ET`);
        case '3M': offset = 65; return (`${moment(date).format('h:mm a, MMM D')} ET`);
        case '1Y': offset = 55; return (`${moment(date).format('MMM D, YYYY')} ET`);
        case '5Y': offset = 55; return (`${moment(date).format('MMM D, YYYY')} ET`);
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
      .style('fill', 'white')
      .attr('transform', `translate(${prices.indexOf(currentData.price) * 6.3 - offset},-5)`);
  }

  function generateCrosshair() {
    //returns corresponding value from the domain
    const correspondingDate = xScale.invert(d3.mouse(this)[0]);
    //gets insertion point
    const i = bisectDate(data, correspondingDate.getTime());
    updateTicker(data[i].price);
    const d1 = data[i];
    const currentPoint = d1;

    focus.attr('transform', `translate(${xScale(currentPoint['date'])},     ${yScale(currentPoint['price'])})`);

    focus
      .select('line.y')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', height - height - yScale(currentPoint['price']))
      .attr('y2', height - yScale(currentPoint['price']));
    updateLegend(currentPoint);
  }
  const focus = svg
    .append('g')
    .attr('class', 'focus')
    .attr('fill', '#21ce99')
    .style('display', 'none');
  focus.append('circle').attr('r', 4.5);
  focus.append('line').classed('x', true);
  focus.append('line').classed('y', true);
  svg
    .append('rect')
    .attr('class', 'overlay')
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', () => (focus.style('display', null)))
    .on('mouseout', () => { updateTicker(prices[prices.length - 1]); d3.selectAll('.lineLegend').remove(); focus.style('display', 'none') })
    .on('mousemove', generateCrosshair)
  d3.select('.overlay').style('fill', 'none');
  d3.select('.overlay').style('pointer-events', 'all');
  d3.selectAll('.focus line').style('fill', 'none');
  d3.selectAll('.focus line').style('stroke', '#ababab');
  d3.selectAll('.focus line').style('stroke-width', '1.5px');

}

//Provide mouseover functionality


export default buildChart;
