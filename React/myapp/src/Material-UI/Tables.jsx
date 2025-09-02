

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';

function Tables() {
  return (
<>
 <TableContainer component={Paper}
    variant='outlined'>

    
    <Table aria-label="demo table">
        <TableHead>
            <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Salary</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Harish</TableCell>
                <TableCell>20000</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </TableContainer>

<Container maxWidth='sm'>
 <Box sx={{ bgcolor: '#0f89ecff', height: '100vh' }} />

</Container>

   



</>
   

    
  )
}

export default Tables;