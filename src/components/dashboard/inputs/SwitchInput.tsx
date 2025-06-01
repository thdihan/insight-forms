import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

type Props = {
    checked?: boolean;
    changeChecked?: (checked: boolean) => void;
    label: string;
    labelStyle?: string;
    inputStyle?: string;
};

const SwitchInput = ({
    checked,
    changeChecked,
    label,
    labelStyle,
    inputStyle,
}: Props) => {
    return (
        <div className="flex gap-x-2 text-sm items-center">
            <Switch
                checked={checked}
                // onCheckedChange={(checked) => changeChecked(checked)}
                className={`${inputStyle}`}
            />
            <Label className={`${labelStyle}`}>{label}</Label>
        </div>
    );
};

export default SwitchInput;
