import React, { Component } from 'react';
import styled from 'styled-components';
import ActiveRow from './ActiveRow'



const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: .5rem;
  padding: .5rem;
  &:hover {
    background: #ededed;
  }
  border-radius: 5px;
`;

const NestedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class GroupedMenuContainer extends Component {

  render() {
    if (this.props.active == true){
      return (
        <ParentContainer>

          <p onClick={() => { this.props.handleGroupedClick(this.props.properties, this.props.parentName) }}>
            {this.props.parentName}
          </p>
          
          <NestedContainer>
            {this.props.properties.map(propertyElement => {
              return (
                <ActiveRow propertyElement = {propertyElement} parentName = {this.props.parentName} activeGroupedMenuItem = {this.props.activeGroupedMenuItem}/>
                // <NestedProperty onClick={() => { this.props.changeInfoList(propertyElement.name, propertyElement.data_type, propertyElement.app_keys)}} >
                //   {propertyElement.name}
                // </NestedProperty>
              );
            })}
          </NestedContainer>

        </ParentContainer>
      );    
    }

    else {
      return (
        <ParentContainer onClick={() => this.props.handleGroupedClick(this.props.properties, this.props.parentName)}>
          <p>{this.props.parentName}</p>        
        </ParentContainer>
      );
    }
    
  }
}

export default GroupedMenuContainer;