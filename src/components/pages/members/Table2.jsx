import React, { useState, Fragment, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import { IconButton } from '@material-ui/core';
import {
    HashRouter as Router,
    Switch,
    Route,
    useHistory
    // Link
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
    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.major}</td>
            <td>{props.position}</td>
            <td>{(props.rate).toFixed(1)}/{props.maxRate}</td>
            <td>
                <InfoIcon style={{ color: "#485d84" }} onClick={() => { ChangeTeacherState(props.id, props.setTeacherId, props.history) }} />
            </td>
        </tr>
    );
}

function ChangeTeacherState(teacherId, setTeacherId, history) {
    setTeacherId(teacherId);
    history.push('/mainreview');
}


export default function FacultyMemberTable(props) {
    const [page, setPage] = useState(1);
    const [members, setMembers] = useState();
    const history = useHistory();
    const [totalPage, setTotalPage] = useState(1);
    const pageSize = 5;

    function nextPage(page) {
        { console.log('totalPage', totalPage) }
        { console.log('page', page) }
        page > 0 && page <= totalPage && setPage(page);
    }

    function QueryFaculty() {
        if (props.faculty) {
            fetch(`${process.env.REACT_APP_API_URL}/${props.facultyPath}/faculties-member?facultyId=${props.faculty.id}&page=${page}&pageSize=${pageSize}`,
                fetchOptions)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then((result) => {
                    { if (page == 0) { setPage(1) } };
                    setMembers(result);
                    setTotalPage(result.numPages);
                })
                .then(() => {
                    QueryMajor()
                })
                .catch(err => {
                    alert("member or major not found")
                });
        } else {
            console.log('ssssssssssss');
        }
    }

    function QueryMajor() {
        fetch(`${process.env.REACT_APP_API_URL}/major/majors?facultyId=${props.faculty.id}`, fetchOptions)
            .then(res => {
                if (!res.ok) { throw res }
                return res.json();
            })
            .then((result) => {
                { if (page == 0) { setPage(1) } };
                props.setMajor(result)
            })
    }

    useEffect(() => {
        if (props.major && props.faculty && props.filterMajor != 0) {
            fetch(`${process.env.REACT_APP_API_URL}/${props.facultyPath}/faculties-member-major?facultyId=${props.faculty.id}&majorId=${props.filterMajor}&page=${page}&pageSize=${pageSize}`,
                fetchOptions)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then((result) => {
                    { if (page == 0) { setPage(1) } };
                    setMembers(result);
                    setTotalPage(result.numPages);
                })
                .catch(err => {
                    alert("member not found")
                });
        } else {
            console.log('ssssssssssss');
        }
    }, [props.filterMajor])

    useEffect(() => {
        QueryFaculty();
    }, [props.faculty])

    useEffect(() => {
        QueryFaculty();
    }, [page])

    useEffect(() => {
        props.setIsEntryPage(false);
    }, [])

    // useEffect(() => {
    //     if (props.faculty) {
    // fetch(`${process.env.REACT_APP_API_URL}/major/majors?facultyId=${props.faculty.id}`, fetchOptions)
    //     .then(res => {
    //         if (!res.ok) { throw res }
    //         return res.json();
    //     })
    //     .then((result) => {
    //         { if (page == 0) { setPage(1) } };
    //         props.setMajor(result)
    //     })
    //     .catch(err => {
    //         alert("major not found")
    //     });
    //     } else {
    //         console.log('ssssssssssss');
    //     }
    // }, [])

    return (
        <div>
            <Table borderless>
                <thead className="east-bay-button" style={{ color: "white" }}>
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
                    {members && members.members.map(i => <MemberBody {...i} key={i.id} history={history} setTeacherId={props.setTeacherId} />)}
                </tbody>
            </Table>
            <Pagination className="right ">
                <Pagination.First onClick={() => nextPage(1)} />
                <Pagination.Prev onClick={() => nextPage(page - 1)} />
                {page === 1 ?
                    <Fragment>
                        <Pagination.Item active onClick={() => nextPage(page)}>{page}</Pagination.Item>
                        {page + 1 <= totalPage && <Pagination.Item onClick={() => nextPage(page + 1)}>{page + 1}</Pagination.Item>}
                        {page + 2 <= totalPage && <Pagination.Item onClick={() => nextPage(page + 2)}>{page + 2}</Pagination.Item>}
                    </Fragment> :
                    (page !== totalPage ?
                        <Fragment>
                            {page - 1 >= 1 && <Pagination.Item onClick={() => nextPage(page - 1)}>{page - 1}</Pagination.Item>}
                            <Pagination.Item active onClick={() => nextPage(page)}>{page}</Pagination.Item>
                            {page + 1 <= totalPage && <Pagination.Item onClick={() => nextPage(page + 1)}>{page + 1}</Pagination.Item>}
                        </Fragment> :
                        <Fragment>
                            {page - 2 >= 1 && <Pagination.Item onClick={() => nextPage(page - 2)}>{page - 2}</Pagination.Item>}
                            {page - 1 >= 1 && <Pagination.Item onClick={() => nextPage(page - 1)}>{page - 1}</Pagination.Item>}
                            <Pagination.Item active onClick={() => nextPage(page)}>{page}</Pagination.Item>
                        </Fragment>)}

                <Pagination.Next onClick={() => nextPage(page + 1)} />
                <Pagination.Last onClick={() => nextPage(totalPage)} />
            </Pagination>
        </div>
    )
}