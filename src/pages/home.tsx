
import React from 'react';
import { ResponseModel } from '../models/responseModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ArticleSummaryModel } from '../models/articleSummaryModel';
import { ArticleSummaryList } from '../components/articleSummaryList'

export class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { listData: [] };
    }
    render() {
        return (
            <ArticleSummaryList articleSummaries={this.state.listData}></ArticleSummaryList>
        )
    }

    componentDidMount() {
        ApiUtil.Get(Constant.URL_INDEX_LIST,
            (res: ResponseModel) => {
                this.setState({
                    listData: res.articleSummaries
                })
            },
            (err: any) => {

            })
    }
}

export interface IProps { }
export interface IState {
    listData: ArticleSummaryModel[];
}