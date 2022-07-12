// <!-- import * as React from 'react';
// import { useState, useEffect } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import useAuth from '../../../hooks/useAuth';
// // import TableRowAttendance from '../TableRowAttendance/TableRowAttendance';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// const AttendanceTable = () => {
//     const { user } = useAuth();
//     const [studentInformation, setStudentInformation] = useState([])
//     useEffect(() => {
//         const url = `https://secure-temple-79203.herokuapp.com/studentInfo`
//         // const url = `https://secure-temple-79203.herokuapp.com/studentInfo?email=${user.email}`
//         // const url = `https://secure-temple-79203.herokuapp.com/studentInfo?studentId=${studentInfo.studentId}`
//         // console.log(url);
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setStudentInformation(data));
//     }, [user.email])
//     const [totalSelectedCheckboxes, setTotalSelectedCheckboxes] = React.useState(0);
//     function handleChk() {
//         setTotalSelectedCheckboxes(document.querySelectorAll('input[type=checkbox]:checked').length);
//     }
//     useEffect(() => {
//         console.log(totalSelectedCheckboxes);
//     }, [totalSelectedCheckboxes]);

//     return (
//         <div style={{ height: '100%' }}>
//             <div style={{ color: 'white' }}>
//                 <h2 >Total Registered students: {studentInformation.length}</h2>
//             </div>
//             <TableContainer component={Paper} >
//                 <Table sx={{ minWidth: 650 }} aria-label="Attendance table" position="static">
//                     <TableHead>
//                         <TableRow>

//                             <TableCell sx={{ border: 2 }}>ID</TableCell>
//                             <TableCell sx={{ border: 2 }}>Name</TableCell>
//                             <TableCell sx={{ border: 2 }}>Total</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D1</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D2</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D3</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D4</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D5</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D6</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D7</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D8</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D9</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D10</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D11</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D12</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D13</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D14</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D15</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D16</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D17</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D18</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D19</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D20</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D21</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D22</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D23</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D24</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D25</TableCell>
//                             <TableCell align="right" sx={{ border: 2 }}>D26</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {studentInformation.map((row) => (
//                             <TableRow
//                                 key={row._id}
//                                 sx={{ border: 2 }}
//                             >
//                                 <TableCell component="th" scope="row" sx={{ border: 2 }} >
//                                     {row.studentId}
//                                 </TableCell>
//                                 <TableCell component="th" scope="row" sx={{ border: 2 }}>
//                                     {row.studentName}
//                                 </TableCell>
//                                 <TableCell component="th" scope="row" sx={{ border: 2 }}>
//                                     {totalSelectedCheckboxes}
//                                 </TableCell>
//                                 {
//                                     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((i) => (
//                                         <TableCell align="left" padding="checkbox" sx={{ border: 1 }}>
//                                             <Checkbox
//                                                 {...label}
//                                                 value={i} onChange={() => handleChk()}
//                                                 color="primary"
//                                             />

//                                         </TableCell>
//                                     ))
//                                 }
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer >
//         </div>
//     );
// };
// export default AttendanceTable; -->