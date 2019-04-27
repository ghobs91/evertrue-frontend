import React, { Component } from 'react';
import data from '../../schema.json';
import SideMenuContainer from './components/SideMenu/SideMenuContainer';
import PaneViewContainer from './components/PaneView/PaneViewContainer';
import CardView from './components/PaneView/CardView';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genInfoList: [],
      groupedObjectsList: [],
      cardInfo: {
        name: data[0].name,
        type: data[0].dataType,
        usage: data[0].app_keys
      },
      data: []
    };
    this.changeInfoList = this.changeInfoList.bind(this)
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
      groupedObjectsList,
      data
    });

  }

  changeInfoList(rowName, dataType, usage){
    console.log("appkeys were about to change it to: " + usage)
    //change the card rendered based on which row is clicked
    this.setState({
      cardInfo: {
        name: rowName,
        type: dataType,
        usage: usage
      }
    })
  }

  render() {
    return (
      <MainContainer>
        <SideMenuContainer changeInfoList={this.changeInfoList} genInfoList={this.state.genInfoList} groupedObjectsList={this.state.groupedObjectsList}/>
        <CardView name = {this.state.cardInfo.name} type = {this.state.cardInfo.type} usage = {this.state.cardInfo.usage}/>
        {/* <PaneViewContainer  genInfoList={this.state.genInfoList} groupedObjectsList={this.state.groupedObjectsList}/> */}
      </MainContainer>
    );
  }
}

export default App;
