import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Link } from 'react-router-dom'

const Article = ({ articles: articlesImmutable }) => {
  const articles = articlesImmutable.toJS()
  const output = []

  for (let id in articles) {
    if (({}).hasOwnProperty.call(articles, id)) {
      const { title, cost } = articles[id]

      output.push(
        <article key={id}>
          <h2><Link to={`/${id}`}>{title}</Link></h2>
          <p>Цена: {cost} ₽</p>
        </article>
      )
    }
  }

  return output
}

Article.propTypes = {
  articles: ImmutablePropTypes.map
}

export default Article
