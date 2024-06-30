"use client";

import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';
import React, { useState } from 'react';

const SwitchTheme: React.FC = () => {
    const [primary, setPrimary] = useState<string>('#1677ff');

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primary,
                },
                components: {
                    ColorPicker: {
                        colorBgContainer: '#fdc6cc',
                    },
                    Button: {
                        colorBgContainer: '#000', // Black background color for Button
                    },
                    Input: {
                        colorText: '#666', // Grey text color for Input
                        colorBgContainer: '#fff', // White background color for Input
                    },
                    
                },
            }}
        >
            <>
                <div style={{ backgroundColor: '#fff', padding: '10px' }}>
                    <ColorPicker
                        showText
                        value={primary}
                        onChangeComplete={(color) => setPrimary(color.toHexString())}
                    />
                </div>
                <Divider />
                <Space>
                    <Input placeholder="Please Input" />
                    <Button type="primary">Submit</Button>
                </Space>
            </>
        </ConfigProvider>
    );
}

export default SwitchTheme;
