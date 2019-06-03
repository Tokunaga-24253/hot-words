import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './css/chart.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    /*
    const bar=document.getElementById("barChart");
    
    const line=document.getElementById("lineChart");

    const pie=document.getElementById("pieChart");

    function handleClickbar(e) {
      e.preventDefault();
      bar.style.display="inline";
      line.style.display="none";
      pie.style.display="none";
    }
    function handleClickline(e) {
      e.preventDefault();
      bar.style.display="none";
      line.style.display="inline";
      pie.style.display="none";
    }
    function handleClickpie(e) {
      e.preventDefault();
      bar.style.display="none";
      line.style.display="none";
      pie.style.display="inline";
    }

    <button className={"barBtn"} onClick={handleClickbar}>Bar</button>
        <button className={"lineBtn"} onClick={handleClickline}>Line</button>
        <button className={"pieBtn"} onClick={handleClickpie}>Pie</button>

*/

    return (
      <div className="chart1">
        <Bar
          id={"barChart"}
          data={this.state.chartData}
          options={{ 
                title:{
                        display:this.props.displayTitle,
                        text:'The hottest words about front-end in '+this.props.location,
                        fontSize:25
                },
                scales:{
                        yAxes: [{
                        ticks: {
                                beginAtZero: true
                        }
                        }]
                },
                legend:{
                        display:false,
                        position:this.props.legendPosition
                } }}
        />

        <Line
          id={"lineChart"}
          data={this.state.chartData}
          options={{ 
                title:{
                        display:this.props.displayTitle,
                        text:'The hottest words about front-end in '+this.props.location,
                        fontSize:25
                },
                scales:{
                        yAxes: [{
                        ticks: {
                                beginAtZero: true
                        }
                        }]
                },
                legend:{
                        display:false,
                        position:this.props.legendPosition
                } }}
        />
        
        <Pie
          id={"pieChart"}
          data={this.state.chartData}
          options={{ 
                title:{
                        display:this.props.displayTitle,
                        text:'The hottest words about front-end in '+this.props.location,
                        fontSize:25
                },
                scales:{
                        yAxes: [{
                        ticks: {
                                beginAtZero: true
                        }
                        }]
                },
                legend:{
                        display:false,
                        position:this.props.legendPosition
                } }}
        />

        
      </div>
    )
  }
}

export default Chart;