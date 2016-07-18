import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const MaterialUIDemos = React.createClass({

  getInitialState: function() {
    return {
      demos: [
        {id:1, name:'Prompt', link:'/demos/prompt'},
        {id:2, name:'Progress Bar', link:'/demos/progress-bar'}
      ]
    }
  },

  render: function() {
    return (
      <div className="container">
        <h3>Material UI Component Demos</h3>
        <ul>
          {this.state.demos.map(function(demo) {
            return (
              <li key={demo.id}>
                <Link to={demo.link}>{demo.name}</Link>
              </li>
              );
          })}
        </ul>
      </div>
    )
  }
});

module.exports = MaterialUIDemos;

/*

MaterialUIDemos.propTypes = {
  demos: React.PropTypes.array.isRequired
}

MaterialUIDemos.defaultProps = {
  demos: []
}

*/
