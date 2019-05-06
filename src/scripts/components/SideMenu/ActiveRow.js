import React, { Component } from 'react';
import styled from 'styled-components';

const NestedProperty = styled.div`
  margin-left: 2rem;
`;

class ActiveRow extends Component {

  render() {

    if (this.props.parentName == this.props.activeGroupedMenuItem){
      console.log("parent name of current:" + this.props.parentName)
      console.log("ActiveRow: " + this.props.activeGroupedMenuItem)
      return (
        <NestedProperty>
          {this.props.propertyElement.name}
        </NestedProperty>
      )
    }
    else{
      return (
        <div></div>
      )
    }
  }
}

export default ActiveRow;