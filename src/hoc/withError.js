import React, { PureComponent } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'

export default function withError (WrappedComponent) {
    @connect((state) => ({
        error: state.application.get('error')
    }))
    class Wrapped extends PureComponent {
        static propTypes = {
            error: ImmutablePropTypes.map
        }
        static defaultProps = {
            error: void 0
        }

        render () {
            const { error, ...passed } = this.props
            return (
                error
                    ? `Ошибка! ${error.get('description')}`
                    : <WrappedComponent {...passed} />
            )
        }
    }

    return Wrapped
}
