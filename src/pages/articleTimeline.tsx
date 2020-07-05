import { Spin, Timeline } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { ResponseModel } from '../models/responseModel';
import { TimelineNodeModel } from '../models/timelineNodeModel';
import { ApiUtil } from '../utils/apiUtil';
import { Constant } from '../utils/constants';

export class ArticleTimeline extends React.Component<IProps, IState> {

    render() {
        return (
            <div>
                {
                    this.state && this.state.timeline ?
                        <Timeline mode="left">
                            {
                                this.state.timeline.map((ele: TimelineNodeModel) => {
                                    return (
                                        <Timeline.Item label={ele.blogDate} key={new Date().getUTCMilliseconds() + Math.random()}>{ele.title}</Timeline.Item>
                                    )
                                })
                            }
                        </Timeline> :
                        <Spin size="large" />
                }
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        let url: string = Constant.URL_TIMELINE;
        if (this.props.match.params.id) {
            url = `${Constant.URL_TIMELINE}?year=${this.props.match.params.id}`
        }
        ApiUtil.Get(url,
            (res: ResponseModel) => {
                this.setState({
                    timeline: res.timeLine
                })
            })
    }
}
interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> { }
export interface IState {
    timeline: TimelineNodeModel[]
}