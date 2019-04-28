import React, { Component } from 'react';
import styled from 'styled-components';

const CardPaneContainer = styled.div `
  width: 70%;
  padding: 1rem;
  background-color: #f2f2f2;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
`;

const UsageLabel = styled.div`
  padding: .5rem;
  border: 1px lightgray solid;
  margin-right: .5rem;
  border-radius: 5px;
`;

const UsageContainer = styled.div`
  display: flex;
`;

class CardView extends Component {
  
  render() {
    return (
      <CardPaneContainer>
        <Card>
          <h2>Pane View</h2>
        
          <h4>Type</h4>
          {this.props.type}

          <h4>Usage</h4>
          <UsageContainer>
            {this.props.usage.map(usageElement => {
              return (
                <UsageLabel>
                  {usageElement}
                </UsageLabel>
              );
            })}
          </UsageContainer>
          

          <h4>EverTrueFieldName</h4>
          {this.props.name}
        </Card>
        
      </CardPaneContainer>
    );
  }
}

export default CardView;