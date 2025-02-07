"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
    BoldIcon,
    ItalicIcon,
    ListTodo,
    LucideIcon,
    MessageSquarePlusIcon,
    PrinterIcon,
    Redo2Icon,
    RemoveFormattingIcon,
    SpellCheckIcon,
    UnderlineIcon,
    Undo2Icon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FontFamilyButton from "@/components/buttons/font-family-button";
import HeadingLevelButton from "@/components/buttons/heading-level-button";
import TextColorButton from "@/components/buttons/text-color-button";
import HighlightColorButton from "@/components/buttons/highlight-color-button";
import LinkButton from "@/components/buttons/link-button";
import ImageButton from "@/components/buttons/image-button";
import AlignButton from "@/components/buttons/align-button";
import ListButton from "@/components/buttons/list-button";
import FontSizeButton from "@/components/buttons/font-size-button";
import LineHeightButton from "@/components/buttons/line-height-button";

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
}

const ToolbarButton = ({ onClick, isActive, icon: Icon }: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "text-sm min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 ",
                isActive && "bg-neutral-200/80 "
            )}
        >
            <Icon className="size-4" />
        </button>
    );
};

export const Toolbar = () => {
    const { editor } = useEditorStore();

    const sections: {
        label: string;
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label: "Spell check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
                },
            },
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive: editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleItalic().run(),
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                isActive: editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
            },
        ],
        [
            {
                label: "Comment",
                icon: MessageSquarePlusIcon,
                onClick: () => console.log("comment clicked"),
                isActive: false,
            },
            {
                label: "List Todo",
                icon: ListTodo,
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
                isActive: false,
            },
            {
                label: "Remove formatting",
                icon: RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
        ],
    ];

    return (
        <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto ">
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
            <FontFamilyButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
            <HeadingLevelButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
            <FontSizeButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
            {sections[1].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
            <TextColorButton />
            <HighlightColorButton />
            <LinkButton />
            <ImageButton />
            <AlignButton />
            <ListButton />
            <LineHeightButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300 " />
            {sections[2].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
        </div>
    );
};
