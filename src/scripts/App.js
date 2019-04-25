import React, { Component } from 'react';
import data from '../../schema.json'
import GenInfo from './components/GenInfo';
import Grouped from './components/Grouped';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genInfoList: [],
      groupedObjectsList: []
    };
  }

  componentDidMount() {
    // Create a new array based on current state:
    let genInfoList = [...this.state.genInfoList];
    let groupedObjectsList = [...this.state.groupedObjectsList];
  
    // For every obj in schema, if it has a containing_object property, add it to groupedObjectsList array
    // Otherwise, add it to genInfoList array
    for (var i=0; i<data.length; i++ ){
      console.log("data object currently looking at: " + data[i])
      let schemaObject = data[i]

      if (schemaObject["containing_object"]){
        groupedObjectsList.push(data[i]);
      }
      else {
        genInfoList.push(data[i])
      }
    }

    console.log("groupedObjectsList length: " + groupedObjectsList.length)
    console.log("genInfoList length: " + genInfoList.length)

    // Set the state objects for both to their respective arrays, to be passed to respective components for rendering different parts of side menu
    this.setState({
      genInfoList,
      groupedObjectsList
    });

  }

  render() {
    return (
      <div>
        {/* <GenInfo genInfoList={this.state.genInfoList}/>
        <Grouped groupedObjectsList={this.state.groupedObjectsList}/> */}
      </div>
    );
  }
}

export default App;
