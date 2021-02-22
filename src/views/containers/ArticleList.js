import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../state/articles';

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.actions.requestArticles();
  }

  displayArticles = () => {
    if (this.props.data && this.props.data.length) {
      const results = this.props.data.map((article) => {
        return (
          <li key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </li>
        )});

      return results;
    }
    return <h2>Loading...</h2>
  };

  render() {
    return (
      <div className='article'>
        <ul>
          {this.displayArticles()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(222, state);
  return {
    data: state.articles.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        requestArticles: actions.getArticles
      },
      dispatch
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);