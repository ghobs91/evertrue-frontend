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
        
        <h4>Type</h4>
        {this.props.type}

        <h4>Usage</h4>
        {this.props.usage}

        <h4>EverTrueFieldName</h4>
        {this.props.name}

        <br></br>

        

        
      </CardPane>
    );
  }
}

export default CardView;