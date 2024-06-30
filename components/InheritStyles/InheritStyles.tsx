"use client";

import React from 'react';
import { Button, ConfigProvider, Divider, Input, Space } from "antd";

export default function InheritStyles() {
    return (
        <>
            {/* Enable algorithm */}
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#00b96b',
                            // Enabling `algorithm: true` in `ConfigProvider` allows components to inherit styles from global or local configurations (or parent component), ensuring consistent styling across the application.
                            algorithm: true,
                        },
                        Input: {
                            colorPrimary: '#fff7e5',
                            colorBgContainer: '#fff', // Set background color to white
                            colorText: '#000', // Set text color to black
                            algorithm: true,
                        }
                    },
                }}
            >
                <Space>
                    <div style={{ fontSize: 14 }}>Enable algorithm: </div>
                    <Input placeholder="Please Input" />
                    <Button type="primary">Submit</Button>
                </Space>
            </ConfigProvider>

            <Divider />

            {/* Disable algorithm */}
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: '#00b96b',
                        },
                        Input: {
                            colorPrimary: '#eb2f96',
                            colorBgContainer: '#fff', // Set background color to white
                            colorText: '#000', // Set text color to black
                        }
                    },
                }}
            >
                <Space>
                    <div style={{ fontSize: 14 }}>Disable algorithm: </div>
                    <Input placeholder="Please Input" />
                    <Button type="primary">Submit</Button>
                </Space>
            </ConfigProvider>
        </>

    )
}


