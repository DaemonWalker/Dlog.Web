
import React from 'react';
import { ResponseModel } from '../models/responseModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ArticleSummaryModel } from '../models/articleSummaryModel';
import { ArticleSummaryList } from '../components/articleSummaryList'
import { Loading } from '../components/loading';

export class Home extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            listData: [],
            isLoading: true
        };
    }
    render() {
        return (
            <>
                <ArticleSummaryList articleSummaries={this.state.listData} isLoading={this.state.isLoading}></ArticleSummaryList>
            </>
        )
    }

    componentDidMount() {
        ApiUtil.Get(Constant.URL_INDEX_LIST,
            (res: ResponseModel) => {
                this.setState({
                    listData: res.articleSummaries
                }, () => {
                    this.setState({
                        isLoading: false
                    })
                })
            },
            (err: any) => {

            })
    }
}

export interface IProps { }
export interface IState {
    listData: ArticleSummaryModel[],
    isLoading: boolean
}