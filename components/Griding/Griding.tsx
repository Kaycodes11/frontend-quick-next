"use default";

// https://ant.design/components/grid

import React from 'react';
import { Col, Divider, Row, Slider, Grid, Tag } from 'antd';

const BaseGrid: React.FC = () => {
  const columnStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#6e7f80',
    border: '1px solid #ccc',
    textAlign: 'center', // Optional: Center align text for better readability
  };

  return (
    <div style={{ margin: '20px' }}>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={24} style={columnStyle}>col</Col>
      </Row>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={12} style={columnStyle}>col-12</Col>
        <Col span={12} style={columnStyle}>col-12</Col>
      </Row>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={8} style={columnStyle}>col-8</Col>
        <Col span={8} style={columnStyle}>col-8</Col>
        <Col span={8} style={columnStyle}>col-8</Col>
      </Row>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={6} style={columnStyle}>col-6</Col>
        <Col span={6} style={columnStyle}>col-6</Col>
        <Col span={6} style={columnStyle}>col-6</Col>
        <Col span={6} style={columnStyle}>col-6</Col>
      </Row>
    </div>
  );
};

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const GridGutter: React.FC = () => (
  <>
    <Divider orientation="left">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>

    <Divider orientation="left">Responsive</Divider>

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>

    <Divider orientation="left">Vertical</Divider>

    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>

  </>
);

const OffsetColumn: React.FC = () => {
  const columnStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#2ab4b4',
    border: '1px solid #ccc',
  };

  return (
    <div style={{ margin: '20px' }}>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={8} style={columnStyle}>col-8a</Col>
        <Col span={8} offset={8} style={columnStyle}>
          col-8b
        </Col>
      </Row>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={6} offset={6} style={columnStyle}>
          col-6 col-offset-6
        </Col>
        <Col span={6} offset={6} style={columnStyle}>
          col-6 col-offset-6
        </Col>
      </Row>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={12} offset={6} style={columnStyle}>
          col-12 col-offset-6
        </Col>
      </Row>
    </div>
  );
};

const PushPull: React.FC = () => {
  const columnStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
  };

  return (
    <div style={{ margin: '20px' }}>
      <Row style={{ marginBottom: '10px' }}>
        <Col span={18} push={6} style={columnStyle}>
          col-18 col-push-6
        </Col>
        <Col span={6} pull={18} style={columnStyle}>
          col-6 col-pull-18
        </Col>
      </Row>
    </div>
  );
};

// Horizontal Alignment
const HorizontalAlign: React.FC = () => {
  const columnStyle: React.CSSProperties = {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    textAlign: 'center', // Optional: Center align text for better readability
  };

  const rowStyle: React.CSSProperties = {
    marginBottom: '10px',
  };

  return (
    <div style={{ margin: '20px' }}>
      <Divider orientation="left">sub-element align left</Divider>
      <Row justify="start" style={rowStyle}>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
      </Row>

      <Divider orientation="left">sub-element align center</Divider>
      <Row justify="center" style={rowStyle}>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
      </Row>

      <Divider orientation="left">sub-element align right</Divider>
      <Row justify="end" style={rowStyle}>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
      </Row>

      <Divider orientation="left">sub-element monospaced arrangement</Divider>
      <Row justify="space-between" style={rowStyle}>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
      </Row>

      <Divider orientation="left">sub-element align full</Divider>
      <Row justify="space-around" style={rowStyle}>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
      </Row>

      <Divider orientation="left">sub-element align evenly</Divider>
      <Row justify="space-evenly" style={rowStyle}>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
        <Col span={4} style={columnStyle}>col-4</Col>
      </Row>
    </div>
  );
};

// Vertical alignment
const DemoBox: React.FC<React.PropsWithChildren<{ value: number }>> = (props) => {
  const boxStyle: React.CSSProperties = {
    height: `${props.value}px`,
    backgroundColor: '#e6f7ff', // Light blue background for better visibility
    border: '1px solid #91d5ff', // Slightly darker border
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '10px', // Margin bottom for spacing between rows
  };
  return <div style={boxStyle}>{props.children}</div>;
};

