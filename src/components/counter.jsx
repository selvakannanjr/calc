import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2"],
  };
  addOne = (val) => {
    return val + 1;
  };
  handleIncrement = () => {
    console.log("Inc clicked", this.state.count);
    this.setState({ count: this.addOne(this.state.count) });
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 35 }} className={this.getBadgeType()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 35 }}
          className="btn btn-secondary btn-lg"
        >
          Add to list
        </button>
        {this.state.tags.length === 0 && "Add new tags"}
        {this.renderList()}
      </React.Fragment>
    );
  }

  getBadgeType() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
  renderList() {
    if (this.state.tags.length === 0) return "No Tags";
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
