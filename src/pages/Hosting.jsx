import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";
import Deals from './Deals';

export default function Hosting() {
    const showMoreOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    const data = [
        { no: "1", img: "images/img_download1.png", imgtxt: "Builder 1", txt1: "WixPro 72-Inch Responsive Website Builder-Comprehensive Digital Platform CreationTool, Streamlined Design Interface forProfessional Websites and Online Stores (Black/Blue)", txt2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.", rate: "9.8", review: "Exceptional", star: "images/img_image_amber_500.svg", lebel: 'best Choice', lebelImg: "images/img_image_white_a700.svg" },
        { no: "2", img: "images/img_download1.png", imgtxt: "Builder", txt1: "SiteCraft 68-Inch Ultimate Web Design Studio- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)", txt2: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.", rate: "9.5", review: "Excellent", star: "images/img_image_amber_500_11x66.svg", lebel: 'Best Value', lebelImg: "images/img_settings.svg" },
        { no: "3", img: "images/img_download1.png", imgtxt: "Builder 1", txt1: "WixPro 72-Inch Responsive Website Builder-Comprehensive Digital Platform CreationTool, Streamlined Design Interface forProfessional Websites and Online Stores (Black/Blue)", txt2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.", rate: "9.3", review: "Exceptional", star: "images/img_image_amber_500.svg", },
    ];
    return (
        <>
            <div className="flex flex-col justify-start w-full">
                <List
                    className="flex flex-col gap-[5px] items-center w-full"
                    orientation="vertical"
                >
                    {data.map((host) => (
                        <div key={host.no} className="sm:h-[254px] h-[270px] md:h-[616px] relative w-full">
                            <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[7px] px-[7px] rounded-[12px] w-[98%]">
                                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[95%] md:w-full">
                                    <div className="flex flex-col gap-3 items-center justify-start md:mt-0 mt-[75px] w-[15%] md:w-full">
                                        <Img
                                            className="h-[103px] md:h-auto object-cover sm:w-[50%] md:w-full"
                                            src={host.img}
                                            alt="downloadOne"
                                        />
                                        <Text
                                            className="text-[13px] text-blue_gray-600 text-center"
                                            size="txtInterRegular13Bluegray600"
                                        >
                                            {host.imgtxt}
                                        </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[58px] md:mt-0 mt-[21px] w-[53%] md:w-full">
                                        <Text
                                            className="leading-[24.00px] text-base text-blue_gray-700 w-[98%] sm:w-full"
                                            size="txtInterRegular16"
                                        >
                                            {host.txt1}
                                        </Text>
                                        <Text
                                            className="mt-[7px] text-base text-blue_gray-800"
                                            size="txtInterBold16"
                                        >
                                            Main highlights
                                        </Text>
                                        <Text
                                            className="leading-[24.00px] md:ml-[0] ml-[18px] mt-2.5 text-base text-blue_gray-700 w-[97%] sm:w-full"
                                            size="txtInterRegular16"
                                        >
                                            {host.txt2}
                                        </Text>
                                        <SelectBox
                                            className="mt-6 text-base text-blue-500 text-left sm:w-full"
                                            placeholderClassName="text-blue-500"
                                            indicator={
                                                <Img
                                                    className="h-4 mr-[0] w-4"
                                                    src="images/img_arrowdown.svg"
                                                    alt="arrow_down"
                                                />
                                            }
                                            isMulti={false}
                                            name="groupFiftyThree"
                                            options={showMoreOptionsList}
                                            isSearchable={false}
                                            placeholder="Show more"
                                        />
                                    </div>
                                    <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start mb-[9px] md:ml-[0] ml-[25px] w-1/4 md:w-full">
                                        <div className="bg-gray-50_01 flex flex-col items-center justify-start p-[3px] rounded-bl-[12px] rounded-br-[12px] w-[59%] md:w-full">
                                            <div className="flex flex-col items-center justify-center mb-4 w-[59%] md:w-full">
                                                <div className="flex flex-row items-start justify-center text-center w-[79%] md:w-full">
                                                    <Text
                                                        className="mt-[7px] md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                                                        size="txtInterRegular32"
                                                    >
                                                        {host.rate}
                                                    </Text>
                                                    <Img
                                                        className="h-2.5 ml-0.5 w-2.5"
                                                        src="images/img_image_gray_400.svg"
                                                        alt="image"
                                                    />
                                                </div>
                                                <Text
                                                    className="mt-3 text-light_blue-900 text-sm"
                                                    size="txtInterRegular14Lightblue900"
                                                >
                                                    {host.review}
                                                </Text>
                                                <Img
                                                    className="h-[11px] mt-2"
                                                    src={host.star}
                                                    alt="image_One"
                                                />
                                            </div>
                                        </div>
                                        <Button
                                            className="cursor-pointer min-w-[232px] text-base text-center"
                                            shape="round"
                                            size="md"
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {host.lebel &&
                                <Button
                                    className="cursor-pointer flex items-center justify-center left-[2%] min-w-[136px] ml-[-1rem] absolute rounded-br-lg rounded-tr-lg top-[0]"
                                    leftIcon={
                                        <Img
                                            className="h-5 mt-px mr-2 top-[0] right-[1%]"
                                            src={host.lebelImg}
                                            alt="IMAGE"
                                        />
                                    }
                                    color="yellow_900"
                                >
                                    <div className="text-base text-left">
                                        {host.lebel}
                                    </div>
                                </Button>
                            }
                            <div className="absolute ml-[-1rem] bg-white-A700 border border-gray-300 border-solid flex flex-col h-11 items-center justify-start left-[0] rounded-[50%] top-[17%] w-11">
                                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col h-11 items-center justify-start p-[9px] rounded-[50%] w-11">
                                    <Text
                                        className="text-blue_gray-600 text-xl"
                                        size="txtInterRegular20"
                                    >
                                        {host.no}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ))}

                </List>
                <div className="h-[436px] sm:h-[566px] md:h-[911px] mr-[18px] mt-[41px] relative w-full md:w-full">
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[9px] rounded-[12px] w-[98%]">
                        <div className="flex flex-col gap-[5px] justify-start mb-[15px] w-[97%] md:w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[50px] w-[95%] md:w-full">
                                <div className="flex flex-col gap-[42px] items-center justify-start md:mt-0 mt-[98px] w-[16%] md:w-full">
                                    <Img
                                        className="h-[103px] md:h-auto object-cover sm:w-[50%] md:w-full"
                                        src="images/img_download1.png"
                                        alt="downloadTwo"
                                    />
                                    <Text
                                        className="text-blue_gray-600 text-center text-sm"
                                        size="txtInterRegular14Bluegray600"
                                    >
                                        CDK
                                    </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start mb-[13px] md:ml-[0] ml-[50px] md:mt-0 mt-[22px] w-[58%] md:w-full">
                                    <Text
                                        className="leading-[24.00px] text-base text-blue_gray-700 w-[96%] sm:w-full"
                                        size="txtInterRegular16"
                                    >
                                        CDK Resposive Builder: An extensive
                                        library of widgets and apps, and detailed
                                        step-by-step guides
                                    </Text>
                                    <Text
                                        className="bg-gray-100 h-[26px] justify-center mt-[9px] pb-[7px] pt-0.5 px-[5px] rounded text-[13px] text-light_blue-900 w-[61px]"
                                        size="txtInterRegular13Lightblue900"
                                    >
                                        26% Off
                                    </Text>
                                    <Text
                                        className="ml-1 md:ml-[0] text-base text-blue_gray-800"
                                        size="txtInterBold16"
                                    >
                                        Main highlights
                                    </Text>
                                    <div className="bg-red-50 flex flex-col items-start justify-start md:ml-[0] ml-[22px] mt-1 p-2 rounded-[12px] w-[96%] md:w-full">
                                        <div className="flex flex-col gap-2 items-start justify-start ml-1 md:ml-[0] w-full md:w-full">
                                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                                                <Button
                                                    className="cursor-pointer min-w-[40px] rounded text-base text-center"
                                                    color="white_A700"
                                                >
                                                    9.9
                                                </Button>
                                                <Text
                                                    className="capitalize text-[15px] text-blue_gray-700"
                                                    size="txtInterRegular15"
                                                >
                                                    building responsive
                                                </Text>
                                            </div>
                                            <div className="flex flex-row gap-2 items-start justify-start w-[44%] md:w-full">
                                                <Button
                                                    className="cursor-pointer min-w-[40px] rounded text-base text-center"
                                                    color="white_A700"
                                                >
                                                    8.9
                                                </Button>
                                                <Text
                                                    className="capitalize mt-[3px] text-base text-blue_gray-700"
                                                    size="txtInterRegular16"
                                                >
                                                    Cool
                                                </Text>
                                            </div>
                                            <div className="flex flex-row gap-2 items-start justify-start w-[46%] md:w-full">
                                                <Button
                                                    className="cursor-pointer min-w-[40px] rounded text-base text-center"
                                                    color="white_A700"
                                                >
                                                    8.9
                                                </Button>
                                                <Text
                                                    className="capitalize mt-[3px] text-base text-blue_gray-700"
                                                    size="txtInterRegular16"
                                                >
                                                    Docs
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50_01 flex flex-col mt-3 gap-4 items-center justify-start mb-[142px] md:ml-[0] ml-[69px] p-4 rounded-bl-[12px] rounded-br-[12px] w-[15%] md:w-full">
                                    <Text
                                        className="md:text-3xl sm:text-[28px] text-[32px] text-light_blue-900"
                                        size="txtInterRegular32"
                                    >
                                        9.1
                                    </Text>
                                    <div className="flex flex-col gap-2 items-center justify-center mb-2.5 w-full md:w-full">
                                        <Text
                                            className="text-light_blue-900 text-sm"
                                            size="txtInterRegular14Lightblue900"
                                        >
                                            Very Good
                                        </Text>
                                        <Img
                                            className="h-[11px] ml-1 md:ml-[0]"
                                            src="images/img_image_11x66.svg"
                                            alt="image_Three"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[191px] w-[71%] md:w-full">
                                <div className="flex flex-row sm:gap-10 items-end justify-between w-full">
                                    <Text
                                        className="text-base text-blue_gray-800"
                                        size="txtInterRegular16Bluegray800"
                                    >
                                        Why we love it
                                    </Text>
                                    <Img
                                        className="h-2.5 mb-0.5 mt-[7px] w-2.5"
                                        src="images/img_image_gray_400_10x10.svg"
                                        alt="image_Four"
                                    />
                                </div>
                                <div className="flex flex-row gap-2 items-start justify-start w-[21%] md:w-full">
                                    <Img
                                        className="h-6 w-6"
                                        src="images/img_image_blue_50.svg"
                                        alt="image_Five"
                                    />
                                    <Text
                                        className="capitalize text-[15px] text-blue_gray-700"
                                        size="txtInterRegular15"
                                    >
                                        Documentation
                                    </Text>
                                </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between md:ml-[0] ml-[162px] w-[84%] md:w-full">
                                <div className="flex flex-col gap-[7px] justify-start">
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[29px] w-4/5 md:w-full">
                                        <div className="flex flex-row gap-2 items-start justify-start w-[90%] md:w-full">
                                            <Img
                                                className="h-6 w-6"
                                                src="images/img_image_blue_50.svg"
                                                alt="image_Six"
                                            />
                                            <Text
                                                className="capitalize mt-0.5 text-base text-blue_gray-700"
                                                size="txtInterRegular16"
                                            >
                                                Easy Use
                                            </Text>
                                        </div>
                                        <div className="flex flex-row gap-2 items-start justify-start mt-1 w-full">
                                            <Img
                                                className="h-6 w-6"
                                                src="images/img_image_blue_50.svg"
                                                alt="image_Seven"
                                            />
                                            <Text
                                                className="capitalize text-base text-blue_gray-700"
                                                size="txtInterRegular16"
                                            >
                                                Out of box
                                            </Text>
                                        </div>
                                    </div>
                                    <Text
                                        className="text-base text-blue-500"
                                        size="txtInterRegular16Blue500"
                                    >
                                        Show more
                                    </Text>
                                </div>
                                <Button
                                    className="cursor-pointer min-w-[232px] sm:mt-0 mb-4 text-base text-center"
                                    shape="round"
                                    size="md"
                                >
                                    View
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Text
                        className=" ml-[-1rem] absolute bg-white-A700 border border-gray-300 border-solid flex h-11 items-center justify-center left-[0] rounded-[50%] text-blue_gray-600 text-center text-xl top-[8%] w-11"
                        size="txtInterRegular20"
                    >
                        4
                    </Text>
                </div>
                <Deals />
            </div>
        </>
    )
}
