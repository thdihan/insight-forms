import { CustomTrigger } from "@/components/dashboard/CustomSidebarTrigger";
import React from "react";

type Props = {};

function page({}: Props) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <CustomTrigger />
                <h3 className="text-2xl font-bold">InsightForm</h3>
            </div>
        </div>
    );
}

export default page;
