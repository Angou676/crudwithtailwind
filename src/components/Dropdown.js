import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState(null); // State to store selected radio
    const [filterText, setFilterText] = useState('');
    const items = ["tom", "jack", "mack", "will", "Bill"];
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((selected) => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleRadioChange = (item) => {
        setSelectedRadio(item);
    };

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(filterText.toLowerCase())
    );
    const arr = ["tom", "jack", "mack", "will", "Bill"]

    return (
        <div className="relative inline-block text-left" style={{ marginLeft: '10px' }}>
            <div style={{ width: '250px', }}>
                <button
                    ref={buttonRef}
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between px-4 py-2 text-sm font-medium text-gray-500  border border-gray-300 rounded-lg shadow-sm text-white focus:outline-none bg-black"
                    id="dropdown-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    style={{ width: '100%' }}
                >
                    Select Employee
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`w-5 h-4 ml-2 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 origin-top-right  border border-gray-300 bg-black text-white rounded-lg shadow-lg"
                    role="menu"
                >
                    <div className="mb-4 relative p-1">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none bg-black "
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        />
                    </div>

                    <div className="p-4">
                        {filteredItems.map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-between mb-2"
                            >
                                <label className='flex justify-between w-width100p' >
                                    <div className='flex items-center capitalize'>
                                        <img src='https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'
                                            className='mr-ml2 bg-white rounded-full' style={{ height: '14px', width: '14px' }} />
                                        {item}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 ml-2 text-blue-500 form-checkbox "

                                        value={item}
                                        checked={selectedItems.includes(item)}
                                        onChange={() => handleCheckboxChange(item)}
                                    />
                                </label>
                            </div>
                        ))}


                    </div>

                </div>
            )}

            <style>
                {
                    `
                
                      
                      .avatar {
                        width: 15px;
                        height: 15px;
                        background-color: grey;
                        border: 1px solid white;
                        color: #fff;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: -10px;
                        z-index: 1;
                        position: relative;
                      }
                      
                      .avatar-letter {
                        font-size: 8px;
                      }
                      
                    `
                }
            </style>
        </div>
    );
};

export default Dropdown;
