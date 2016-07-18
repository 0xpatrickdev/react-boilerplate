import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import MaterialUIDemos from './MaterialUIDemos';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: `200px`
  }
}

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: "some data"
    };
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <br/>
        <MaterialUIDemos />
      </div>
    )
  }
}

Main.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
}

Main.defaultProps = {
  title: "React.js Boilerplate",
  subtitle: "a boilerplate for React.js apps using babel and webpack"
}

module.exports = Main;