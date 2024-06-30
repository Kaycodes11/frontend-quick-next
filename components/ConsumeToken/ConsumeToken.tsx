"use client";

import React from 'react';
import { theme } from 'antd';

const { useToken } = theme;

const ConsumeToken: React.FC = () => {
    // Uses `useToken` from Ant Design's theme to access global design tokens set by <ConfigProvider>.

    // Meaning, Any value is assigned or used within <ConfigProvider /> no matter how or where, will be avialable to use via useToken() like below

    const { token } = useToken();
    console.info("token", token);

    return (
        <div
            style={{
                backgroundColor: token.colorPrimaryBg,
                padding: token.padding,
                borderRadius: token.borderRadius,
                color: token.colorPrimaryText,
                fontSize: token.fontSize,
            }}
        >
            Consume Design Token
        </div>
    );
};

export default ConsumeToken;


// static consume (i.e. without using the hook) as below 


/*

import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
import { createRoot } from 'react-dom/client';

const { getDesignToken, useToken } = theme;

const config: ThemeConfig = {
  token: {
    colorPrimary: '#1890ff',
  },
};

// By static function
const globalToken = getDesignToken(config);

// By hook
const App = () => {
  const { token } = useToken();
  return null;
};

// Example for rendering
createRoot(document.getElementById('#app')).render(
  <ConfigProvider theme={config}>
    <App />
  </ConfigProvider>,
);

*/