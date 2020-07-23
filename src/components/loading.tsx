import React from 'react';
import { Row, Spin } from 'antd'
export class Loading extends React.Component<IProps> {
    render() {
        return (
            <Row justify="center" align="middle" className="loading">
                <Spin size="large" spinning={this.props.isLoading}></Spin>
            </Row >
        );
    }
}

export interface IProps {
    isLoading: boolean
}