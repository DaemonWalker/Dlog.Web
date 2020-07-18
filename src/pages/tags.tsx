import React from 'react';
import { Avatar, List } from 'antd';
import { RouteComponentProps } from 'react-router';
import { ArticleStatics } from '../components/articleStatics';
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { ArticleSummaryModel } from '../models/articleSummaryModel';
import MyAvatar from '../contents/avatar/me.jpg';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ResponseModel } from '../models/responseModel';
import { ArticleSummaryList } from '../components/articleSummaryList';

export class Tags extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = { articles: [] };
    }
    render() {
        return (
            <ArticleSummaryList articleSummaries={this.state.articles}></ArticleSummaryList>
        )
    }

    componentDidMount() {
        ApiUtil.Get(`${Constant.URL_TAGARTICLES}/${this.props.match.params.id}`,
            (res: ResponseModel) => {
                this.setState({
                    articles: res.articleSummaries
                })
            });
    }
}
interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> { }
export interface IState {
    articles: ArticleSummaryModel[];
}