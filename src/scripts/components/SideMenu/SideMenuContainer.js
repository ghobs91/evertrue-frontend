import React, { Component } from 'react';
import styled from 'styled-components';

const SideMenuPane = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  background-color: lightgray;
  width: 30%;
`;

const SideMenu = styled.div `
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border: 1px lightgray solid;
  border-radius: 5px;
  background-color: white;
`;

const SideMenuRow = styled.div `
  margin: 1rem;
  color: gray;
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
                <SideMenuRow onClick={() => { this.props.changeInfoList(genInfoElement.name, genInfoElement.data_type, genInfoElement.app_keys.join(', '))}}>
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
                <SideMenuRow onClick={() => { this.props.changeInfoList(groupedObjectElement.name) }}>
                  {groupedObjectElement.name}
                </SideMenuRow>
              );
            })}
          </div>
        </SideMenu>
        
      </SideMenuPane>
    );
  }
}

export default SideMenuContainer;