import React, { Component } from 'react';
import styled from 'styled-components';
import GroupedRowContainer from './GroupedRowContainer'

const SideMenuPane = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  background-color: white;
  width: 30%;
`;

const SideMenu = styled.div `
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
`;

const SideMenuRow = styled.div `
  margin: 1rem;
  padding: .5rem;
  &:hover {
    background: #ededed;
  }
  border-radius: 5px;
`;

class SideMenuContainer extends Component {
  render() {
    return (
      <SideMenuPane>
        <SideMenu>
          <div>
            <h2>GenInfo</h2>
            {this.props.genInfoList.map(genInfoElement => {
              return (
                <SideMenuRow onClick={() => { this.props.changeInfoList(genInfoElement.name, genInfoElement.data_type, genInfoElement.app_keys)}}>
                  {genInfoElement.name}
                </SideMenuRow>
              );
            })}
          </div>

          <br/><br/>
          
          <div>
            <h2>Grouped</h2>
            {this.props.groupedObjectsList.map(groupedObjectElement => {
              return (
                <GroupedRowContainer handleGroupedClick={this.props.handleGroupedClick} active={this.props.active} activeGroupedMenuItem = {this.props.activeGroupedMenuItem} changeInfoList={this.props.changeInfoList} parentName = {groupedObjectElement.name} properties = {groupedObjectElement.containing_object.properties}/>
              );
            })}
          </div>
        </SideMenu>
      </SideMenuPane>
    );
  }
}

export default SideMenuContainer;