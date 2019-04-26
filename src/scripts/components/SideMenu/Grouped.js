import React, { Component } from 'react';
class Grouped extends Component {
  
  render() {
    return (
      <div>
        Grouped
        {this.props.groupedObjectsList.map(groupedObjectElement => {
          return (
            <div>
              {groupedObjectElement.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Grouped;