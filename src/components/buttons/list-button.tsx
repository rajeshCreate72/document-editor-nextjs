import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { ListIcon, ListOrderedIcon } from "lucide-react";
import { type ColorResult, SketchPicker } from "react-color";

const ListButton = () => {
    const { editor } = useEditorStore();

    const lists = [
        {
            label: "Bullet list",
            icon: ListIcon,
            isActive: () => editor?.isActive("bulletList"),
            onclick: () => editor?.chain().focus().toggleBulletList().run(),
        },
        {
            label: "Ordered list",
            icon: ListOrderedIcon,
            isActive: () => editor?.isActive("orderedList"),
            onclick: () => editor?.chain().focus().toggleOrderedList().run(),
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm ">
                    <ListIcon className="size-4" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2.5 z-10 flex flex-col gap-y-1 bg-white">
                {lists.map(({ label, icon: Icon, onclick, isActive }) => (
                    <button
                        key={label}
                        onClick={onclick}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                            isActive() && "bg-neutral-200/80"
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

export default ListButton;
