import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Articles } from '../components'

class SimpleShop extends PureComponent {
    static propTypes = {
        articles: ImmutablePropTypes.map,
        loadArticles: PropTypes.func.isRequired
    }

    static defaultProps = {
        articles: void 0
    }

    componentDidMount () {
        this.props.loadArticles()
    }

    render () {
        const { articles } = this.props

        return (articles.count()
            ? <Articles articles={articles} />
            : 'Товары загружаются...')
    }
}

export default connect(
    (state) => ({
        articles: state.articles
    }),
    (dispatch) => bindActionCreators({
        loadArticles: actions.articles.loadArticles
    }, dispatch)
)(SimpleShop)
