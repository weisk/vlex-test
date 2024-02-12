import React from 'react';
import { Layout, Flex } from 'antd';

import JurisdictionSelector from '../JurisdictionSelector/JurisdictionSelector';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4169e1',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  // color: '#fff',
  backgroundColor: '#f8f9fa',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4169e1',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};


const App: React.FC = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Browse Jurisdictions</Header>

        <Content style={contentStyle}>
          <JurisdictionSelector />
        </Content>

        <Footer style={footerStyle}>vLex</Footer>
      </Layout>
     </Flex>
  );
};

export default App;
