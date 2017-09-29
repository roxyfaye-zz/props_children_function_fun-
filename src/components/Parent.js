import React, {Component} from 'react';
import Display from './Display';
import Child from './Child';

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
    // console.log(whatToSay);
    console.log(this.state)

  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
      return (
        <div className='row'>
          <div className="col-lg-4 col-lg-offset-4">
            <input onChange={this.handleInput} type="text" className="form-control" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay}/>
            <Child onClick={this.handleSubmit}/>
            <div className='row'>
            <Display sayWhat={this.state.whatWasSaid}/>
          </div>
        </div>
      </div>
      );
    }
  }
