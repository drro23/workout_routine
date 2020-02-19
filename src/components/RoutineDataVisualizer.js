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
              categories: this.props.data.categories, // will be an array of dates
            }
          },
          series: [
            {
              name: "max-charge-serie",
              data: this.props.data.serieData // will be an array of max charges
            }
          ]
        };
      }

      shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data !== this.props.data || this.state.data !== nextState.data) {
          this.setState(
            {
              categories: nextProps.data.categories,
              series: nextProps.serieData,
            });
          return true;
        }
        return false;
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
  data: PropTypes.object.isRequired,
}

export default RoutineDataVisualizer;