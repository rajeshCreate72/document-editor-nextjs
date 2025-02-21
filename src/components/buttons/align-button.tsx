import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

const AlignButton = () => {
    const { editor } = useEditorStore();

    const alignments = [
        {
            label: "Align left",
            value: "left",
            icon: AlignLeftIcon,
        },
        {
            label: "Align center",
            value: "center",
            icon: AlignCenterIcon,
        },
        {
            label: "Align right",
            value: "right",
            icon: AlignRightIcon,
        },
        {
            label: "Align justify",
            value: "justify",
            icon: AlignJustifyIcon,
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm ">
                    <AlignLeftIcon className="size-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2.5 z-10 flex flex-col gap-y-1 bg-white">
                {alignments.map(({ label, value, icon: Icon }) => (
                    <button
                        key={value}
                        onClick={() => editor?.chain().focus().setTextAlign(value).run()}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                            editor?.isActive({ textAlign: value }) && "bg-neutral-200/80"
                        )}
                    >
                        <Icon className="size-4" />
                        <span className="text-sm">{label}</span>
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default AlignButton;
