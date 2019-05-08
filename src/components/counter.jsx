import React, { Component } from 'react';

class Counter extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }

    styles = {
        fontSize: 12,
        fontWeight: 'bold'
    }

    render() {
        console.log(this.props)

        return (
            <div>
                <h4>Counter num: {this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
                
                {this.renderTags()}
            </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        return <ul>{
            this.state.tags.map(tag => <li key={tag}>{ tag }</li>)
        }</ul>
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;