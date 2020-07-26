import React from 'react'
import { List } from 'antd'
import { SearchResultModel } from '../models/searchResultModel';
import { Loading } from '../components/loading';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';
import { ResponseModel } from '../models/responseModel';
import { RouteComponentProps } from 'react-router';
import { HyperLink } from '../components/hyperLink';

export class SearchResult extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        console.log("create search");
        this.state = {
            searchResult: [],
            isLoading: true,
            filter: ""
        }
    }
    render() {
        return (
            <>
                {
                    this.state.isLoading ?
                        <Loading isLoading={this.state.isLoading}></Loading> :
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={this.state.searchResult}
                            renderItem={
                                item => (
                                    < List.Item
                                        key={item.id}>
                                        <List.Item.Meta
                                            title={<HyperLink href={`/article/${item.id}`} text={item.title}></HyperLink>}
                                            description={item.summary} />
                                        {item.content}
                                    </ List.Item>
                                )
                            }></List >
                }
            </>
        );
    }
    componentDidMount() {
        ApiUtil.Get(`${Constant.URL_SEARCH}/${this.props.match.params.filter}`,
            (res: ResponseModel) => {
                this.setState({
                    searchResult: res.searchResult
                }, () => this.setState({ isLoading: false }))
            })
    }
    componentWillReceiveProps(nextProps: IProps) {
        if (this.props?.match?.params?.filter === undefined ||
            this.props.match.params.filter !== nextProps.match.params.filter) {
            this.setState({
                filter: nextProps.match.params.filter
            }, () => {
                ApiUtil.Get(`${Constant.URL_SEARCH}/${this.state.filter}`,
                    (res: ResponseModel) => {
                        this.setState({
                            searchResult: res.searchResult
                        }, () => this.setState({ isLoading: false }))
                    })
            })
        }
    }
}
export interface MatchParams {
    filter: string
}
export interface IProps extends RouteComponentProps<MatchParams> { }
export interface IState {
    searchResult: SearchResultModel[],
    isLoading: boolean,
    filter: string
}