const VerticalAlign: React.FC = () => {
  const rowStyle: React.CSSProperties = {
    marginBottom: '20px',
  };

  return (
    <div style={{ margin: '20px' }}>
      <Divider orientation="left">Align Top</Divider>
      <Row justify="center" align="top" style={rowStyle}>
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>

      <Divider orientation="left">Align Middle</Divider>
      <Row justify="space-around" align="middle" style={rowStyle}>
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>

      <Divider orientation="left">Align Bottom</Divider>
      <Row justify="space-between" align="bottom" style={rowStyle}>
        <Col span={4}>
          <DemoBox value={100}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={50}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={120}>col-4</DemoBox>
        </Col>
        <Col span={4}>
          <DemoBox value={80}>col-4</DemoBox>
        </Col>
      </Row>
    </div>
  );
};


const boxStyle: React.CSSProperties = {
  backgroundColor: '#e6f7ff',
  border: '1px solid #91d5ff',
  padding: '8px',
  textAlign: 'center',
  marginBottom: '10px',
  height: '100%', // Ensure full height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Stretch: React.FC = () => (
  <div style={{ margin: '20px' }}>
    <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={2}>
        <div style={boxStyle}>2 / 5</div>
      </Col>
      <Col flex={3}>
        <div style={boxStyle}>3 / 5</div>
      </Col>
    </Row>

    <Divider orientation="left">Fill rest</Divider>
    <Row>
      <Col flex="100px">
        <div style={boxStyle}>100px</div>
      </Col>
      <Col flex="auto">
        <div style={boxStyle}>Fill Rest</div>
      </Col>
    </Row>

    <Divider orientation="left">Raw flex style</Divider>
    <Row>
      <Col flex="1 1 200px">
        <div style={boxStyle}>1 1 200px</div>
      </Col>
      <Col flex="0 1 300px">
        <div style={boxStyle}>0 1 300px</div>
      </Col>
    </Row>

    <Divider orientation="left">No-wrap</Divider>
    {/* <Row wrap={false} style={{ height: '100px' }}>
      <Col flex="none">
        <div style={{ ...boxStyle, padding: '0 16px', height: '100%' }}>none</div>
      </Col>
      <Col flex="auto">
        <div style={boxStyle}>auto with no-wrap</div>
      </Col>
    </Row> */}
    <Row wrap={false} style={{ height: "100px", background: "red", gap: "0.25rem" }}>
      <Col flex="none">
        <div style={{ padding: '0 16px', background: "green", height: "100%" }}>none</div>
      </Col>
      <Col flex="auto">
        <div style={{ padding: '0 16px', background: "lightgreen", height: "100%" }}>auto with no-wrap</div>
      </Col>
    </Row>
  </div>
);

const FlexStrech: React.FC = () => {
  const boxStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    border: '1px solid #91d5ff',
    textAlign: 'center',
    height: '100%', // Ensure full height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  };
  return (
    <div style={{ margin: '20px' }}>
      <Divider orientation="left">Percentage columns</Divider>
      <Row>
        <Col flex={2}>
          <div style={boxStyle}>2 / 5</div>
        </Col>
        <Col flex={3}>
          <div style={boxStyle}>3 / 5</div>
        </Col>
      </Row>
      <Divider orientation="left">Fill rest</Divider>
      <Row>
        <Col flex="100px">
          <div style={boxStyle}>100px</div>
        </Col>
        <Col flex="auto">
          <div style={boxStyle}>Fill Rest</div>
        </Col>
      </Row>
      <Divider orientation="left">Raw flex style</Divider>
      <Row>
        <Col flex="1 1 200px">
          <div style={boxStyle}>1 1 200px</div>
        </Col>
        <Col flex="0 1 300px">
          <div style={boxStyle}>0 1 300px</div>
        </Col>
      </Row>

      <Divider orientation="left">No-wrap</Divider>
      <Row wrap={false} style={{ height: '100px' }}>
        <Col flex="none" style={{ height: '100%' }}>
          <div style={{ ...boxStyle, padding: '0 16px' }}>none</div>
        </Col>
        <Col flex="auto" style={{ height: '100%' }}>
          <div style={boxStyle}>auto with no-wrap</div>
        </Col>
      </Row>
    </div>
  )
};


