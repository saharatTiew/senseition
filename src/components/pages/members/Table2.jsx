import React, { useState, Fragment } from "react";
import { Pagination } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import { IconButton } from '@material-ui/core';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const data = [
    {
        id: 1,
        lastName: "SIKHARESTRAKUL",
        major: "HOSPITALITY AND HOSPITALITY",
        firstName: "PHANUWAT",
        position: "ASST. DEAN FOR",
        rate: "2.75/5"
    },
    {
        id: 2,
        lastName: "SIKHARESTRAKUL",
        major: "HOSPITALITY AND HOSPITALITY",
        firstName: "PHANUWAT",
        position: "ASST. DEAN FOR",
        rate: "2.75/5"
    },
    {
        id: 3,
        lastName: "SIKHARESTRAKUL",
        major: "HOSPITALITY AND HOSPITALITY",
        firstName: "PHANUWAT",
        position: "ASST. DEAN FOR",
        rate: "2.75/5"
    },
    {
        id: 4,
        lastName: "SIKHARESTRAKUL",
        major: "HOSPITALITY AND HOSPITALITY",
        firstName: "PHANUWAT",
        position: "ASST. DEAN FOR",
        rate: "2.75/5"
    },
    {
        id: 5,
        lastName: "SIKHARESTRAKUL",
        major: "HOSPITALITY AND HOSPITALITY",
        firstName: "PHANUWAT",
        position: "ASST. DEAN FOR",
        rate: "2.75/5"
    },
    {
        id: 6,
        lastName: "SIKHARESTRAKUL",
        major: "HOSPITALITY AND HOSPITALITY",
        firstName: "PHANUWAT",
        position: "ASST. DEAN FOR",
        rate: "2.75/5"
    }
]


function MemberBody(props) {

    function test(page) {
        { console.log(page) }
    }

    { console.log(props) }
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.major}</td>
            <td>{props.position}</td>
            <td>{props.rate}</td>
            <td>
                <Link to="/registers">
                    <RadioButtonUncheckedOutlinedIcon style={{color: "#000000"}}/>
                </Link>
            </td>
        </tr>
    )
}


export default function FacultyMemberTable(props) {
    const [page, setPage] = React.useState(2);
    const totalPage = 20;

    function nextPage(page) {
        { console.log(page) }
        page > 0 && page <= totalPage && setPage(page);
    }

    return (
        <div>
            <Table striped borderless hover responsive>
                <thead>
                    <tr>
                        <th style={{ "width": 20 + '%' }}>First name</th>
                        <th style={{ "width": 20 + '%' }}>Last name</th>
                        <th style={{ "width": 25 + '%' }}>Major</th>
                        <th style={{ "width": 25 + '%' }}>Position</th>
                        <th style={{ "width": 6 + '%' }}>Rate</th>
                        <th style={{ "width": 4 + '%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(i => <MemberBody {...i} key={i.id} />)}
                </tbody>
            </Table>
            <Pagination>
                <Pagination.First onClick={() => nextPage(1)} />
                <Pagination.Prev onClick={() => nextPage(page - 1)} />
                {page === 1 ?
                    <Fragment>
                        <Pagination.Item active onClick={() => nextPage(page + 1)}>{page}</Pagination.Item>
                        <Pagination.Item onClick={() => nextPage(page + 1)}>{page + 1}</Pagination.Item>
                        <Pagination.Item onClick={() => nextPage(page + 1)}>{page + 2}</Pagination.Item>
                    </Fragment> :
                    (page !== totalPage ?
                        <Fragment>
                            <Pagination.Item onClick={() => nextPage(page + 1)}>{page - 1}</Pagination.Item>
                            <Pagination.Item active onClick={() => nextPage(page + 1)}>{page}</Pagination.Item>
                            <Pagination.Item onClick={() => nextPage(page + 1)}>{page + 1}</Pagination.Item>
                        </Fragment> :
                        <Fragment>
                            <Pagination.Item onClick={() => nextPage(page + 1)}>{page - 2}</Pagination.Item>
                            <Pagination.Item onClick={() => nextPage(page + 1)}>{page - 1}</Pagination.Item>
                            <Pagination.Item active onClick={() => nextPage(page + 1)}>{page}</Pagination.Item>
                        </Fragment>)}

                <Pagination.Next onClick={() => nextPage(page + 1)} />
                <Pagination.Last onClick={() => nextPage(totalPage)} />
            </Pagination>
        </div>

    )
}