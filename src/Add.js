import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sum: 0
    };
  }

  render(){
    this.props.numbers.map((number) => this.state.sum+=number);
    return(
      <div>
         {this.state.sum}
      </div>
    );
  }
}

export default App;
