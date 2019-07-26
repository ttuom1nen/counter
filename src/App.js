import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import uuidv1 from "uuid/v1";

class App extends Component {
  state = {
    counters: [{ id: 0, uuid: 0, value: 0 }]
  };

  handleIncrement = (counter, operation) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    let value = operation ? -1 : 1;
    counters[index].value = counters[index].value - value;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = counterUuid => {
    const counters = this.state.counters.filter(
      counter => counter.uuid !== counterUuid
    );
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    let counter = { id: this.state.counters.length, uuid: uuidv1(), value: 0 };
    let counters = [...this.state.counters, counter];
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            image={this.state.imageUrl}
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAddNew={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
