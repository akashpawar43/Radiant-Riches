import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";
import { data } from 'autoprefixer';

export default function Footer() {
    const unitedStatesOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    const categories = [
        { link: "Web Builder" },
        { link: "Hosting" },
        { link: "Data Center" },
        { link: "Robotic-Automation" },
    ];
    const contact = [
        { link: "Contact" },
        { link: "Privacy Policy" },
        { link: "Terms Of Service" },
        { link: "Categories" },
        { link: "About" },
    ]
    return (
        <>
            <footer className=" bg-blue_gray-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col mb-[70px] max-w-7xl w-[70rem] mx-auto justify-start items-start">
                    <div className="bg-white dark:bg-gray-900 w-full">
                        <div className="mx-auto w-full max-w-screen-xl flex flex-row justify-between">
                            <div className="grid grid-cols-2 gap-40 py-6 lg:py-8 md:grid-cols-4">
                                <div>
                                    <h2 className="mb-6 text-sm text-gray-300 uppercase">CATEGORIES</h2>
                                    {categories.map((data, i) => (
                                        <ul key={i} className="text-gray-500 dark:text-gray-400 font-medium">
                                            <li className="mb-4">
                                                <a href="#" className=" hover:underline">{data.link}</a>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm text-gray-300 uppercase dark:text-white">Contact</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        {contact.map((data, i) => (
                                            <li key={i} className="mb-4">
                                                <a href="#" className="hover:underline">{data.link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className=' flex justify-center items-center w-[40%]'>
                                <SelectBox
                                    className="sm:flex-1 text-[13px] text-blue_gray-100 text-left mb-8 w-[24%] sm:w-full"
                                    placeholderClassName="text-blue_gray-100"
                                    indicator={
                                        <Img
                                            className="h-[9px] mr-[0] w-[15px]"
                                            src="images/img_arrowdown_gray_300.svg"
                                            alt="arrow_down"
                                        />
                                    }
                                    isMulti={false}
                                    name="groupFiftyEight"
                                    options={unitedStatesOptionsList}
                                    isSearchable={false}
                                    placeholder="United States"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
