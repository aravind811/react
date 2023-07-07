import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
    

    constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  componentDidMount(){
    console.log()
  }
    setter(){
    this.setState({
    b
    })
}

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        
        <button>state change</button>
      </div>
    );
  }
} 
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);
