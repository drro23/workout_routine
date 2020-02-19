import React from 'react';
import './styles/App.css';
import Menu from './components/Menu';
import WorkoutRoutine from './components/WorkoutRoutine';
import RoutineDataVisualizer from './components/RoutineDataVisualizer';
import moment from 'moment';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRows: [
        {
          id: 0,
          exerciseName: '',
          series: 0,
          reps: 0,
          charge: 0,
      }],
      date: moment(),
      visualizeData: {
        categories: [], // all dates are inserted here
        serieData: [] // all calculated max charges are inserted here
      },
    };
  }

  // Arrow fx for binding
  handleExerciseNameChange = (rowId, exerciseName) => {
    let tableRow = this.state.tableRows[rowId];
    tableRow.exerciseName = exerciseName;
    this.setState({ tableRows: this.state.tableRows.map(row => row.id === rowId ? Object.assign(row, tableRow) : row) });
  }

  // Arrow fx for binding
  handleSeriesChange = (rowId, series) => {
    let tableRow = this.state.tableRows[rowId];
    if (!isNaN(parseInt(series)) || series === '')
    {
      tableRow.series = series === '' ? 0 : parseInt(series);
      this.setState({ tableRows: this.state.tableRows.map(row => row.id === rowId ? Object.assign(row, tableRow) : row) });
    }
  }

  // Arrow fx for binding
  handleRepsChange = (rowId, reps) => {
    let tableRow = this.state.tableRows[rowId];
    if (!isNaN(parseInt(reps)) || reps === '')
    {
      tableRow.reps = reps === '' ? 0 : parseInt(reps);
      this.setState({ tableRows: this.state.tableRows.map(row => row.id === rowId ? Object.assign(row, tableRow) : row) });
    }
  }

  // Arrow fx for binding
  handleChargeChange = (rowId, charge) => {
    let tableRow = this.state.tableRows[rowId];
    if (!isNaN(parseInt(charge)) || charge === '')
    {
      tableRow.charge = charge === '' ? 0 : parseInt(charge);
      this.setState({ tableRows: this.state.tableRows.map(row => row.id === rowId ? Object.assign(row, tableRow) : row) });
    }
  }

  // Arrow fx for binding
  handleDateChange = (date) => {
    this.setState({ date: date });
  }

  addNewRow = () => {
    let tableRows = this.state.tableRows;
    let tableRow = {
      id: tableRows.length,
      exerciseName: '',
      series: 0,
      reps: 0,
      charge: 0
    }
    tableRows.push(tableRow);
    this.setState({
      tableRows: tableRows
    });
  }

  validTableRows(tableRows) {
    let valid = false;

    tableRows.forEach(row => {
      if (!(row.exerciseName === '' || row.series === 0 || row.reps === 0 || row.charge === 0))
        valid = true;
    });
    
    return valid;
  }

  // Arrow fx for binding
  handleWorkoutRoutineData = () => {
    if (this.validTableRows(this.state.tableRows)) {
      let newDate = this.state.date;
      let maxCharge = 0;
      this.state.tableRows.forEach(row => {
        maxCharge += row.series * row.reps * row.charge;
      });
      let newCategorie = this.state.visualizeData.categories;
      newCategorie.push(newDate.format("D-M-Y"));
      let newSerieData = this.state.visualizeData.serieData;
      newSerieData.push(maxCharge);
      this.setState({
        tableRows: [
          {
            id: 0,
            exerciseName: '',
            series: 0,
            reps: 0,
            charge: 0,
          }
        ],
        date: moment(),
        categories: newCategorie,
        serieData: newSerieData
      });
    }

  }

  render() {
    return (
      <div className="bg-gray-900 h-full w-full">
        <Menu />
        <div className="flex flex-col justify-around">
          <WorkoutRoutine tableRows={this.state.tableRows} 
                          date={this.state.date} 
                          setExerciseName={this.handleExerciseNameChange} 
                          setSeries={this.handleSeriesChange} 
                          setReps={this.handleRepsChange} 
                          setCharge={this.handleChargeChange} 
                          setDate={this.handleDateChange} 
                          addRow={this.addNewRow}
                          submitData={this.handleWorkoutRoutineData}
          />
          <RoutineDataVisualizer data={this.state.visualizeData}/>
        </div>
      </div>
    );
  }
}

export default App;
