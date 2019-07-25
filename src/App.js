import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    counters: [{ id: 0, value: 0 }]
  };

  handleIncrement = (counter, operation) => {
    console.log(operation);
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

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    let counter = { id: this.state.counters.length, value: 0 };
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
