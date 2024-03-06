import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      name2: '',
      relationshipStatus: ''
    };
  }

  removeCommonLetters = (str1, str2) => {
    const result1 = [...str1].filter(char => !str2.includes(char)).join('');
    const result2 = [...str2].filter(char => !str1.includes(char)).join('');

    return [result1, result2];
  };

  clearInputs = () => {
    this.setState({
      name1: '',
      name2: '',
      relationshipStatus: ''
    });
  };

  calculateRelationship = () => {
    const [res1, res2] = this.removeCommonLetters(this.state.name1, this.state.name2);
    const sum = (res1.length + res2.length) % 6;

    switch (sum) {
      case 1:
        this.setState({ relationshipStatus: 'Friends' });
        break;
      case 2:
        this.setState({ relationshipStatus: 'Love' });
        break;
      case 3:
        this.setState({ relationshipStatus: 'Affection' });
        break;
      case 4:
        this.setState({ relationshipStatus: 'Marriage' });
        break;
      case 5:
        this.setState({ relationshipStatus: 'Enemy' });
        break;
      case 0:
        this.setState({ relationshipStatus: 'Siblings' });
        break;
      default:
        this.setState({ relationshipStatus: 'Please Enter valid input' });
    }
  };

  render() {
    return (
      <div id="main">
        <form>
          <input type="text" id="input1" data-testid="input1" onChange={(e) => this.setState({ name1: e.target.value })} value={this.state.name1} placeholder="Enter Name 1" />
          <input type="text" id="input2" data-testid="input2" onChange={(e) => this.setState({ name2: e.target.value })} value={this.state.name2} placeholder="Enter Name 2" />
          <button onClick={this.calculateRelationship} data-testid="calculate_relationship">Calculate Relationship Future</button>
          <button onClick={this.clearInputs} data-testid="clear">Clear</button>
          <div id="relationshipResult">{this.state.relationshipStatus}</div>
        </form>
      </div>
    );
  }
}

export default App;
