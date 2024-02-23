import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Breadcrumbs() {
    return (
        <>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[5px] md:w-full">
                <Text
                    className="text-[13px] text-blue_gray-500"
                    size="txtInterRegular13Bluegray500"
                >
                    Home
                </Text>
                <Img
                    className="h-2 mx-3 sm:ml-[0] sm:mt-0 mt-[3px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                />
                <Text
                    className=" sm:ml-[0] text-blue_gray-600_01 text-sm"
                    size="txtInterRegular14Bluegray60001"
                >
                    Hosting for all
                </Text>
                <Img
                    className="h-2 mx-3.5 sm:ml-[0] sm:mt-0 mt-[3px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright_One"
                />
                <Text
                    className="ml-2.5 sm:ml-[0] text-blue_gray-500 text-sm"
                    size="txtInterRegular14Bluegray500"
                >
                    Hosting
                </Text>
                <Img
                    className="h-2 sm:mx-[0] mx-[15px] sm:mt-0 mt-[3px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Two"
                />
                <Text
                    className="ml-2.5 sm:ml-[0] text-blue_gray-600_01 text-sm"
                    size="txtInterRegular14Bluegray60001"
                >
                    Hosting6
                </Text>
                <Img
                    className="h-2 mx-3.5 sm:mx-[0] sm:mt-0 mt-[3px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Three"
                />
                <Text
                    className=" sm:ml-[0] text-blue_gray-600_01 text-sm"
                    size="txtInterRegular14Bluegray60001"
                >
                    Hosting5
                </Text>
            </div>
        </>
    )
}
