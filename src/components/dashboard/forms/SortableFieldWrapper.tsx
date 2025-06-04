import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    GripVertical,
    Trash,
    Trash2,
} from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import _ from "lodash";

type Props = {
    id: number;
    children: React.ReactNode;
    type: string;
    sectionIdx: number;
    deleteAction: (e: any, id: number, sectionIdx: number) => void;
};

const SortableFieldWrapper = ({
    id,
    children,
    type,
    deleteAction,
    sectionIdx,
}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            onClick={() => setExpanded((prev) => !prev)}
            className="px-3 py-4 border-s-4 border-s-black rounded-md border flex gap-x-4 items-center bg-white"
        >
            <div
                {...attributes}
                {...listeners}
                className="text-gray-400 hover:text-gray-600 cursor-grab"
            >
                <GripVertical className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-4 transition-all">
                <div className="flex justify-between items-center">
                    <p className="text-muted-foreground text-sm">
                        Type : {_.capitalize(type)}
                    </p>
                    <Trash2
                        onClick={(e) => deleteAction(e, id, sectionIdx)}
                        className="w-5 h-5 text-red-500"
                    />
                </div>
                {expanded && children}
            </div>

            <div className="ml-auto pt-1 items-start cursor-pointer">
                {expanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
            </div>
        </div>
    );
};

export default SortableFieldWrapper;
