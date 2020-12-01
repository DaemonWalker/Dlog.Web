import React from 'react'
import { Helmet } from 'react-helmet'
import { StringUtil } from '../utils/stringUtil'

export class PageTitle extends React.Component<IProps> {
    render() {
        return (
            <>
                <Helmet>
                    <title>{this.getTitle()}</title>
                    <meta name="decription" content={this.props.description} />
                </Helmet>
            </>
        )
    }
    getTitle(): string {
        if (StringUtil.isStringNotEmpty(this.props.title)) {
            return `${this.props.title} | 精灵の小小窝`;
        }
        else {
            return "精灵の小小窝";
        }
    }
}

const defultProps = {
    description: ""
}

type IProps = {
    title: string
} & Partial<typeof defultProps>
