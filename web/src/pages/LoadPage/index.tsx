import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import conf from '../../Config'

const LoadPage = () => {
    const { Header, Footer, Content } = Layout;
    return (
        <Layout className="components-layout-demo">
            <Header>{conf.appName}</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default LoadPage