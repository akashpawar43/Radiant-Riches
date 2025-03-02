import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Signup() {
    return (
        <>
            <div className=" flex sm:flex-col flex-row justify-between gap-0 md:gap-60">
                <Text
                    className="leading-[44.00px] mb-10 md:mt-0 mt-[23px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-600_01 w-full "
                    size="txtInterRegular32Bluegray60001"
                >
                    Sign up and get exclusive special deals
                </Text>
                <div className=" flex flex-row w-full">
                    <div className="bg-white-A700 h-[52px] mb-[68px] md:mt-0 mt-[31px] rounded-bl-[12px] rounded-tl-[12px] w-[80%]"></div>
                    <Button
                        className="cursor-pointer mb-[68px] min-w-[97px] md:mt-0 mt-[31px] rounded-br-[12px] rounded-tr-[12px] text-center text-sm tracking-[0.70px]"
                        size="lg"
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </>
    )
}
