import React from 'react'
import { Wrapper } from './styles'
import { Box, Typography } from '@mui/material'
interface Props {
  children?: React.ReactNode;
  title?: string;
}
const CardItem: React.FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Box className="card-item__img-wrapper"></Box>
      <Box className="card-item__content-wrapper">
        <Typography className="card-item__title">{title}</Typography>
        <Typography className="card-item__desc">{children}</Typography>
        <Box className="card-item__footer">
          <Typography variant="body1" className="end-date">Ngày hết hạn: 30/12/2022</Typography>
          <Typography variant="body1" className="link-detail">Xem chi tiết</Typography>
        </Box>
      </Box>
    </Wrapper>
  )
}

export default CardItem