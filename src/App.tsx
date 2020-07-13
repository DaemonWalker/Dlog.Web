import { GithubOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Navbar } from './components/navbar';
import { NavDataModel } from './models/navDataModel';
import { ResponseModel } from './models/responseModel';
import './styles/app.css';
import { ApiUtil } from './utils/apiUtil';
import { Constant } from './utils/constants';
import { GlobalRouter } from './components/globalRouter'

const { Header, Content, Footer } = Layout;

class App extends React.Component<IProps, IState> {
  render() {
    return (
      <Layout className="App">
        {
          this.state && this.state.navData &&
          <Navbar data={this.state.navData} />
        }
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background app-container" style={{ padding: 24, minHeight: 360 }}>
              <GlobalRouter></GlobalRouter>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <p>
              <a href="https://github.com/DaemonWalker"><GithubOutlined style={{ fontSize: '3em' }} /></a>
            </p>
            <p>
              {`© ${new Date().getFullYear()} Daemon Walker`}
            </p>
            <p>
              Powered by
                <a href="https://react.docschina.org/">React</a>
              <a href="https://ant.design/index-cn">Ant Desgin(antd)</a>
              <a href="https://dotnet.microsoft.com/">.Net Core</a>
              <a href="https://www.cenhrefs.org/">CenhrefS</a>
              <a href="https://www.docker.com/">Docker</a>
            </p>
            <p>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo">辽ICP备16008708号-1</a>
            </p>
          </Footer>
        </Layout>
      </Layout>
    );
  }

  componentDidMount() {
    ApiUtil.Get(
      Constant.URL_NAV,
      (res: ResponseModel) => {
        this.setState({
          navData: res.navData
        })
      });
  }
}

export interface IProps { }
export interface IState {
  navData: NavDataModel
  collapsed: boolean
}

export default App;


