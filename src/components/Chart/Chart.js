import React, {Component} from 'react';
import {Bar,Pie,Line} from 'react-chartjs-2';
import './Chart.css';

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
    

    function handleClickbar(e) {
      e.preventDefault();

      const bars = document.querySelectorAll('#bar');
      for(let i=0;i<bars.length;i++){
        if(bars[i].classList.contains('xiaoshi')){
          bars[i].classList.remove('xiaoshi');
        }
      }

      const pies = document.querySelectorAll('#pie');
      for(let i=0;i<pies.length;i++){
        if(!pies[i].classList.contains('xiaoshi')){
          pies[i].classList.add('xiaoshi');
        }
      }

      
      const lines = document.querySelectorAll('#line');
      for(let i=0;i<lines.length;i++){
        if(!lines[i].classList.contains('xiaoshi')){
          lines[i].classList.add('xiaoshi');
        }
      }

    }


    function handleClickpie(e) {
      e.preventDefault();
      
      const pies = document.querySelectorAll('#pie');
      for(let i=0;i<pies.length;i++){
        if(pies[i].classList.contains('xiaoshi')){
          pies[i].classList.remove('xiaoshi');
        }
      }

      const bars = document.querySelectorAll('#bar');
      for(let j=0;j<bars.length;j++){
        if(!bars[j].classList.contains('xiaoshi')){
          bars[j].classList.add('xiaoshi');
        }
      }

      const lines = document.querySelectorAll('#line');
      for(let i=0;i<lines.length;i++){
        if(!lines[i].classList.contains('xiaoshi')){
          lines[i].classList.add('xiaoshi');
        }
      }

    }


    function handleClickline(e) {
      e.preventDefault();
      
      const lines = document.querySelectorAll('#line');
      for(let i=0;i<lines.length;i++){
        if(lines[i].classList.contains('xiaoshi')){
          lines[i].classList.remove('xiaoshi');
        }
      }

      const bars = document.querySelectorAll('#bar');
      for(let j=0;j<bars.length;j++){
        if(!bars[j].classList.contains('xiaoshi')){
          bars[j].classList.add('xiaoshi');
        }
      }

      
      const pies = document.querySelectorAll('#pie');
      for(let i=0;i<pies.length;i++){
        if(!pies[i].classList.contains('xiaoshi')){
          pies[i].classList.add('xiaoshi');
        }
      }
      
    }


    return (
      <div id="Container">
        
        <div id={"bar"} >
          <Bar
            id={"barChart"}
            data={this.state.chartData}
            
            options={{
                  maintainAspectRatio: false,
                  title:{
                          display:this.props.displayTitle,
                          text:`The most common ${ this.props.datatype === "en" ? "english" : "chinese"} term about front-end in ${this.props.location}`,
                          fontSize:20
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

        
        <div id="pie" className="xiaoshi">
          <Pie

            id={"pieChart"}
            data={this.state.chartData}
            
            options={{
                  maintainAspectRatio: false,
                  title:{
                          display:this.props.displayTitle,
                          text:`The most common ${ this.props.datatype === "en" ? "english" : "chinese"} term about front-end in ${this.props.location}`,
                          fontSize:20
                  },
                  
                  legend:{
                          display:false,
                          position:this.props.legendPosition
                  } }}
          />

        </div>

        <div id="line" className="xiaoshi">
          <Line

            id={"lineChart"}
            data={this.state.chartData}
            
            options={{
                  maintainAspectRatio: false,
                  title:{
                          display:this.props.displayTitle,
                          text:`The most common ${ this.props.datatype === "en" ? "english" : "chinese"} term about front-end in ${this.props.location}`,
                          fontSize:20
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

        <div className="btnContainer"> 
          <button className={"barBtn"} onClick={handleClickbar}>Bar</button>
          <button className={"pieBtn"} onClick={handleClickpie}>Pie</button>
          <button className={"lineBtn"} onClick={handleClickline}>Line</button>
        </div>
      

      </div>

    )
  }
}

export default Chart;