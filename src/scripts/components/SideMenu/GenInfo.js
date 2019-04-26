import React, { Component } from 'react';
class GenInfo extends Component {
  
  render() {
    return (
      <div>
        GenInfo
        {this.props.genInfoList.map(genInfoElement => {
              return (
                <div>
                  {genInfoElement.name}
                </div>
              );
            })}
      </div>
    );
  }
}

export default GenInfo;