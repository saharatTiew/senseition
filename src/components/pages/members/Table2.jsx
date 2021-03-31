import React, { useState, Fragment, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import InfoIcon from '@material-ui/icons/Info';
import { IconButton } from '@material-ui/core';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import fetchOptions, { fetchPostOptions } from '../../fetchOptions';

// const data = [
//     {
//         id: 1,
//         lastName: "SIKHARESTRAKUL",
//         major: "HOSPITALITY AND HOSPITALITY",
//         firstName: "PHANUWAT",
//         position: "ASST. DEAN FOR",
//         rate: "2.75/5"
//     },
//     {
//         id: 2,
//         lastName: "SIKHARESTRAKUL",
//         major: "HOSPITALITY AND HOSPITALITY",
//         firstName: "PHANUWAT",
//         position: "ASST. DEAN FOR",
//         rate: "2.75/5"
//     },
//     {
//         id: 3,
//         lastName: "SIKHARESTRAKUL",
//         major: "HOSPITALITY AND HOSPITALITY",
//         firstName: "PHANUWAT",
//         position: "ASST. DEAN FOR",
//         rate: "2.75/5"
//     },
//     {
//         id: 4,
//         lastName: "SIKHARESTRAKUL",
//         major: "HOSPITALITY AND HOSPITALITY",
//         firstName: "PHANUWAT",
//         position: "ASST. DEAN FOR",
//         rate: "2.75/5"
//     },
//     {
//         id: 5,
//         lastName: "SIKHARESTRAKUL",
//         major: "HOSPITALITY AND HOSPITALITY",
//         firstName: "PHANUWAT",
//         position: "ASST. DEAN FOR",
//         rate: "2.75/5"
//     },
//     {
//         id: 6,
//         lastName: "SIKHARESTRAKUL",
//         major: "HOSPITALITY AND HOSPITALITY",
//         firstName: "PHANUWAT",
//         position: "ASST. DEAN FOR",
//         rate: "2.75/5"
//     }
// ]

function MemberBody(props) {
    console.log('dffddf', JSON.stringify(props));
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.major}</td>
            <td>{props.position}</td>
            <td>{props.rate}/{props.maxRate}</td>
            <td>
                <Link to="/mainreview">
                    <InfoIcon style={{color: "#485d84"}}/>
                </Link>
            </td>
        </tr>
    );
}


export default function FacultyMemberTable(props) {
    const [page, setPage] = useState(1);
    const [major, setMajor] = useState(0);
    const [members, setMembers] = useState();
    // const [data, setData] = useState(0);
    const [totalPage, setTotalPage] = useState(20);

    function nextPage(page) {
        { console.log(page) }
        page > 0 && page <= totalPage && setPage(page);
    }

    // ?facultyId=${props.faculty.id}
    useEffect(() => {
        if (props.faculty) {
          fetch(`${process.env.REACT_APP_API_URL}/${props.facultyPath}/faculties-member?facultyId=${props.faculty.id}`, fetchOptions)
            .then(res => {
              if (!res.ok) { throw res }
              return res.json();
            })
            .then((result) => {
              setMembers(result);
            })
            .catch(err => {
                alert("member not found")
            });
        } else {
            console.log('ssssssssssss');
        }
    }, [props.faculty])

    return (
        <div>
            <Table borderless>
                <thead className="east-bay-button" style={{color: "white"}}>
                    <tr >
                        <th style={{ "width": 20 + '%' }}>First name</th>
                        <th style={{ "width": 20 + '%' }}>Last name</th>
                        <th style={{ "width": 25 + '%' }}>Major</th>
                        <th style={{ "width": 20 + '%' }}>Position</th>
                        <th style={{ "width": 6 + '%' }}>Rate</th>
                        <th style={{ "width": 6 + '%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {members && members.members.map(i => <MemberBody {...i} key={i.id} />)}
                </tbody>
            </Table>
            <Pagination className="right ">
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