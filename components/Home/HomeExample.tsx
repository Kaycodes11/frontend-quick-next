"use client";

import React from 'react';
import InheritStyles from '../InheritStyles/InheritStyles';
import { Button, ConfigProvider, Divider, Input, Space, theme } from "antd"
// import DisableMotion from './DisableMotion';
import SwitchTheme from '../SwitchTheme/SwitchTheme';
import NestedTheme from '../NestedTheme/NestedTheme';
import ConsumeToken from '../ConsumeToken/ConsumeToken';

const HomeExample: React.FC = () => {

    //  Seed Token: Defines global styles or commonly used parameters across the application, such as primary colors or general spacing.

    // Map token names should relate to seed token names, but their values can vary independently.

    // Alias token names can be arbitrary, but they use existing values from seed or map tokens.
    
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    // Seed Token

                    // Correct, the color `#f6ffed` does not apply to `<Button type="primary">Primary</Button>` as it uses its own color `#0096FF`.
                    colorPrimary: '#0096FF',
                    borderRadius: 2,

                    // Alias Token

                    // The colorBgContainer token sets the background color for all container elements within the <ConfigProvider>, not just for the primary <Button>.
                    colorBgContainer: '#f6ffed',
                },
                // within this `ConfigProvider`, any `<Button>` (local or children i.e. imported & used within this `ConfigProvider`) the below style will apply for Button (unless off course overwritten within children e.g. <Sample />).
                components: {
                    Button: {
                        colorText: '#000',  // Default button text color
                        colorBgContainer: '#fff',  // Default button background color
                    },
                },
            }}
        >
            <Space>
                <Input placeholder="enter name" />
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
            </Space>
            {/* Alternative for the </hr> */}
            <Divider />
            <InheritStyles />
            <Divider />
            {/* <DisableMotion /> */}
            <SwitchTheme />
            <Divider />
            <NestedTheme />
            <Divider />
            <ConsumeToken />
        </ConfigProvider>
    );
}


export default HomeExample;