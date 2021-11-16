import { useState } from "react";
import { Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { HashRouter as Router, Link } from "react-router-dom";
import "./App.less";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: any) => {
    setCollapsed(collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className='logo' />
          <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
            <Menu.Item key='1' icon={<PieChartOutlined />}>
              {/* Vite 应用 */}
              <Link to='/micro-app-react'>react应用</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<DesktopOutlined />}>
              <Link to='/micro-app-vue2'>vue2应用</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<DesktopOutlined />}>
              <Link to='/micro-app-vue3'>vue3应用</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }} />
          <Content style={{ margin: "16px" }}>
            <div
              id='container'
              className='site-layout-background'
              style={{ minHeight: 360 }}
            ></div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            This Project ©2021 Created by frontend-trainee
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
