const buildLine = (data, view, svg, line) => {
  if (view === '1D') {
    let preMarket = new Date().setHours(9, 30, 0, 0);
    let afterMarket = new Date().setHours(16, 0, 0, 0);
    svg.append('path')
      .attr('d', line(data.filter(function (d) {
        return d.date <= preMarket;
      })))
      .attr('id', 'pre-market')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('stroke-opacity', '1');
    svg.append('path')
      .attr('d', line(data.filter((d) => {
        return d.date >= preMarket && d.date <= afterMarket;
      })))
      .attr('id', 'market')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('stroke-opacity', '1');
    svg.append('path')
      .attr('d', line(data.filter((d) => {
        return d.date >= afterMarket;
      })))
      .attr('id', 'after-market')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('stroke-opacity', '1');
  } else if (view === '1W') {
    const breakPoints = [31, 62, 93, 124];
    svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i <= breakPoints[0];
      })))
      .attr('id', 'WD1')
      .attr('class', 'weekLine')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[0] && i <= breakPoints[1];
      })))
      .attr('id', 'WD2')
      .attr('class', 'weekLine')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[1] && i <= breakPoints[2];
      })))
      .attr('id', 'WD3')
      .attr('class', 'weekLine')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[2] && i <= breakPoints[3];
      })))
      .attr('id', 'WD4')
      .attr('class', 'weekLine')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[3];
      })))
      .attr('id', 'WD5')
      .attr('class', 'weekLine')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
    } else {
    svg
      .append('path')
      .data([data])
      .style('fill', 'none')
      .attr('id', 'priceChart')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', '1.5')
      .attr('d', line);
  }
}

export default buildLine;
