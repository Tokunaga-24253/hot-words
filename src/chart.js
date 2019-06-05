import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
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
        //todo:点击按钮。图表转换
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
                        text:`The most common ${ this.props.datatype === "en" ? "english" : "chinese"} term about front-end in ${this.props.location}`,
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