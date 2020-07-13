import React from 'react';
import { Article } from '../pages/article';
import { ArticleTimeline } from '../pages/articleTimeline';
import { Home } from '../pages/home';
import { Tags } from '../pages/tags';
import { BrowserRouter, Route, Switch } from "react-router-dom";

export class GlobalRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={(props)=>(<Home {...props} key="Home"></Home>)} component={Home} />
                    <Route path="/tags/:id?" render={(props)=>(<Tags {...props} key="Tags"></Tags>)} key="Tags"/>
                    <Route path="/article/:id?" render={(props)=>(<Article {...props} key="Home"></Article>)} key="Article"/>
                    <Route path="/timeline/:id" component={ArticleTimeline} key="ArticleTimeline"/>
                </Switch>
            </BrowserRouter>
        );
    }
}