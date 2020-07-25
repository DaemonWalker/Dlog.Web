import React from 'react';
import { CodeLigher } from './codeLigher'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

export class ArticleContent extends React.Component<IProps> {
    render() {
        return (
            <ReactMarkdown
                source={
                    this.props.filter && this.props.filter !== "" ?
                        this.props.content.replace(
                            new RegExp(this.props.filter, 'gi'), "<mark>$&</mark>"
                        ) :
                        this.props.content
                }
                escapeHtml={false}
                skipHtml={false}
                renderers={{
                    code: CodeLigher
                }}
                className="markdown-body articleContent" 
                />
        )
    }
}
const defaultProps = {
    filter: ""
}

type IProps = {
    content: string
} & Partial<typeof defaultProps>