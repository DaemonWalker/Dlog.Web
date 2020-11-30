import React from 'react'
import { Helmet } from 'react-helmet'
import { StringUtil } from '../utils/stringUtil'

export class PageTitle extends React.Component<IProps> {
    render() {
        return (
            <>
                <Helmet>
                    <title>{this.getTitle()}</title>
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
interface IProps {
    title: string
}