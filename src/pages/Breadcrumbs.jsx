import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Breadcrumbs() {
    const breadcrumbs = [
        { txt: "Home", img: "images/img_arrowright.svg" },
        { txt: "Hosting for All", img: "images/img_arrowright.svg" },
        { txt: "Hosting", img: "images/img_arrowright.svg" },
        { txt: "Hosting6", img: "images/img_arrowright.svg" },
        { txt: "Hosting5" },
    ]
    return (
        <>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[5px] mt-2 mb-4 md:w-full">
                {breadcrumbs.map((data, i) => (
                    <>
                        <Text
                            className="text-[13px] text-blue_gray-500"
                            size="txtInterRegular13Bluegray500"
                        >
                            {data.txt}
                        </Text>
                        {data.img &&
                            <Img
                                className="h-2 mx-3 sm:ml-[0] sm:mt-0 mt-[3px]"
                                src={data.img}
                                alt="arrowright"
                            />
                        }
                    </>
                ))}
            </div>
        </>
    )
}
