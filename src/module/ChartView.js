import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const ChartView = () => {
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://127.0.0.1:5000/api/rules/us_population_data";
        const response = await axios.get(url);
        setChartData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      drawChart();
    }
  }, [chartData]);

  const drawChart = () => {
    const chartContainer = d3.select(chartRef.current);

    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    chartContainer.selectAll('*').remove();

    const svg = chartContainer
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .range([0, width])
      .domain(chartData.map((d) => d.year))
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(chartData, (d) => d.population)]);

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g').call(d3.axisLeft(yScale));

    svg
      .selectAll('.bar')
      .data(chartData)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.year))
      .attr('y', (d) => yScale(d.population))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.population));
  };

  return (
    <div className='pl-[30%] p-[10px] pt-[90px]'>
      <div className='p-[40px]'>
        {chartData.length > 0 ? (
          <div ref={chartRef} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
    </div>
  );
};

export default ChartView;
