// rule disabled because of false positive on complex key
/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const replaceBreaks = (string) => (string
  ? string
    .split('\n')
    .map((item, i) => <p key={`${item}${i}`}>{item}</p>)
  : null)

export default function Article ({ edit, article: { title, cost, description, image } }) {
  return (
    <Fragment>
      <header>
        <Link to='/'>← Все товары</Link>
        {' • '}
        <a href='#' role='button' onClick={edit}>Редактировать</a>
      </header>
      <main>
        <h2>{title}</h2>
        <i>{cost} ₽</i>
        {description &&
        <div>{replaceBreaks(description)}</div>}
        {image &&
        <img src={image} alt={`Изображение товара ${title}`} />}
      </main>
    </Fragment>
  )
}

Article.propTypes = {
  edit: PropTypes.func.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.string
  }).isRequired
}
