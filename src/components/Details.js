import React from 'react';
import { useLocation } from 'react-router-dom';

const CartList = () => {
    const { address, company, name, email, phone, username } = useLocation().state
    console.log(address, company);

    return (
        <div>
            <section className="border-2 border-black m-4">
                <header className="bg-pink-100 p-1 pl-2 font-semibold   ">
                    Coding test
                </header>
                <article className="border-t-2 border-black">
                    <div className="bg-gradient-to-r from-blue-200 to-pink-100 p-2">
                        <div className='p-2  flex justify-between'>
                            <div>
                                <i className="fas fa-arrow-left"></i>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-arrow-right"></i>
                            </div>
                            <div className=" w-width158 ">
                                <div className="relative  flex w-full flex-wrap items-stretch ">
                                    <input
                                        type="search"
                                        className="bg-white relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="button-addon2"
                                    />

                                    <span
                                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                        id="basic-addon2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-5 w-5">
                                            <path
                                                fill-rule="evenodd"
                                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div>
                                <i className="fas fa-sync"></i>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-bars"></i>
                                &nbsp; &nbsp; &nbsp;
                                <i className="fas fa-star"></i>
                            </div>


                        </div>
                        <div className="border-2 border-black m-2 bg-white pt-2 p-10">
                            <div className="border-b-2 border-black font-bold pb-2">
                                Coding Skill PLAY
                            </div>
                            <div className='font-bold mt-8'>User Details</div>

                            <div className='mt-8 flex justify-between'>

                                <div className="text-30 bg-blue-500 text-center w-width45 h-height45 leading-44 text-white">
                                    {name.charAt(0) + name.charAt(name.indexOf(" ") + 1)}
                                </div>

                                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-width80">
                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Name</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            placeholder={name}
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>

                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Company</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            placeholder={company.name}
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>

                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Email Address</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                            placeholder={email}
                                        />
                                    </div>
                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Industry</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                            placeholder={company.bs}
                                        />
                                    </div>
                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Username</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                            placeholder={username}
                                        />
                                    </div>
                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Catch Phrase</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                            placeholder={company.catchPhrase}
                                        />
                                    </div>
                                    <div className=" p-4 rounded-lg">
                                        <label for="inputField" className=" font-semibold block mb-2">Address</label>
                                        <input
                                            type="text"
                                            id="inputField"
                                            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                                            placeholder={address.suite + " " + address.street + " " + address.city + " " + address.zipcode}
                                        />
                                    </div>

                                </section>

                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default CartList