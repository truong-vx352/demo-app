import { Typography, Box } from '@mui/material'
import React from 'react'
import Cards from '../../../Components/Cards'
import RankingTable from '../../../Components/RankingTable'
import { Wrapper } from './styles'
const RewardsSection = () => {
  return (
    <Wrapper>
      <Typography variant='body2' className='text-center' style={{ fontWeight: "bold" }}>Chương trình</Typography>
      <Typography variant='h2' className='text-center rewards__title'>SHOPDI CHIÊU ĐÃI NGƯỜI DÙNG NHIỀU CHƯƠNG TRÌNH HẤP DẪN</Typography>
      <Typography variant='body1' className='text-center rewards__notice'>ĐƯỢC CẬP NHẬT THƯỜNG XUYÊN</Typography>
      <Box className="rewards__ranking">
        <RankingTable />
      </Box>
      <Typography variant="h3" className="text-center rewards__title--second">Ưu đãi hấp dẫn, tham gia ngay</Typography>
      <Cards />
    </Wrapper>
  )
}

export default RewardsSection