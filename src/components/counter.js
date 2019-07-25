import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class Counter extends Component {
  state = {};

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: "-30px" }}
        to={{ opacity: 1, marginTop: "0px" }}
      >
        {props => (
          <div style={props} className="counter card m-3">
            <h4 className="card-header">
              Counter{" "}
              <button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm float-right"
              >
                Delete
              </button>
            </h4>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon1"
                    onClick={() =>
                      this.props.onIncrement(this.props.counter, false)
                    }
                  >
                    -
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  value={this.formatCount()}
                  onChange={() => this.formatCount()}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() =>
                      this.props.onIncrement(this.props.counter, true)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
