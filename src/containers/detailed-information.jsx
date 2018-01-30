import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import { Article } from '../components'
import EditArticle from './edit-article'

@connect(
    (state, { match: { params: { id } } }) => ({
        article: state.articles.get(id),
        isEdit: state.application.get('isEdit')
    }),
    (dispatch) => bindActionCreators({
        loadOneArticle: actions.articles.loadOneArticle,
        editArticle: actions.articles.editArticle,
        saveArticle: actions.articles.saveArticle
    }, dispatch)
)
export default class DetailedInformation extends PureComponent {
    static propTypes = {
        article: ImmutablePropTypes.map,
        isEdit: PropTypes.bool.isRequired,
        loadOneArticle: PropTypes.func.isRequired,
        editArticle: PropTypes.func.isRequired,
        saveArticle: PropTypes.func.isRequired,
        match: PropTypes.objectOf(PropTypes.any).isRequired
    }

    static defaultProps = {
        article: void 0
    }

    componentWillMount () {
        this.props.loadOneArticle(this.getId())
    }

    getId = () => this.props.match.params.id

    saveArticle = (values) => {
        this.props.saveArticle({
            id: this.getId(),
            ...values
        })
    }

    render () {
        const { article } = this.props

        if (!article) {
            return 'Товар загружается...'
        }

        return this.props.isEdit
            ? <EditArticle
                onSubmit={this.saveArticle}
                initialValues={{ ...article.toJS() }}
            />
            : <Article
                edit={this.props.editArticle}
                article={article.toJS()}
            />
    }
}
