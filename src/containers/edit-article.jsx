import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { ValidatedField } from '../components'

const EditArticle = ({ handleSubmit, submitting, handleCancel }) => (
    <form onSubmit={handleSubmit}>
        <a href="#" role="button" onClick={handleCancel}>← Отменить редактирование</a>
        <h2>Редактирование товара</h2>
        <Field
            name="title"
            label="Название товара"
            component={ValidatedField}
        />
        <Field
            name="cost"
            label="Цена"
            component={ValidatedField}
        />
        <Field
            name="description"
            label="Описание товара"
            component={ValidatedField}
            FieldType="textarea"
        />
        <Field
            name="image"
            label="Изображение"
            component={ValidatedField}
        />
        <button onClick={handleSubmit} disabled={submitting}>Сохранить товар</button>
    </form>
)

EditArticle.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    handleCancel: PropTypes.func.isRequired
}

const validate = ({ title, cost }) => {
    const errors = {}

    if (!title) {
        errors.title = 'Пожалуйста, укажите название товара'
    }
    if (!cost) {
        errors.cost = 'Пожалуйста, укажите цену'
    }

    return errors
}

export default reduxForm({ form: 'saveArticle', validate })(EditArticle)