const ResponsiveStretch: React.FC = () => {
  const colStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    border: '1px solid #91d5ff',
    textAlign: 'center',
    height: '100%', // Ensure full height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  };

  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} style={colStyle}>
        Col
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} style={colStyle}>
        Col
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} style={colStyle}>
        Col
      </Col>
    </Row>
  );
};


const FlexResponsive: React.FC = () => {
  const colStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    border: '1px solid #91d5ff',
    textAlign: 'center',
    height: '100%', // Ensure full height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  };

  return (
    <Row>
      {new Array(10).fill(0).map((_, index) => {
        const key = `col-${index}`;
        return (
          <Col
            key={key}
            xs={{ flex: '100%' }}
            sm={{ flex: '50%' }}
            md={{ flex: '40%' }}
            lg={{ flex: '20%' }}
            xl={{ flex: '10%' }}
            style={colStyle}
          >
            Col
          </Col>
        );
      })}
    </Row>
  );
};

const MoreControlOnResponsiveness: React.FC = () => {
  const colStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    border: '1px solid #91d5ff',
    textAlign: 'center',
    height: '100%', // Ensure full height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  };

  return (
    <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={colStyle}>
        Col
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} style={colStyle}>
        Col
      </Col>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={colStyle}>
        Col
      </Col>
    </Row>
  );
};

// Dynamic no. of columns with gutters
const gutters: Record<PropertyKey, number> = {};
const vgutters: Record<PropertyKey, number> = {};
const colCounts: Record<PropertyKey, number> = {};

[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

const DynamicColWithGutters: React.FC = () => {
  const colStyle: React.CSSProperties = {
    backgroundColor: '#e6f7ff',
    border: '1px solid #91d5ff',
    textAlign: 'center',
    height: '100%', // Ensure full height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  };
  const [gutterKey, setGutterKey] = React.useState(1);
  const [vgutterKey, setVgutterKey] = React.useState(1);
  const [colCountKey, setColCountKey] = React.useState(2);

  const cols = [];
  const colCount = colCounts[colCountKey];
  let colCode = '';
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount} style={colStyle}>
        <div>Column</div>
      </Col>,
    );
    colCode += `  <Col span={${24 / colCount}} />\n`;
  }

  return (
    <>
      <span>Horizontal Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={setGutterKey}
          marks={gutters}
          step={null}
          tooltip={{ formatter: (value) => gutters[value as number] }}
        />
      </div>
      <span>Vertical Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={setVgutterKey}
          marks={vgutters}
          step={null}
          tooltip={{ formatter: (value) => vgutters[value as number] }}
        />
      </div>
      <span>Column Count:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tooltip={{ formatter: (value) => colCounts[value as number] }}
        />
      </div>
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
        {cols}
        {cols}
      </Row>
      Another Row:
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
      <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
      <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
    </>
  );
};


const { useBreakpoint } = Grid;

const BreakPoint: React.FC = () => {
  const screens = useBreakpoint();

  const tagStyle: React.CSSProperties = {
    margin: '4px',
    padding: '4px 8px',
    fontSize: '14px',
  };

  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]} style={tagStyle}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
};

const Griding: React.FC = () => {
  return (
    <>
      <BaseGrid />
      <Divider />
      <GridGutter />
      <Divider />
      <OffsetColumn />
      <Divider />
      <PushPull />
      <Divider />
      <HorizontalAlign />
      <Divider />
      <VerticalAlign />
      <Divider />
      <Stretch />
      <Divider />
      <FlexStrech />
      <Divider />
      <ResponsiveStretch />
      <Divider />
      <FlexResponsive />
      <Divider />
      <MoreControlOnResponsiveness />
      <Divider />
      <DynamicColWithGutters />
    </>
  )
}

export default Griding;