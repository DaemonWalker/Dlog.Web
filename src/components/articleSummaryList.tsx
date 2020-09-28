import React from 'react';
import { ArticleSummaryModel } from '../models/articleSummaryModel';
import { Avatar, List } from 'antd';
import { ArticleStatics } from '../components/articleStatics';
import MyAvatar from '../contents/avatar/me.jpg';
import { EyeOutlined } from '@ant-design/icons';
import { ImageUtil } from '../utils/imageUtil'
import { Loading } from './loading';
import { HyperLink } from '../components/hyperLink';

export class ArticleSummaryList extends React.Component<IProps> {
    render() {
        return (
            <>
                {
                    this.props.articleSummaries !== undefined && this.props.articleSummaries.length > 0 ?
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page: number) => {
                                    console.log(page);
                                },
                                pageSize: 10,
                                hideOnSinglePage: true
                            }}
                            locale={{
                                emptyText: "暂无数据"
                            }}
                            dataSource={this.props.articleSummaries}
                            renderItem={(item: ArticleSummaryModel) => (
                                <List.Item
                                    key={item.title}
                                    actions={[
                                        <ArticleStatics icon={EyeOutlined} number={item.seen} key="list-vertical-star-o" />
                                    ]}
                                    extra={
                                        <img
                                            style={{
                                                maxHeight: 112
                                            }}
                                            alt="logo"
                                            src={ImageUtil.getImagePath(item.cover)}
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={MyAvatar} />}
                                        title={<HyperLink href={`/article/${item.url}`} text={item.title} />} />
                                    {item.summary}
                                </List.Item>
                            )}
                        />
                        :
                        <Loading isLoading={this.props.isLoading}></Loading>
                }
            </>
        );
    }
}

export interface IProps {
    articleSummaries: ArticleSummaryModel[],
    isLoading: boolean
}
