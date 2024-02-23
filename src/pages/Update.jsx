import React from 'react'

import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Update() {
    const topRelevantOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    return (
        <>
            <div className=" bg-gray-50 flex flex-col inset-x-[0] items-center justify-end py-2.5 top-[0]">
                <div className="flex flex-col items-start justify-start mt-[27px] w-full">
                    <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-800"
                        size="txtInterRegular48"
                    >
                        Best Website builders in the US
                    </Text>
                    <Line className="bg-gray-300 h-px mt-3 w-full" />
                    <div className="flex md:flex-row flex-row md:gap-5 items-center justify-start text-center mt-[9px] w-full">
                        <Img
                            className="h-5 md:mt-0 mt-[5px] w-5"
                            src="images/img_image_blue_gray_600.svg"
                            alt="image_Ten"
                        />
                        <Text
                            className="ml-2 md:ml-[0] md:mt-0 mx-[7px] text-blue_gray-700 text-sm"
                            size="txtInterRegular14Bluegray700"
                        >
                            Last Updated
                        </Text>
                        <Text
                            className="md:ml-[0] ml-[5px] md:mt-0 mx-[7px] text-blue_gray-700 text-sm"
                            size="txtInterRegular14Bluegray700"
                        >
                            -
                        </Text>
                        <Text
                            className="md:ml-[0] ml-[9px] md:mt-0 mx-2 text-[13px] text-blue_gray-700"
                            size="txtInterRegular13"
                        >
                            February 22, 2020
                        </Text>
                        <Img
                            className="h-5 ml-5 md:ml-[0] md:mt-0 mx-[5px] w-5"
                            src="images/img_image_blue_gray_600_20x20.svg"
                            alt="image_Eleven"
                        />
                        <Text
                            className="ml-2 md:ml-[0] md:mt-0 mx-[7px] text-blue_gray-700 text-sm"
                            size="txtInterRegular14Bluegray700"
                        >
                            Advertising Disclosure
                        </Text>
                        <SelectBox
                            className="md:flex-1 md:ml-[0] ml-96 text-blue_gray-500 text-center text-sm w-[12%] md:w-full"
                            placeholderClassName="text-blue_gray-500"
                            indicator={
                                <Img
                                    className="h-6 mr-[0] w-6"
                                    src="images/img_arrowdown_blue_gray_600.svg"
                                    alt="arrow_down"
                                />
                            }
                            isMulti={false}
                            name="groupFiftySeven"
                            options={topRelevantOptionsList}
                            isSearchable={false}
                            placeholder="Top Relevant"
                        />
                    </div>
                    <Line className="bg-gray-300 h-px mt-3 w-full" />
                </div>
            </div>
        </>
    )
}
