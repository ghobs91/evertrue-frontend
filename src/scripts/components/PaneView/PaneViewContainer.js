import React, { Component } from 'react';
import styled from 'styled-components';
import GenInfoCardContainer from './GenInfoCardContainer';
import GroupedObjectsCardContainer from './GroupedObjectsCardContainer';

const Pane = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
`;

class SideMenuContainer extends Component {
  
  render() {
    return (
      <Pane>
        <GenInfoCardContainer genInfoList={this.props.genInfoList}/>
        <GroupedObjectsCardContainer groupedObjectsList={this.props.groupedObjectsList}/>
      </Pane>
    );
  }
}

export default SideMenuContainer;