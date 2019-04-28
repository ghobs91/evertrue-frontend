import React, { Component } from 'react';
import styled from 'styled-components';

const NestedProperty = styled.div`
  margin-left: 2rem;
`;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NestedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class SideMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log("toggle click!")
    this.setState({active : !this.state.active});
  }
  
  render() {
    if (this.state.active == true){
      return (
        <ParentContainer>
          <p onClick={this.handleClick}>{this.props.parentName}</p>        
          <NestedContainer>
            
            {this.props.properties.map(propertyElement => {
              return (
                <NestedProperty onClick={() => { this.props.changeInfoList(propertyElement.name, propertyElement.data_type, propertyElement.app_keys.join(', '))}} >
                  {propertyElement.name}
                </NestedProperty>
              );
            })}
          </NestedContainer>
        </ParentContainer>
      );    
    }

    else {
      return (
        <ParentContainer>
          <p onClick={this.handleClick}>{this.props.parentName}</p>        
        </ParentContainer>
      );
    }
    
  }
}

export default SideMenuContainer;