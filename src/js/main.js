import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import ContentBlock from './content-block.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <ContentBlock />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));
