import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.firstNumber + this.props.secondNumber}
      </div>
    );
  }
}

export default App;
