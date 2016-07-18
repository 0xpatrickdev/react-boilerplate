import React, {Component, PropTypes} from 'react';
import ProgressIndicator from './ProgressIndicator';

const styles = {
  post: {
    display: 'inline-block',
    width: '70%',
    marginTop: 100
  },
  wrapper: {
    textAlign: 'center'
  }
}

function Post (props) {
  return (
    <div className="container" style={styles.post}>
      <h1>{props.title}</h1><br/>
      <p>{props.content}</p><br/><p>{props.content}</p><br/><p>{props.content}</p><br/><p>{props.content}</p><br/><p>{props.content}</p><br/>
      <h2>The End</h2><br/>
    </div>
  )
}

Post.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired
};

class ProgressDemo extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: "Blog Post",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit  aut fugit, sed quia consequuntur magni dolores qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    };
  }

  render() {
    return (
      <div className="container" style={styles.wrapper}>
        <ProgressIndicator />
        <Post title={this.state.title} content={this.state.content} />
      </div>
    )
  }
}

module.exports = ProgressDemo;