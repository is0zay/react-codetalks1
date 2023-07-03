// This is actuallty an example of a stateful component, because in the App functional component, we declare this.state with valuses of x or y

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
      
    // We declare the state as shown below
    
    this.state = {                           
      x: "This is x from state",    /* Render the value of 'x' from the component's state */
      y: "This is y from state"		/* Render the value of 'y' from the component's state */
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
        <h2>{this.state.y}</h2>
      </div>
    );
  }
}
export default App;
