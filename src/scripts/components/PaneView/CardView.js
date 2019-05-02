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
  margin-bottom: 1rem;
`;

const UsageLabel = styled.div`
  padding: .5rem;
  margin-right: .5rem;
  border-radius: 5px;
  background-color: #c4ffca;
  color: #12cc24;
`;

const UsageContainer = styled.div`
  display: flex;
`;

class CardView extends Component {
  
  render() {

    if (this.props.groupedCardInfo.length > 1){

      console.log("first properties object that cardView receives: " + this.props.groupedCardInfo[0]["name"])


      return (
        <CardPaneContainer>
          <h2>Pane View</h2>

          {this.props.groupedCardInfo.map(groupedCardElement => {
            return (
              <Card>
                <h4>Type</h4>
                {groupedCardElement.data_type}

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
                {groupedCardElement.name}
              </Card>
            );
          })}
          
        </CardPaneContainer>
      );
      
    }
    
    else {
      console.log("groupedCardInfo not populated yet")
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
}

export default CardView;