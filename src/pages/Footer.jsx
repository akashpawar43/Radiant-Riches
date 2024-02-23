import React from 'react'
import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Footer() {
    const unitedStatesOptionsList = [
        { label: "Option1", value: "option1" },
        { label: "Option2", value: "option2" },
        { label: "Option3", value: "option3" },
    ];
    return (
        <>
            <div className="absolute bg-blue_gray-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start mb-[70px] md:ml-[0] ml-[227px] w-[57%] md:w-full">
                    <footer class="bg-white dark:bg-gray-900">
                        <div class="mx-auto w-full max-w-screen-xl">
                            <div class="grid grid-cols-2 gap-40 px-4 py-6 lg:py-8 md:grid-cols-4">
                                <div>
                                    <h2 class="mb-6 text-sm text-gray-300 uppercase">Company</h2>
                                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                        <li class="mb-4">
                                            <a href="#" class=" hover:underline">Web Builder</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Hosting</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Data Center</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Robotic-Automation</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 class="mb-6 text-sm text-gray-300 uppercase dark:text-white">Contact</h2>
                                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Contact</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Privacy Policy</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Term Of Service</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">Categories</a>
                                        </li>
                                        <li class="mb-4">
                                            <a href="#" class="hover:underline">About</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
