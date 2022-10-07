import { Box, Typography } from '@mui/material';
import React from 'react'
import { Wrapper } from './styles'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <Wrapper>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography variant='body1'>{children}</Typography>
          </Box>
        )}
      </div>
    </Wrapper>
  )
}

export default TabPanel