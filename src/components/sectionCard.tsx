import type { FC, ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { InputWithLabel } from "./inputWithLabel";

interface SectionCardProps {
    group: {
        id: string;
        title: string;
        description: string;
        fields: {
            id: string;
            label: ReactNode;
            placeholder: string;
        }[];
    };
    index: number;
}

export const SectionCard: FC<SectionCardProps> = (props) => {
    return (
        <Card
            id={props.group.id}
            key={props.group.id}
            className="scroll-mt-20"
        >
            <CardHeader>
                <CardTitle>{`${props.index + 1}. ${props.group.title}`}</CardTitle>
                <CardDescription>{props.group.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {props.group.fields.map(field => (
                    <InputWithLabel key={field.id} {...field} />
                ))}
            </CardContent>
        </Card>
    )
}
