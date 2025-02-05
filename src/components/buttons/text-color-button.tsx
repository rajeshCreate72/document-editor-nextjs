import { useEditorStore } from "@/store/use-editor-store";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { type ColorResult, SketchPicker } from "react-color";

const TextColorButton = () => {
    const { editor } = useEditorStore();

    const value = editor?.getAttributes("textStyle").color || "#000000";

    const onChangeColor = (color: ColorResult) => {
        editor?.chain().focus().setColor(color.hex).run();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm ">
                    <span className="text-xs">A</span>
                    <div className="h-0.5 w-full" style={{ backgroundColor: value }} />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2.5 z-10">
                <SketchPicker color={value} onChange={onChangeColor} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TextColorButton;
