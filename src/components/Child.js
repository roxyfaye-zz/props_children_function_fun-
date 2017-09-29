import React, {Component} from 'react';

export default class Child extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
      <div>
        <input className="btn btn-warning" type="submit" onClick={this.props.onClick}/>
      </div>
    );
  }
}
