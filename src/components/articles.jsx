// rule disabled because of false positive on lodash array mapping
/* eslint-disable react/no-array-index-key */
import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const Article = ({ articles }) => _(articles.toJS())
    .map(({ title, cost }, id) => (
        <article key={id}>
            <h2><Link to={`/${id}`}>{title}</Link></h2>
            <p>Цена: {cost} ₽</p>
        </article>
    ))
    .value()

Article.propTypes = {
    articles: ImmutablePropTypes.map
}

export default Article
