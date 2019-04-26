import React, { Component } from 'react';
import styled from 'styled-components';
import ObjectCard from './ObjectCard'

const Pane = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
`;

class SideMenuContainer extends Component {
  
  render() {
    return (
      <Pane>

          Pane
          {this.props.data.map(object => {
            return (
              <ObjectCard name = {object.name}/>
            );
          })}
        
      </Pane>
    );
  }
}

export default SideMenuContainer;