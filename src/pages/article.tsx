import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ArticleModel } from '../models/articleModel';
import { ResponseModel } from '../models/responseModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { Typography, Space, Tag } from 'antd';
import { Loading } from '../components/loading';
import { ArticleContent } from '../components/articleContent'
const { Title, Text } = Typography;

export class Article extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            article: {
                content: "",
                tags: [],
                title: "",
                date: "",
                seen: 0
            },
            isLoading: true,
            id: ""
        };
    }
    render() {
        return (
            <div className="article-panel">{
                this.state.isLoading ?
                    <Loading isLoading={this.state.isLoading}></Loading> :
                    <>
                        <Title>{this.state.article.title}</Title>
                        <Space size="large">
                            <Text type="secondary">{this.state.article.date}</Text>
                            <Space>
                                {this.state.article?.tags.map((ele: string) => (
                                    <Tag key={Math.random()}>{ele}</Tag>
                                ))}
                            </Space>
                        </Space>
                        <ArticleContent content={this.state.article.content}></ArticleContent>
                    </>
            }
            </div>
        )
    }

    componentDidMount() {
        ApiUtil.Get(
            `${Constant.URL_ARTICLE}?id=${this.props.match.params.id}`,
            (res: ResponseModel) => {
                this.setState({
                    article: res.article
                }, () => {
                    this.setState({
                        isLoading: false
                    })
                })
            })
    }
    
    componentWillReceiveProps(nextProps: IProps) {
        if (this.props?.match?.params?.id === undefined ||
            this.props.match.params.id !== nextProps.match.params.id) {
            console.log("1");
            this.setState({
                id: nextProps.match.params.id
            }, () => {
                ApiUtil.Get(`${Constant.URL_SEARCH}/${this.state.id}`,
                    (res: ResponseModel) => {
                        this.setState({
                            article: res.article
                        }, () => this.setState({ isLoading: false }))
                    })
            })
        }
    }
}


interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> {
}
export interface IState {
    article: ArticleModel,
    isLoading: boolean,
    id: string
}