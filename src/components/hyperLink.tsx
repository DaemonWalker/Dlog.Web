import React from 'react'
import { Link } from 'react-router-dom';
export class HyperLink extends React.Component<IProps> {
    render() {
        return (
            <Link to={encodeURI(this.props.href)} target={this.props.target}>{this.props.text}</Link>
        );
    }
}
const defultProps = {
    target: ""
}

type IProps = {
    href: string;
    text: any;
} & Partial<typeof defultProps>