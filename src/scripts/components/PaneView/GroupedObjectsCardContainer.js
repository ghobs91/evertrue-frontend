import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
  margin: 1rem;
`;

class GroupedObjectsCardContainer extends Component {
  render() {
    return (
      <div>
        Grouped Objects Cards
        {this.props.groupedObjectsList.map(groupedObjectsElement => {
          return (
            <div>
              {groupedObjectsElement.name}
            </div>
          );
        })}
      </div>    
    );
  }
}

export default GroupedObjectsCardContainer;