import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
  margin: 1rem;
`;

class ObjectCard extends Component {
  render() {
    return (
      <Card>
        {this.props.name}
      </Card>
    );
  }
}

export default ObjectCard;