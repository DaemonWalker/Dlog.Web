import { Space } from 'antd';
import React from 'react';

export class ArticleStatics extends React.Component<IProps> {
    render() {
        return (
            <Space>
                {React.createElement(this.props.icon)}
                {this.props.number}
            </Space>
        )
    }
}

export interface IProps {
    icon: any;
    number: number;
}