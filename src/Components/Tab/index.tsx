import React from 'react'
import TabPanel from './TabPanel';
import { Box, Tabs, Tab, Typography, useMediaQuery } from '@mui/material';
import { Wrapper } from './styles';
const BaseTab = () => {
  const isMobile = useMediaQuery('(max-width:719px)');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <Wrapper>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="ranking__tab-wrapper"
        TabIndicatorProps={{ style: { display: "none" } }}
      >
        <Tab label={isMobile ? "Xếp hạng tổng" : "Đường đua Shopdi Connector"} {...a11yProps(0)} />
        <Tab label="Thánh chốt đơn" {...a11yProps(1)} />
        <Tab label="Sự kiện tháng 7" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Đường đua Shopdi Connector được cập nhật mỗi tháng. Hãy cùng nhìn lại các tay đua Shopdi Connector giai đoạn 1/9 - 30/9/2022 nhé!
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Wrapper>
  )
}

export default BaseTab;