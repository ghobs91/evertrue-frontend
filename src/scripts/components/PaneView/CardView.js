import React, { Component } from 'react';
import styled from 'styled-components';

const CardPane = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  width: 70%;
  padding: 1rem;
  background-color: #f2f2f2;
`;

class CardView extends Component {
  
  render() {
    return (
      <CardPane>
        <h2>Card</h2>
        {this.props.name}
      </CardPane>
    );
  }
}

export default CardView;