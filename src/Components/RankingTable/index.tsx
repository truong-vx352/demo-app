import React from 'react';
import { Wrapper } from './styles';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BaseTab from '../Tab'
import Images from "../../Theme/Images";

type participant_info = {
  username: string;
  point: string;
}
function createData(
  rank: string,
  participant: participant_info,
  reward: string
) {
  return { rank, participant, reward };
}

const rows = [
  createData('1', { username: "@user123", point: "2.000.000 shopdi" }, "Iphone 14 Pro Max"),
  createData('2', { username: "@user1234", point: "3.000.000 shopdi" }, "Iphone 13 Pro Max"),
  createData('3', { username: "@user12356", point: "4.000.000 shopdi" }, "Iphone 12 Pro Max"),
];

const RankingTable = () => {
  return (
    <Wrapper>
      <Box className="ranking_image-wrapper">
        <img src={Images.ranking_cup} alt="" />
      </Box>
      <BaseTab />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 320 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Hạng</TableCell>
              <TableCell>Người tham gia</TableCell>
              <TableCell align="right">Phần thưởng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.rank}>
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell>
                  <Box>
                    {row.participant.username}
                  </Box>
                </TableCell>
                <TableCell align="right">{row.reward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  )
}

export default RankingTable