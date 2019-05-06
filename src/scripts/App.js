import React, { Component } from 'react';
import data from '../../schema.json';
import SideMenuContainer from './components/SideMenu/SideMenuContainer';
import CardView from './components/PaneView/CardView';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genInfoList: [],
      groupedObjectsList: [],
      // This obj stores data for cases where there's only one property in the respective object being loaded into the PaneView
      cardInfo: {
        name: data[0].name,
        type: data[0].dataType,
        usage: data[0].app_keys
      },
      data: [],
      active: false,
      // This obj stores data in cases where there are multiple properties to render in the PaneView
      groupedCardInfo: [{
        name: "placeholder name"
      }], 
      activeGroupedMenuItem: null
    };
    this.changeInfoList = this.changeInfoList.bind(this)
    this.handleGroupedClick = this.handleGroupedClick.bind(this)
  }

  
  componentDidMount() {
    // Create a new array based on current state, broken down by single property and multi property elements
    let genInfoList = [...this.state.genInfoList];
    let groupedObjectsList = [...this.state.groupedObjectsList];
  
    // For every obj in schema, if it has a containing_object property, add it to groupedObjectsList array
    // Otherwise, add it to genInfoList array
    for (var i=0; i<data.length; i++ ){
      let schemaObject = data[i]
      if (schemaObject["containing_object"]){
        groupedObjectsList.push(data[i]);
      }
      else {
        genInfoList.push(data[i])
      }
    }

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

  handleGroupedClick(properties, parentName){
      console.log("toggle click!")
      console.log("parentName clicked:" + parentName)
      this.setState((prevState, props) => ({
        active: !prevState.active,
        groupedCardInfo: properties,
        activeGroupedMenuItem: parentName
      }));

      // console.log("the active state is now set to: " + this.state.active)
      console.log("the length of properties object were setting state to: " + properties.length)
  }

  render() {
    return (
      <MainContainer>
        <SideMenuContainer active={this.state.active} activeGroupedMenuItem = {this.state.activeGroupedMenuItem} handleGroupedClick = {this.handleGroupedClick} changeInfoList={this.changeInfoList} genInfoList={this.state.genInfoList} groupedObjectsList={this.state.groupedObjectsList}/>
        <CardView name = {this.state.cardInfo.name} type = {this.state.cardInfo.type} usage = {this.state.cardInfo.usage} groupedCardInfo = {this.state.groupedCardInfo}/>
      </MainContainer>
    );
  }
}

export default App;
