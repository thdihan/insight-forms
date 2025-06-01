import { GripVertical, Plus } from "lucide-react";
import React from "react";
import TextInput from "../inputs/TextInput";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Props = { name: string; placeholder?: string };

const RadiobuttonsField = ({ name, placeholder }: Props) => {
    return (
        <div className="px-3 py-4 border-s-4 border-s-black rounded-md border flex gap-x-4 items-center">
            <GripVertical className="w-5 h-5" />
            <div className="space-y-4 flex-1">
                <TextInput
                    name={name}
                    placeholder={placeholder || "Enter checkbox group name..."}
                    label="Radio buttons group name."
                />
                <div className="flex flex-col gap-y-4 ms-4 border-s-2 border-gray-300 border-dashed ps-4">
                    <div className="flex items-center gap-x-4">
                        <Label id="terms-2">Option 1</Label>
                        <TextInput
                            name={name}
                            placeholder={
                                placeholder || "Enter checkbox group name..."
                            }
                            label="Checkbox group name."
                            labelStyle="hidden"
                        />
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Label id="terms-2">Option 1</Label>
                        <TextInput
                            name={name}
                            placeholder={
                                placeholder || "Enter checkbox group name..."
                            }
                            label="Checkbox group name."
                            labelStyle="hidden"
                        />
                    </div>
                    <div>
                        <Button className="cursor-pointer" variant="outline">
                            <Plus />
                            Add options
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RadiobuttonsField;
