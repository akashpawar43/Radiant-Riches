import React from 'react';

import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Navbar() {
    return (
        <>
            <header className="bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center text-center gap-28 w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-start justify-start md:ml-[0] md:mt-0 my-[13px] p-[5px] rounded-lg w-[17%] md:w-full">
                    <Img
                        className="h-6 ml-1 md:ml-[0] w-6"
                        src="images/img_image.svg"
                        alt="image"
                    />
                </div>
                <ul className=" flex flex-row text-gray-400 gap-4">
                    <li>Categories</li>
                    <li>Website Builders</li>
                    <li>Today's deals</li>
                </ul>
            </header>
        </>
    )
}
