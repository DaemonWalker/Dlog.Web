import { Row, Spin } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { RouteComponentProps } from 'react-router';
import { CodeLigher } from '../components/codeLigher';
import { ArticleModel } from '../models/articleModel';
import { ResponseModel } from '../models/responseModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { Typography, Space, Tag } from 'antd';
import { Loading } from '../components/loading';
const { Title, Text } = Typography;

export class Article extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { article: null };
    }
    render() {
        return (
            <div className="article-panel">
                <div>
                    <Title>{this.state.article?.title}</Title>
                    <Space size="large">
                        <Text type="secondary">{this.state.article?.date}</Text>
                        <Space>
                            {this.state.article?.tags.map((ele: string) => (
                                <Tag key={Math.random()}>{ele}</Tag>
                            ))}
                        </Space>
                    </Space>
                    <ReactMarkdown
                        source={this.state.article?.content}
                        escapeHtml={false}
                        skipHtml={false}
                        renderers={{
                            code: CodeLigher
                        }} />
                </div>
                <Loading isLoading={!(this.state && this.state.article)}></Loading>
            </div>
        )
    }

    componentDidMount() {
        ApiUtil.Get(
            `${Constant.URL_ARTICLE}?id=${this.props.match.params.id}`,
            (res: ResponseModel) => {
                this.setState({
                    article: res.article
                })
            })
    }
}


interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> { }
export interface IState {
    article: ArticleModel | null
}