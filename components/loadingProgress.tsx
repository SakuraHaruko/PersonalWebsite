"use client";

import {ReactNode} from "react";
import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
const Loading = ({children}: {children: ReactNode}) => {
    return (
        <>
            <ProgressBar height="2px" color="#f9a8d4" options={{showSpinner: false}} />
            {children}
        </>
    );
};
export default Loading;