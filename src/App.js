import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css';

class App extends Component {
  state = {
    imageUrl: 'https://picsum.photos/200',
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleIncrement = counter =>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({ counters })
  }    

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
        counter.value = 0
        return counter
    })
    this.setState({ counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId)
    this.setState({ counters: counters })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
        <main className="container">
          <Counters
            image={this.state.imageUrl}
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;