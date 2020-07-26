import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ArticleSummaryModel } from '../models/articleSummaryModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ResponseModel } from '../models/responseModel';
import { ArticleSummaryList } from '../components/articleSummaryList';

export class Tags extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            articles: [],
            isLoading: true
        };
    }
    render() {
        return (
            <ArticleSummaryList articleSummaries={this.state.articles} isLoading={this.state.isLoading}></ArticleSummaryList>
        )
    }

    componentDidMount() {
        ApiUtil.Post(Constant.URL_TAGARTICLES,
            this.props.match.params.id,
            (res: ResponseModel) => {
                this.setState({
                    articles: res.articleSummaries
                }, () => {
                    this.setState({
                        isLoading: false
                    })
                })
            });
    }
}
interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> { }
export interface IState {
    articles: ArticleSummaryModel[],
    isLoading: boolean
}