import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Nav2() {
    return (
        <>
            <div className="flex md:flex-col flex-row gap-2 mb-2 items-center justify-between w-[70rem]">
                <Text
                    className="bg-white-A700 h-9 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[12px] text-blue_gray-700 text-sm w-[105px]"
                    size="txtInterRegular14Bluegray700"
                >
                    Tools
                </Text>
                <Text
                    className="bg-white-A700 h-9 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[12px] text-[13px] text-blue_gray-700 w-[138px]"
                    size="txtInterRegular13"
                >
                    AWS Builder
                </Text>
                <Button
                    className="!text-blue_gray-700 cursor-pointer min-w-[105px] text-[13px] text-center"
                    shape="round"
                    color="white_A700"
                    size="sm"
                >
                    Start Build
                </Button>
                <Text
                    className="bg-white-A700 h-9 justify-center pb-2 pl-4 sm:pr-5 pt-[11px] rounded-[12px] text-[13px] text-blue_gray-700 w-[132px]"
                    size="txtInterRegular13"
                >
                    Build Supplies
                </Text>
                <Text
                    className="bg-white-A700 h-9 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[12px] text-blue_gray-700 text-sm w-[126px]"
                    size="txtInterRegular14Bluegray700"
                >
                    Tooling
                </Text>
                <Text
                    className="bg-white-A700 h-9 justify-center pb-2 pl-4 sm:pr-5 pr-[35px] pt-[11px] rounded-[12px] text-[13px] text-blue_gray-700 w-[140px]"
                    size="txtInterRegular13"
                >
                    BlueHosting
                </Text>
            </div>
        </>
    )
}
