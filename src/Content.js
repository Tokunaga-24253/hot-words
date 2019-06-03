import React, {Component} from 'react';
import './css/Content.css';
import Chart from './chart';

class Content extends Component {
    constructor(){
      super();
      this.state = {
        chartData:{}
      }
    }
  
    componentWillMount(){
      this.getChartData();
    }
  
    getChartData(){
      // Ajax calls here
      this.setState({
        chartData:{
          labels: [
            'JavaScript',
            'CSS',
            'HTML',
            'vue',
            'React',
            'web',
            'github',
            'HTML5',
            'Node',
            'CSS3',
            'git',
            'NodeJS',
            'Ajax',
          ],
          datasets:[
            {
              label:'Population',
              data:[
                71,
                40,
                37,
                27,
                22,
                19,
                16,
                14,
                13,
                12,
                11,
                11,
                10,
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',

              ]
            }
          ]
        }
      });
    }
  
    render() {
      return (
        <div className="Content">
          <Chart chartData={this.state.chartData} location="Hang Zhou" legendPosition="top"/>
        </div>
      );
    }
  }

export default Content;