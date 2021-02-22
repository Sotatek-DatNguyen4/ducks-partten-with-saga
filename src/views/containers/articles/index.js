import React, { useEffect, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../../state/articles';
import './style.scss';

const Articles = ({ actions, data }) => {
  useEffect(() => {
    actions.requestArticles();
  }, [actions]);


  const displayArticles = useCallback(() => {
    if (data && data.length) {
      const results = data.map((article) => {
        return (
          <li key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </li>
        )});

      return results;
    }
    return <h2>Loading...</h2>
  }, [data]);

  return (
    <div className='article'>
      <ul>
        {displayArticles()}
      </ul>
    </div>
  )
};

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Articles);