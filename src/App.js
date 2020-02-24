import React from "react";
import "./styles/App.scss";
import Menu from "./components/Menu";
import WorkoutRoutine from "./components/WorkoutRoutine";
// import RoutineDataVisualizer from "./components/RoutineDataVisualizer";
// import ReactApexChart from "react-apexcharts";
import moment from "moment";
import { ResponsiveBar as ResponsiveBarChart } from "@nivo/bar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRows: [
        {
          id: 0,
          exerciseName: "",
          series: 0,
          reps: 0,
          charge: 0
        }
      ],
      date: moment(),
      data: [
        {
          date: moment()
            .subtract(1, "days")
            .format("M-D-Y"),
          maxCharge: 0
        }
      ],
      error: false
    };
  }

  // Arrow fx for binding
  handleExerciseNameChange = (rowId, exerciseName) => {
    let tableRow = this.state.tableRows[rowId];
    tableRow.exerciseName = exerciseName;
    this.setState({
      tableRows: this.state.tableRows.map(row =>
        row.id === rowId ? Object.assign(row, tableRow) : row
      )
    });
  };

  // Arrow fx for binding
  handleSeriesChange = (rowId, series) => {
    let tableRow = this.state.tableRows[rowId];
    if (!isNaN(parseInt(series)) || series === "") {
      tableRow.series = series === "" ? 0 : parseInt(series);
      this.setState({
        tableRows: this.state.tableRows.map(row =>
          row.id === rowId ? Object.assign(row, tableRow) : row
        )
      });
    }
  };

  // Arrow fx for binding
  handleRepsChange = (rowId, reps) => {
    let tableRow = this.state.tableRows[rowId];
    if (!isNaN(parseInt(reps)) || reps === "") {
      tableRow.reps = reps === "" ? 0 : parseInt(reps);
      this.setState({
        tableRows: this.state.tableRows.map(row =>
          row.id === rowId ? Object.assign(row, tableRow) : row
        )
      });
    }
  };

  // Arrow fx for binding
  handleChargeChange = (rowId, charge) => {
    let tableRow = this.state.tableRows[rowId];
    if (!isNaN(parseInt(charge)) || charge === "") {
      tableRow.charge = charge === "" ? 0 : parseInt(charge);
      this.setState({
        tableRows: this.state.tableRows.map(row =>
          row.id === rowId ? Object.assign(row, tableRow) : row
        )
      });
    }
  };

  // Arrow fx for binding
  handleDateChange = date => {
    this.setState({ date: date });
  };

  addNewRow = () => {
    let tableRows = this.state.tableRows;
    let tableRow = {
      id: tableRows.length,
      exerciseName: "",
      series: 0,
      reps: 0,
      charge: 0
    };
    tableRows.push(tableRow);
    this.setState({
      tableRows: tableRows
    });
  };

  validTableRows(tableRows) {
    let valid = false;

    tableRows.forEach(row => {
      if (
        !(
          row.exerciseName === "" ||
          row.series === 0 ||
          row.reps === 0 ||
          row.charge === 0
        )
      )
        valid = true;
    });

    return valid;
  }

  errorVisibleTimer() {
    this.setState({ error: this.state.error ? false : this.state.error });
  }

  // Arrow fx for binding
  handleWorkoutRoutineData = () => {
    let tableRows = this.state.tableRows;

    if (this.validTableRows(tableRows)) {
      let newDate = this.state.date;
      let maxCharge = 0;

      tableRows.forEach(row => {
        maxCharge += row.series * (row.reps * row.charge);
      });

      let newEntry = {
        date: newDate.format("M-D-Y"),
        maxCharge: maxCharge
      };

      this.setState(prevState => ({
        tableRows: [
          {
            id: 0,
            exerciseName: "",
            series: 0,
            reps: 0,
            charge: 0
          }
        ],
        date: moment(),
        data: [...this.state.data, newEntry]
      }));
    } else {
      this.setState({ error: true });
      setTimeout(() => this.errorVisibleTimer(), 5000);
      console.log("error sent");
    }
  };

  render() {
    return (
      <div id="app-container">
        <Menu />
        <div className="flex flex-col justify-around">
          <WorkoutRoutine
            tableRows={this.state.tableRows}
            date={this.state.date}
            setExerciseName={this.handleExerciseNameChange}
            setSeries={this.handleSeriesChange}
            setReps={this.handleRepsChange}
            setCharge={this.handleChargeChange}
            setDate={this.handleDateChange}
            addRow={this.addNewRow}
            submitData={this.handleWorkoutRoutineData}
            error={this.state.error}
          />
          <div className="h-20">
            <ResponsiveBarChart
              width={800}
              height={450}
              data={this.state.data}
              keys={["maxCharge"]}
              indexBy="date"
              margin={{ top: 70, right: 150, bottom: 70, left: 70 }}
              padding={0.7}
              colors={{ scheme: "category10" }}
              borderColor="#ffffff"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Date",
                legendPosition: "middle",
                legendOffset: 32
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Charge",
                legendPosition: "middle",
                legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="#ffffff"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
