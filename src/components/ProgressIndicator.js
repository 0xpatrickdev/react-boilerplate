import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import {blue900} from 'material-ui/styles/colors';

export default class PageProgressIndicator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <LinearProgress 
        mode="determinate"
        value={this.state.completed}
        color={blue900}
        style={this.props.style}
      />
    );
  }
}

PageProgressIndicator.defaultProps = {
  style: {
    position: 'fixed',
    top: 0,
    left: 0
  }
}