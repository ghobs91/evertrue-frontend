import React, { Component } from 'react';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';

const Card = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  margin: 1rem;
  background-color: white;
`;

class GroupedObjectsCardContainer extends Component {
  render() {
    return (
      <div>
        Grouped Objects Cards
        {this.props.groupedObjectsList.map(groupedObjectsElement => {
          return (
            <Card>
              <p>Name:</p>
              {groupedObjectsElement.name}
              <br/>{groupedObjectsElement.data_type}
              <br/>
              <p>EverTrue Field Name:</p>
              {groupedObjectsElement.containing_object.name}
            </Card>
          );
        })}
      </div>    
    );
  }
}

export default GroupedObjectsCardContainer;