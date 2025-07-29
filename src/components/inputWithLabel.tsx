import { Input } from './ui/input';
import type { FC, ReactNode } from 'react';

interface InputWithLabelProps {
    id: string;
    label: string | ReactNode;
    placeholder: string;
    value: string | number | readonly string[];
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputWithLabel: FC<InputWithLabelProps> = (props) => {
    return (
        <div className='grid w-full max-w-sm items-center gap-1'>
            <label>{props.label}</label>
            <Input
                type='text'
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}
