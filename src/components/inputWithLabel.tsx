import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import type { FC, ReactNode } from "react";

interface InputWithLabelProps {
    id: string;
    label: string | ReactNode;
    placeholder: string;
}

export const InputWithLabel: FC<InputWithLabelProps> = (props) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1">
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input type="text" id={props.id} placeholder={props.placeholder} />
        </div>
    )
}
