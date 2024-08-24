import React from 'react'
import PropTypes from 'prop-types'
import { UserList } from '../../models/models'


const TableData = (props: { data: UserList[] }) => {
    console.log('data=>', props.data)
    const result = props.data.filter( (item:UserList) => item.id < 20)
    console.log('result=>', result)
  return (
    <>
        { props.data.map((item:UserList, index) => (
            <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>
        ))} 
    </>
    )
}

TableData.propTypes = {
    userId: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.bool
}

export default TableData