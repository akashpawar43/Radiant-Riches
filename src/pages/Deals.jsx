import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Deals() {
    const data = [
        { offer: "20% Off", time: "Limited time", title: "Webbuilder 1", description: "Computer Modern clasic with wix support", offerPrice: "$39.96", ogPrice: "$49.96" },
        { offer: "20% Off", time: "Limited time", title: "Webbuilder 1", description: "Computer Modern clasic with wix support", offerPrice: "$39.96", ogPrice: "$49.96" },
        { offer: "20% Off", time: "Limited time", title: "Webbuilder 1", description: "Computer Modern clasic with wix support", offerPrice: "$39.96", ogPrice: "$49.96" },
    ]

    return (
        <>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] mt-[85px] w-[85%] md:w-full">
                <Text
                    className="mb-[7px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-800"
                    size="txtInterRegular32Bluegray800"
                >
                    Related deals you might like for
                </Text>
                <Img
                    className="h-2.5 sm:mt-0 mt-9 w-2.5"
                    src="images/img_image_gray_400.svg"
                    alt="image_Eight"
                />
            </div>
            <List
                className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-3.5 w-full"
                orientation="horizontal"
            >
                {data.map((item, i) =>
                    <div key={i} className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-[12px] w-full">
                        <div className="flex flex-col gap-[59px] items-center justify-start mt-[17px] w-full">
                            <Img
                                className="h-[103px] md:h-auto object-cover w-[49%]"
                                src="images/img_download1.png"
                                alt="downloadThree"
                            />
                            <div className="flex flex-col items-start justify-start w-full">
                                <div className="flex flex-row items-center justify-start w-[62%] md:w-full">
                                    <Button
                                        className="cursor-pointer min-w-[69px] rounded-lg text-[13px] text-center"
                                        color="gray_100"
                                    >
                                        {item.offer}
                                    </Button>
                                    <Button
                                        className="cursor-pointer min-w-[107px] ml-1 rounded-lg text-center text-sm"
                                        color="gray_100"
                                    >
                                        Limited time{" "}
                                    </Button>
                                </div>
                                <Text
                                    className="md:ml-[0] ml-[67px] mt-1.5 text-base text-blue_gray-600"
                                    size="txtInterBold16Bluegray600"
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    className="leading-[24.00px] mt-[9px] text-base text-blue_gray-600 w-[98%] sm:w-full"
                                    size="txtInterRegular16Bluegray600"
                                >
                                    {item.description}
                                </Text>
                                <div className="flex flex-row items-end justify-start mt-[7px] w-full md:w-full">
                                    <Text
                                        className="text-blue_gray-600_01 text-xl"
                                        size="txtInterRegular20Bluegray60001"
                                    >
                                        {item.offerPrice}
                                    </Text>
                                    <Text
                                        className="ml-[13px] mt-2 text-blue_gray-300 text-sm"
                                        size="txtInterRegular14Bluegray300"
                                    >
                                        {item.ogPrice}
                                    </Text>
                                    <Text
                                        className="ml-[13px] mt-2 text-red-400 text-sm"
                                        size="txtInterRegular13Red400"
                                    >
                                        ({item.offer})
                                    </Text>
                                </div>
                                <Button
                                    className="cursor-pointer w-full mt-[13px] text-base text-center"
                                    shape="round"
                                    size="md"
                                >
                                    View Deal
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </List>
        </>
    )
}
