import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onAddNew} className="btn btn-primary">
          Add counter
        </button>
        <button
          onClick={this.props.onReset}
          className="btn btn-outline-info m-2"
        >
          Reset all
        </button>
        <img src={this.props.imageUrl} alt="" />
        <div>
          {this.props.counters.map(counter => (
            <Counter
              key={counter.id}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
