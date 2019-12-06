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
      .attr('stroke-opacity', '.5');
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
      .attr('stroke-opacity', '.5');
  } else if (view === '1W') {
    const breakPoints = [31, 62, 93, 124];
    svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i <= breakPoints[0];
      })))
      .attr('id', 'W1D1')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
    svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[0] && i <= breakPoints[1];
      })))
      .attr('id', 'W1D2')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
    svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[1] && i <= breakPoints[2];
      })))
      .attr('id', 'W1D3')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
    svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[2] && i <= breakPoints[3];
      })))
      .attr('id', 'W1D4')
      .attr('stroke', '#21ce99')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
    svg.append('path')
      .attr('d', line(data.filter(function (d, i) {
        return i >= breakPoints[3];
      })))
      .attr('id', 'W1D5')
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
