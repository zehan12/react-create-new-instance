"use client";

import { DisplayText } from "@/components/DisplayText";
import { Input } from "@/components/Input";
import { useState } from "react";

export default function Home() {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    const handleToggle = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <>
            <div className="flex items-center justify-center p-20">
                <button
                    onClick={handleToggle}
                    className="bg-green-700 hover:bg-green-800 rounded-lg p-3"
                    aria-label="Toggle login state"
                >
                    Toggle to change state
                </button>
            </div>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div>
                    <h4 className="text-red-700 text-3xl">
                        Example 1: With Unique Key Prop
                    </h4>
                    <p className="text-gray-600 mb-4">
                        In this example, both <code>Input</code> and{" "}
                        <code>DisplayText</code> components are given unique{" "}
                        <code>key</code> props based on the login state. This
                        ensures that React can efficiently update the UI by
                        keeping track of changes.
                    </p>
                    <div className="text-center flex justify-center items-center m-10 border-2 h-40 w-80">
                        {isLoggedIn ? (
                            <div
                                key="loggedIn"
                                className="flex flex-col justify-evenly h-20"
                            >
                                <Input placeholder="Logged In Input" />
                                <DisplayText text="User logged in" />
                            </div>
                        ) : (
                            <div
                                key="loggedOut"
                                className="flex flex-col justify-evenly h-20"
                            >
                                <Input placeholder="Logged Out Input" />
                                <DisplayText text="User logged out" />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h4 className="text-red-700 text-3xl">
                        Example 2: Without Unique Key Prop
                    </h4>
                    <p className="text-gray-600 mb-4">
                        In this example, the <code>Input</code> and{" "}
                        <code>DisplayText</code> components are rendered without
                        unique <code>key</code> props. React will still work,
                        but it may not optimize updates as effectively compared
                        to using unique keys.
                    </p>
                    <div className="text-center flex justify-center items-center m-10 border-2 h-40 w-80">
                        {isLoggedIn ? (
                            <div className="flex flex-col justify-evenly h-20">
                                <Input placeholder="Logged In Input" />
                                <DisplayText text="User logged in" />
                            </div>
                        ) : (
                            <div className="flex flex-col justify-evenly h-20">
                                <Input placeholder="Logged Out Input" />
                                <DisplayText text="User logged out" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
