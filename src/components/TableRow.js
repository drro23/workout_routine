import React from "react";
import PropTypes from "prop-types";

class TableRow extends React.Component {
  render() {
    return (
      <tr className="text-black">
        <td>
          <input
            data-rowid={this.props.id}
            className="pr-1 text-right"
            type="text"
            value={this.props.exerciseName}
            onChange={this.props.onExerciseNameChange}
          />
        </td>
        <td>
          <input
            data-rowid={this.props.id}
            className="text-right"
            type="number"
            value={this.props.series}
            onChange={this.props.onSeriesChange}
          />
        </td>
        <td>
          <input
            data-rowid={this.props.id}
            className="text-right"
            type="number"
            value={this.props.reps}
            onChange={this.props.onRepsChange}
          />
        </td>
        <td>
          <input
            data-rowid={this.props.id}
            className="text-right"
            type="number"
            value={this.props.charge}
            onChange={this.props.onChargeChange}
          />
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  exerciseName: PropTypes.string.isRequired,
  series: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  charge: PropTypes.number.isRequired,
  onExerciseNameChange: PropTypes.func.isRequired,
  onSeriesChange: PropTypes.func.isRequired,
  onRepsChange: PropTypes.func.isRequired,
  onChargeChange: PropTypes.func.isRequired
};

export default TableRow;
