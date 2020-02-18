import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

class RoutineDataVisualizer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          options: {
            chart: {
              id: "visualize-charge",
              type: "line",
            },
            xaxis: {
              categories: this.props.visualizeData.categories, // will be an array of dates
            }
          },
          series: [
            {
              name: "max-charge-serie",
              data: this.props.visualizeData.serieData // will be an array of max charges
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

RoutineDataVisualizer.propTypes = {
  visualizeData = PropTypes.array.isRequired,
}

export default RoutineDataVisualizer;