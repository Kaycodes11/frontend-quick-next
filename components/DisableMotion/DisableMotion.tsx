"use client";

import React from 'react';
import { Checkbox, Col, ConfigProvider, Flex, Radio, Row, Switch } from 'antd';

const DisableMotion: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const timerRef = React.useRef<ReturnType<typeof setInterval>>();
  
  // {/* Yes, `setInterval` inside `useEffect` will make the effect run repeatedly every 500ms regardless of dependencies specified in the dependency array. */}
  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setChecked((prev) => !prev);
    }, 500);
    // Agreed, the component toggles menus every 500 milliseconds on mount and stops on unmount, reload, or leaving the component.
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const nodes = (
    <Flex gap="small">
      <Checkbox checked={checked}>Checkbox</Checkbox>
      <Radio checked={checked}>Radio</Radio>
      <Switch checked={checked} />
    </Flex>
  );

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>{nodes}</Col>
      <Col span={24}>
        <ConfigProvider theme={{ token: { motion: false } }}>{nodes}</ConfigProvider>
      </Col>
    </Row>
  );
};

export default DisableMotion;