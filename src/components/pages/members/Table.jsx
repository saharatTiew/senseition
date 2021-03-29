import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const columns = [
    { id: "name", label: "First name", minWidth: 20, width:20 },
    { id: "lastname", label: "Last name", minWidth: 20 , width:20},
    { id: "major", label: "Major", minWidth: 20 , width:20},
    { id: "position", label: "Position", minWidth: 20 , width:20},
    { id: "rate", label: "Rate", minWidth: 20, width:20 },
    { id: "action", label: "Action", minWidth: 20, width:20 },
];

function createData(id, name, lastname, major, position, rate, action) {
    return { id, name, lastname, major, position, rate, action };
}

const rows = [
    
    createData(1, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY", "ASST. DEAN FOR", "2.75/5", "Action"),
    createData(2, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY", "ASST. DEAN FOR", "2.75/5", "Action"),
    createData(3, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY", "ASST. DEAN FOR", "2.75/5", "Action"),
    createData(4, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY", "ASST. DEAN FOR", "2.75/5", "Action"),
    createData(5, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY", "ASST. DEAN FOR", "2.75/5", "Action"),
    
    // createData(1, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(2, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(3, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(4, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(5, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(6, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(7, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(8, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(9, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(10, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(11, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(12, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(13, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
    // createData(14, "PHANUWAT", "SIKHARESTRAKUL", "HOSPITALITY AND TOURISM MANAGEMENT", "ASST. DEAN FOR CHAIR PERSON", "2.75/5", "Action"),
];

const useStyles = makeStyles({
    root: {
        width: "100%",
        // padding: "auto 100px auto auto"
    },
    container: {
        maxHeight: 440
    },
    tableCell: {
        padding: "16px 10px 16px 16px"
    },
    tableCell2: {
        width: "20%"
    }

});

export default function StickyHeadTable() {
    {console.log(rows)}
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    className={classes.tableCell}
                                    style={{ minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (        
                                            <TableCell key={column.id} align={column.align} className={classes.tableCell} style={{
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                maxWidth: "20px"
                                            }}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}