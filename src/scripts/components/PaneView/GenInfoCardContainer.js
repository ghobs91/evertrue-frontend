import React, { Component } from 'react';
import styled from 'styled-components';


class GenInfoCardContainer extends Component {
  
  render() {
    return (
      <div>
      GenInfo Cards
      {this.props.genInfoList.map(genInfoElement => {
        return (
          <div onClick={this.handleClick}>
            {genInfoElement.name}
          </div>
        );
      })}
    </div>
    );
  }
}

export default GenInfoCardContainer;