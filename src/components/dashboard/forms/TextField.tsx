import { GripVertical } from "lucide-react";
import React from "react";
import TextInput from "../inputs/TextInput";
import SwitchInput from "../inputs/SwitchInput";

type Props = {};

const TextField = (props: Props) => {
    return (
        <div className="px-3 py-4 border-s-4 border-s-black rounded-md border flex gap-x-4 items-center">
            <GripVertical className="w-5 h-5" />
            <div className="space-y-4 flex-1">
                <TextInput
                    name="text-form"
                    placeholder="Enter Name"
                    label="Text Form"
                />
                <div className="flex gap-x-4">
                    <SwitchInput label="Required" />
                    <SwitchInput label="Multi line input" />
                </div>
            </div>
        </div>
    );
};

export default TextField;
