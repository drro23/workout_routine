import React from 'react';
import Chart from 'react-apexcharts';

class RoutineDataVisualizer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         routines: [
    //             {
    //                 tableRows: this.props.tableRows,
    //                 date: this.props.date,
    //             }
    //         ]
    //     }
    // }
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "basic-line",
              type: "line",
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
          ]
        };
      }
    render() {
        return (
            <div id="chart" className="block text-white mx-auto border-2 mt-12">
                <Chart 
                    options={this.state.options}
                    series={this.state.series}
                    width="650"/>
            </div>
        );
    }
}

export default RoutineDataVisualizer;