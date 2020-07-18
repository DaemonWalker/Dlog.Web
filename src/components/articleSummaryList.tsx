import React from 'react';
import { ArticleSummaryModel } from '../models/articleSummaryModel';
import { Avatar, List } from 'antd';
import { ArticleStatics } from '../components/articleStatics';
import MyAvatar from '../contents/avatar/me.jpg';
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { ImageUtil } from '../utils/imageUtil'

export class ArticleSummaryList extends React.Component<IProps> {
    render() {
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page: number) => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={this.props.articleSummaries}
                renderItem={(item: ArticleSummaryModel) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <ArticleStatics icon={EyeOutlined} number={item.seen} key="list-vertical-star-o" />,
                            <ArticleStatics icon={LikeOutlined} number={item.likes} key="list-vertical-like-o" />,
                            <ArticleStatics icon={MessageOutlined} number={item.comments} key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={ImageUtil.getSummary(item.url)}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={MyAvatar} />}
                            title={<a href={`article/${item.url}`}>{item.title}</a>} />
                        {item.summary}
                    </List.Item>
                )}
            />);
    }
}

export interface IProps {
    articleSummaries: ArticleSummaryModel[]
}