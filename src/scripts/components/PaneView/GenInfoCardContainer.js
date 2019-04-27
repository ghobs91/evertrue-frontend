import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div `
  display: flex;
  flex-direction: column;
  border: 1px lightgray solid;
  border-radius:5px;
  margin: 1rem;
  background-color: white;
`;



class GenInfoCardContainer extends Component {
  
  render() {
    return (
      <div>
        <h2>General Info</h2>
        {this.props.genInfoList.map(genInfoElement => {
          return (
            <Card custom-attribute={genInfoElement.name}>
              {genInfoElement.name}
              <br/>
              {genInfoElement.data_type}
              <br/>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default GenInfoCardContainer;