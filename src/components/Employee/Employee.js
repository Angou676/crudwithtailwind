import React, { useEffect, useState } from 'react';
import TableComponent from '../TableComponent';
import axios from 'axios';

const Employee = () => {
    const [employeeData, setEmployeeData] = useState([])
    const headings = ['Name', 'DOB', 'Start Date', 'End Date', 'Description'];

    useEffect(() => {
        axios.get(`https://sweede.app/DeliveryBoy/Get-Employee/`)
            .then(res => {
                console.log(res.data)
                setEmployeeData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteEmployeeHandler = (getId) => {
        console.log("llllllll", getId)
    }

    return (
        <div className="container mx-auto p-10">
            <h1 className='font-bold mb-4'>Employee List</h1>
            <TableComponent headings={headings} data={employeeData} deleteEmployeeHandler={deleteEmployeeHandler} />
        </div>
    );
};

export default Employee;
