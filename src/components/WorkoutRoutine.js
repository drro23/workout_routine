import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { DatePicker }from "antd";
import "antd/dist/antd.css";


class WorkoutRoutine extends React.Component {
    // Arrow fx for binding
    handleExerciseNameChange = (event) => {
        this.props.setExerciseName(event.target.dataset.rowid, event.target.value);
    }

    // Arrow fx for binding
    handleSeriesChange = (event) => {
        this.props.setSeries(event.target.dataset.rowid, event.target.value);
    }

    // Arrow fx for binding
    handleRepsChange = (event) => {
        this.props.setReps(event.target.dataset.rowid, event.target.value);
    }

    // Arrow fx for binding
    handleChargeChange = (event) => {
        this.props.setCharge(event.target.dataset.rowid, event.target.value);
    }

    // Arrow fx for binding
    handleDateChange = (date) => {
        this.props.setDate(date);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("submit");
    }

    render() {
        const tableRows = this.props.tableRows.map(({id, exerciseName, series, reps, charge}) => 
            <TableRow key={id} id={id} exerciseName={exerciseName} series={series} reps={reps} charge={charge} onExerciseNameChange={this.handleExerciseNameChange} onSeriesChange={this.handleSeriesChange} onRepsChange={this.handleRepsChange} onChargeChange={this.handleChargeChange} />
        );
        return (
            <div className="mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <table className="text-white border-separate">
                        <thead>
                            <tr>
                                <th>Exercise</th>
                                <th>Series</th>
                                <th>Reps</th>
                                <th>Charge (kg)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                    <div className="mt-4 px-2">
                        <button className="float-right clear-both bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="button" onClick={this.props.addRow}>+</button>
                        <DatePicker format="DD-MM-YYYY"
                                    value={this.props.date}
                                    onChange={this.handleDateChange} />
                        <button type="submit" className="block mx-auto mt-2 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Validate</button>
                    </div>
                </form>
            </div>
        );
    }
}

WorkoutRoutine.propTypes = {
    tableRows: PropTypes.array.isRequired,
    date: PropTypes.object.isRequired,
    addRow: PropTypes.func.isRequired,
    setExerciseName: PropTypes.func.isRequired,
    setSeries: PropTypes.func.isRequired,
    setReps: PropTypes.func.isRequired,
    setCharge: PropTypes.func.isRequired,
    setDate: PropTypes.func.isRequired,
}

export default WorkoutRoutine;