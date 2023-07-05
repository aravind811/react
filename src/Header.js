import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritefood: "rice" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritefood: "pizza" });
    }, 1000);
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritefood: props.favfod };
  }

  render() {
    return (
      <h1>My Favorite Food is {this.state.favoritefood}</h1>
    );
  }
}

const App = () => (
  <div>
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
export default App;

