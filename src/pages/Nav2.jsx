import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Nav2() {
    const nav = [
        { text: "Tools" },
        { text: "Aws Builder" },
        { text: "Start Build" },
        { text: "Build Supplies" },
        { text: "Tooling" },
        { text: "BlueHosting" },
    ];
    return (
        <>
            <div className="flex md:flex-col flex-row gap-1 mb-2 items-center justify-between w-[70%]">
                {nav.map((data, i) => (
                    <Text
                        className="bg-white-A700 h-9 justify-center px-4 sm:pr-5 py-[9px] rounded-[12px] text-blue_gray-700 text-sm"
                        size="txtInterRegular14Bluegray700" key={i}
                    >
                        {data.text}
                    </Text>
                ))}
            </div>
        </>
    )
}
