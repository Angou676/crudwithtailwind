import React, { useState } from 'react';
import DatePickerComp from './DatePickerComp';
import Dropdown from './Dropdown';
import TextEditor from './TextEditor';
import DatePickComp from './DatePickerComp/DatePickComp';
import CustomInputField from './DatePickerComp';

const formateDate = (getDate) => {
    const date = new Date(getDate)
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
}

const Register = () => {
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Study: "",
        CurrentSalary: "",
    })
    const [dob, setDob] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSelectChange = (event) => {
        const data = {
            CurrentSalary: 35000,
            DOB: formateDate(dob),
            Description: description,
            EndDate: formateDate(startDate),
            FirstName: formData.FirstName,
            LastName: formData.LastName,
            StartDate: formateDate(endDate),
            Study: formData.Study
        }
        console.log("ffffffffffffff", data)
    };

    return (
        <>
            <div className='w-width90 m-auto pt-10 text-center'>
                <h1 className='font-bold text-center'>Employee Registration Form</h1>
                <section className='border border-grey-100 w-width50 m-mauto mt-m20 p-10' >
                    <div className='flex justify-between'>
                        <div className="flex flex-col">
                            <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">First Name<span>*</span></label>
                            <input
                                id="input1"
                                className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none"
                                type="text"
                                name="FirstName"
                                onChange={onChangeHandler}
                                placeholder="Enter first name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">Last Name<span>*</span></label>
                            <input
                                id="input2"
                                name="LastName"
                                onChange={onChangeHandler}
                                className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none"
                                type="text"
                                placeholder="Enter last name"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-left mt-m10 w-full" >
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1 ">DOB</label>
                        <div className="flex flex-col rounded-md " style={{ width: '100%' }}>
                            <DatePickComp
                                selected={dob}
                                onChange={setDob}
                                customInput={<CustomInputField name="name" label="Enter DOB" />}
                                startDate={startDate}
                                popperPlacement="bottom"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-left mt-m10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Study
                        </label>
                        <select
                            id="input2"
                            name='Study'
                            onChange={onChangeHandler}
                            className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none text-gray-400" // Added text-gray-600
                        >
                            <option style={{ color: 'gray', fontSize: '14px' }} value="BE">BE</option>
                            <option style={{ color: 'gray', fontSize: '14px' }} value="Btech">Btech</option>
                            <option style={{ color: 'gray', fontSize: '14px' }} value="ME/Mtech">ME/Mtech</option>
                        </select>
                    </div>

                    <div className="flex justify-between text-left mt-m10 w-full">
                        {/* <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Start and End date
                        </label> */}
                        <div className="flex flex-col rounded-md " style={{ width: '45%' }}>
                            <DatePickComp
                                selected={startDate}
                                onChange={setStartDate}
                                customInput={<CustomInputField name="name" label="Start date" />}
                                startDate={startDate}
                                popperPlacement="bottom"
                            />
                        </div>
                        <div className="flex flex-col rounded-md " style={{ width: '45%' }}>
                            <DatePickComp
                                selected={endDate}
                                onChange={setEndDate}
                                customInput={<CustomInputField name="name" label="End date" />}
                                startDate={startDate}
                                popperPlacement="bottom"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col text-left mt-m10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Current salary
                        </label>
                        <input
                            id="input2"
                            type="number"
                            name='CurrentSalary'
                            onChange={onChangeHandler}
                            className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none text-gray-600" // Added text-gray-600
                            placeholder="Enter salary"
                        />
                    </div>


                    <div className="flex flex-col text-left mt-m10 w-full">
                        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
                            Description
                        </label>
                        <TextEditor setDescription={setDescription} />
                    </div>


                    <div className='flex justify-between mt-m10'>
                        <button
                            className="w-full px-3 py-2 bg-gray-200 rounded-md border h-10 w-width40"
                        >
                            Cancel
                        </button>
                        <button
                            className="w-full px-3 py-2 bg-blue-900 rounded-md border h-10 w-width40 text-white"
                            onClick={handleSelectChange}
                        >
                            Save
                        </button>
                    </div>
                </section>
            </div>
            <br />
            <style>
                {
                    `
                    input[type="number"]::-webkit-inner-spin-button,
                    input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    appearance: none;
                    margin: 0;
                    }

                    `
                }
            </style>
        </>
    )
}

export default Register