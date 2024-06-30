"use client";

import React, { useState } from "react";
import { ConfigProvider, Button, Space, Input } from "antd";
import { theme } from "antd";

const { darkAlgorithm, compactAlgorithm } = theme;

const DarkLightThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Define dark and light theme configurations
  const darkTheme = {
    algorithm: [darkAlgorithm, compactAlgorithm],
    token: {
      colorPrimary: "#1890ff", // Adjust colors for dark mode
      colorText: "#fff",
      backgroundColor: "#333",
    },
  };

  const lightTheme = {
    algorithm: [],
    token: {
      colorPrimary: "#1890ff", // Adjust colors for light mode
      colorText: "#000",
      backgroundColor: "#fff",
    },
  };

  const themeConfig = darkMode ? darkTheme : lightTheme;

  return (
    <ConfigProvider theme={themeConfig}>
      <Space>
        <Input placeholder="Enter your name" />
        <Button type="primary">Submit</Button>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
      </Space>
    </ConfigProvider>
  );
};

export default DarkLightThemeToggle;
