import React from 'react'
import { RouteComponentProps } from 'react-router';
import { Typography } from 'antd';
import GenerateArticle from '../utils/bullShit'
import { PageTitle } from '../components/pageTitle';
const { Title } = Typography;
const { Paragraph } = Typography;
export class Diary extends React.Component<IProps>{
    render() {
        return (
            <div>
                <PageTitle title={this.props.match.params.id} description={`this is the knowledge of ${this.props.match.params.id}`}></PageTitle>
                <Title>{this.props.match.params.id}</Title>
                {GenerateArticle(this.props.match.params.id).map((ele: string) => (
                    <Paragraph>
                        {ele}
                    </Paragraph>
                ))}
            </div>
        )
    }
}

export interface MatchParams {
    id: string;
}
export interface IProps extends RouteComponentProps<MatchParams> {

}