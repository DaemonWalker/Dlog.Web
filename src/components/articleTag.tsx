import { Tag } from 'antd'
import React from 'react'
import { HyperLink } from './hyperLink'
export class ArticleTag extends React.Component<Prop> {
    render() {
        return (
            <Tag>
                <HyperLink href={`/tags/${this.props.tagName}`} text={this.props.tagName} key={this.props.tagName}/>
            </Tag>
        )
    }
}

interface Prop {
    tagName: string
}