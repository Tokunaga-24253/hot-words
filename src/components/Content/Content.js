import React, {Component} from 'react';
import './Content.css';
import Chart from '../Chart/Chart';

class Content extends Component {
    constructor(props){
      super(props);
      this.state = {
        chartData:{}
      }
    }
    
    componentWillMount(props){
      if(this.props.contentType === "en"){
        this.getChartEnglishData();

      }
      else if(this.props.contentType === "cn"){
        this.getChartChineseData();
      }
    }
  
    getChartEnglishData(){
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

    getChartChineseData(){
      // Ajax calls here
      this.setState({
        chartData:{
          labels: [
            '框架',
            '性能',
            '移动',
            '可视化',
            '算法',
            '开源',
            '小程序',
            '工程化',
            '数据结构',
            '全栈',
          ],
          datasets:[
            {
              label:'Number of statistics',
              data:[
                39,
                35,
                34,
                25,
                23,
                23,
                19,
                15,
                14,
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
        <div className="chartArea" >
          <Chart chartData={this.state.chartData} location="Hang Zhou" legendPosition="top" datatype={this.props.contentType}/>
        </div>
      );
    }
  }

export default Content;