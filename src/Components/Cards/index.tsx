import { Box } from '@mui/system'
import React from 'react'
import CardItem from './CardItem'
import { Wrapper } from './styles'
const Cards = () => {
  return (
    <Wrapper>
      <CardItem title="SHOPDI CHÀO BẠN MỚI - TẢI APP NHẬN SHOPDIXU!">Số lượng có hạn! Bạn mới gia nhập Shopdi nhận ngay 15k Shopdi Xu (tương đương 15k) khi hoàn thiện thông tin cá nhân tại tài khoản Shopdi. </CardItem>
      <CardItem title="MƯA GIÁ 0Đ ">Cơn mưa giá 0Đ ngang qua Shopdi và chưa có dấu hiệu dừng lại! Cơ hội vừa sở hữu cực phẩm giá 0Đ, vừa nhận giải thưởng tiền mặt tương đương giá gốc sản phẩm, còn chần chờ gì mà không “ùa vào săn giá” ngay và luôn bạn ơi!</CardItem>
    </Wrapper>
  )
}

export default Cards