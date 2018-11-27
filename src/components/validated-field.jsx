// rule disabled because of false positive on jsx labels
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'
import style from './validated-field.css'

const ValidatedField = ({ FieldType, input, label, type, meta: { touched, error } }) => (
  <label className={style.label}>
    {`${label}: `}
    <FieldType
      className={style.field}
      {...input}
      type={type}
    />
    {touched && error && <div>{error}</div>}
  </label>
)

ValidatedField.propTypes = {
  FieldType: PropTypes.string,
  input: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.any).isRequired
}

ValidatedField.defaultProps = {
  FieldType: 'input',
  input: void 0,
  label: '',
  type: 'text'
}

export default ValidatedField
