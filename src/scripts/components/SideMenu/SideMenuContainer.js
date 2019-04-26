import React, { Component } from 'react';
import styled from 'styled-components';

const SideMenu = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
`;

class SideMenuContainer extends Component {
  
  render() {
    return (
      <SideMenu>

        <div>
          GenInfo
          {this.props.genInfoList.map(genInfoElement => {
            return (
              <div onClick={this.handleClick}>
                {genInfoElement.name}
              </div>
            );
          })}
        </div>

        <br/><br/>
        
        <div>
          Grouped
          {this.props.groupedObjectsList.map(groupedObjectElement => {
            return (
              <div>
                {groupedObjectElement.name}
              </div>
            );
          })}
        </div>
        
      </SideMenu>
    );
  }
}

export default SideMenuContainer;