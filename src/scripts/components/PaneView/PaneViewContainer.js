import React, { Component } from 'react';
import styled from 'styled-components';
import GenInfoCardContainer from './GenInfoCardContainer';
import GroupedObjectsCardContainer from './GroupedObjectsCardContainer';

const Pane = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  width: 70%;
  padding: 1rem;
  background-color: #f2f2f2;
`;

class SideMenuContainer extends Component {
  
  render() {
    return (
      <Pane>
        <GenInfoCardContainer genInfoList={this.props.genInfoList}/>
        <br/>
        <GroupedObjectsCardContainer groupedObjectsList={this.props.groupedObjectsList}/>
      </Pane>
    );
  }
}

export default SideMenuContainer;