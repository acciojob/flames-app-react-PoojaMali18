import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      relationshipStatus: "",
    };
  }

  removeCommonLetters = (str1, str2) => {
    const charCount1 = {};
    const charCount2 = {};

    // Count occurrences of each character in str1
    for (const char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Count occurrences of each character in str2
    for (const char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Remove common letters with proper occurrences from both strings
    const result1 = [...str1].filter((char) => charCount2[char]-- <= 0).join("");
    const result2 = [...str2].filter((char) => charCount1[char]-- <= 0).join("");

    return [result1, result2];
  };

  clearInputs = () => {
    this.setState({
      name1: "",
      name2: "",
      relationshipStatus: "",
    });
  };

  calculateRelationship = () => {
    const [res1, res2] = this.removeCommonLetters(
      this.state.name1,
      this.state.name2
    );
    const sum = (res1.length + res2.length) % 6;

    switch (sum) {
      case 1:
        this.setState({ relationshipStatus: "Friends" });
        break;
      case 2:
        this.setState({ relationshipStatus: "Love" });
        break;
      case 3:
        this.setState({ relationshipStatus: "Affection" });
        break;
      case 4:
        this.setState({ relationshipStatus: "Marriage" });
        break;
      case 5:
        this.setState({ relationshipStatus: "Enemy" });
        break;
      case 0:
        this.setState({ relationshipStatus: "Siblings" });
        break;
      default:
        this.setState({ relationshipStatus: "Please Enter valid input" });
    }
  };

  render() {
    return (
      <div id="main">
        <form>
          <input
            type="text"
            name="name1"
            id="input1"
            data-testid="input1"
            onChange={(e) => this.setState({ name1: e.target.value })}
            value={this.state.name1}
            placeholder="Enter Name 1"
          />
          <input
            type="text"
            id="input2"
            name="name2"
            data-testid="input2"
            onChange={(e) => this.setState({ name2: e.target.value })}
            value={this.state.name2}
            placeholder="Enter Name 2"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              this.calculateRelationship();
            }}
            data-testid="calculate_relationship"
          >
            Calculate Relationship Future
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.clearInputs();
            }}
            data-testid="clear"
          >
            Clear
          </button>
          <h3 id="relationshipResult" data-testid="answer">
            {this.state.relationshipStatus}
          </h3>
        </form>
      </div>
    );
  }
}

export default App;
