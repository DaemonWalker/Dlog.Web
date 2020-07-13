import React, { PureComponent } from 'react';
import { PrismLight } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

export class CodeLigher extends PureComponent<IProps> {
    static default: IProps = {
        language: "csharp",
        value: ""
    }

    componentWillMount() {

    }

    render() {
        return (
            <figure className="highlight">
                <PrismLight language={this.props.language} style={vs}>
                    {this.props.value}
                </PrismLight>
            </figure>
        )
    }
}

export interface IProps {
    language: string;
    value: string;
}