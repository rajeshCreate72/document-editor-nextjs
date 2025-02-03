"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { ChevronDown } from "lucide-react";

const FontFamilyButton = () => {
    const { editor } = useEditorStore();

    const fonts = [
        { label: "Arial", value: "Arial, sans-serif" },
        { label: "Verdana", value: "Verdana, sans-serif" },
        { label: "Tahoma", value: "Tahoma, sans-serif" },
        { label: "Trebuchet MS", value: "'Trebuchet MS', sans-serif" },
        { label: "Times New Roman", value: "'Times New Roman', serif" },
        { label: "Georgia", value: "Georgia, serif" },
        { label: "Garamond", value: "'Garamond', serif" },
        { label: "Courier New", value: "'Courier New', monospace" },
        { label: "Lucida Console", value: "'Lucida Console', monospace" },
        { label: "Comic Sans MS", value: "'Comic Sans MS', cursive, sans-serif" },
        { label: "Impact", value: "Impact, sans-serif" },
        { label: "Palatino Linotype", value: "'Palatino Linotype', serif" },
        { label: "Arial Black", value: "'Arial Black', sans-serif" },
        { label: "Helvetica", value: "Helvetica, sans-serif" },
        { label: "Calibri", value: "Calibri, sans-serif" },
        { label: "Cambria", value: "Cambria, serif" },
        { label: "Consolas", value: "Consolas, monospace" },
        { label: "Franklin Gothic Medium", value: "'Franklin Gothic Medium', sans-serif" },
        { label: "Century Gothic", value: "'Century Gothic', sans-serif" },
        { label: "Lucida Sans", value: "'Lucida Sans', sans-serif" },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-7 w-[150px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm ">
                    <span className="truncate">{editor?.getAttributes("textStyle").fontFamily || "Arial"}</span>
                    <ChevronDown className="ml-2 size-4 shrink-0 " />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {fonts.map(({ label, value }) => (
                    <button
                        onClick={() => editor?.chain().focus().setFontFamily(value).run()}
                        key={value}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 ",
                            editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
                        )}
                        style={{ fontFamily: value }}
                    >
                        <span className="text-sm">{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default FontFamilyButton;
