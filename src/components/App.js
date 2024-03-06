import React, { Component, useState } from "react";


class App extends Component {
  render() {

    let [name1, setName1] = useState('');
    let [name2, setName2] = useState('');
    let [relationshipstatus, setRelationshipStatus] = useState('');

    const removeCommonLetters = (str1, str2) => {
      const result1 = [...str1].filter(char => !str2.includes(char)).join('');
      const result2 = [...str2].filter(char => !str1.includes(char)).join('');

      return [result1, result2];
    };

    const clearInputs = () => {
        setName1('');
        setName2('');
        setRelationshipStatus('');
      };

    function calculateRelationship() {
      let [res1, res2] = removeCommonLetters(name1, name2);
      let sum = (res1 + res2) % 6;
      switch (sum) {
        case 1:
          setRelationshipStatus('Friends');
          break;
        case 2:
          setRelationshipStatus('Love');
          break;
        case 3:
          setRelationshipStatus('Affection');
          break;
        case 4:
          setRelationshipStatus('Marriage');
          break;
        case 5:
          setRelationshipStatus('Enemy');
          break;
        case 0:
          setRelationshipStatus('Siblings');
          break;
        default:
          setRelationshipStatus('Please Enter valid input');
      }
    }





    return (
      <div id="main">
        <form>
          <input type="text" id="input1" data-testid="input1" onChange={(e) => setName1(e.target.value)} value={name1} placeholder="Enter Name 1" />
          <input type="text" id="input2" data-testid="input2" onChange={(e) => setName2(e.target.value)} value={name2} placeholder="Enter Name 2" />
          <button onClick="calculateRelationship()" data-testid="calculate_relationship">Calculate Relationship Future</button>
          <button onClick="clearInputs()" data-testid="clear">Clear</button>
          <div id="relationshipResult"></div>
        </form>
      </div>
    )
  }
}


export default App;
