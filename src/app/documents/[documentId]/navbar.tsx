"use client";

import Image from "next/image";
import Link from "next/link";

import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";

import DocumentInput from "./document-input";
import {
    BoldIcon,
    FileIcon,
    FileJsonIcon,
    FilePenIcon,
    FilePlusIcon,
    FileTextIcon,
    GlobeIcon,
    ItalicIcon,
    PrinterIcon,
    Redo2Icon,
    RemoveFormattingIcon,
    StrikethroughIcon,
    TextIcon,
    TrashIcon,
    UnderlineIcon,
    Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";
import { Avatars } from "./avatars";
import { Inbox } from "./inbox";

export const Navbar = () => {
    const { editor } = useEditorStore();

    const tableTypes = ["1 X 1", "2 X 2", "3 X 3", "4 X 4"];

    const insertTableDoc = ({ rows, cols }: { rows: number; cols: number }) => {
        editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
    };

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
    };

    const onSaveJSON = () => {
        if (!editor) return;

        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], { type: "application/json" });
        onDownload(blob, `document.json`); //TODO: add name of the document
    };

    const onSaveHTML = () => {
        if (!editor) return;

        const content = editor.getHTML();
        const blob = new Blob([content], { type: "text/html" });
        onDownload(blob, `document.html`); //TODO: add name of the document
    };

    const onSaveText = () => {
        if (!editor) return;

        const content = editor.getText();
        const blob = new Blob([content], { type: "text/plain" });
        onDownload(blob, `document.txt`); //TODO: add name of the document
    };

    return (
        <nav className="flex items-center justify-between print:hidden">
            <div className="flex justify-center items-center gap-2">
                <div className="flex gap-2 items-center ">
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" width={36} height={36} />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <DocumentInput />
                    <div className="flex print:hidden">
                        <Menubar className="border-none bg-transparent shadow-none h-auto p-0 print:hidden">
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    File
                                </MenubarTrigger>
                                <MenubarContent className="print:hidden">
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <FileIcon className="size-4 mr-2" />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={onSaveJSON}>
                                                <FileJsonIcon className="size-4 mr-2" />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveHTML}>
                                                <GlobeIcon className="size-4 mr-2" />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={() => window.print()}>
                                                <BsFilePdf className="size-4 mr-2" />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveText}>
                                                <FileTextIcon className="size-4 mr-2" />
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <FilePlusIcon className="size-4 mr-2" />
                                        New document
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <FilePenIcon className="size-4 mr-2" />
                                        Rename
                                    </MenubarItem>
                                    <MenubarItem>
                                        <TrashIcon className="size-4 mr-2" />
                                        Remove
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className="size-4 mr-2" />
                                        Print <MenubarShortcut>CTRL + P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                        <Undo2Icon />
                                        Undo<MenubarShortcut>CTRL + Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                                        <Redo2Icon />
                                        Redo<MenubarShortcut>CTRL + Y</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Tabel</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            {tableTypes.map((table, ind) => (
                                                <MenubarItem
                                                    onClick={() =>
                                                        insertTableDoc({
                                                            rows: parseInt(table.charAt(0)),
                                                            cols: parseInt(table.charAt(table.length - 1)),
                                                        })
                                                    }
                                                    key={ind}
                                                >
                                                    {table}
                                                </MenubarItem>
                                            ))}
                                        </MenubarSubContent>
                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className="size-4 mr-2" />
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                                <BoldIcon className="size-4 mr-2" />
                                                Blod <MenubarShortcut>CTRL + B</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                                <ItalicIcon className="size-4 mr-2" />
                                                Italic <MenubarShortcut>CTRL + I</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem
                                                onClick={() => editor?.chain().focus().toggleUnderline().run()}
                                            >
                                                <UnderlineIcon className="size-4 mr-2" />
                                                Underline <MenubarShortcut>CTRL + U</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                                                <StrikethroughIcon className="size-4 mr-2" />
                                                <span>Strike through&nbsp;&nbsp;</span>{" "}
                                                <MenubarShortcut>CTRL + S</MenubarShortcut>
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                                        <RemoveFormattingIcon className="size-4 mr-2" />
                                        Clear Formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
            <div className="flex gap-3 items-center pl-6">
                <Inbox />
                <Avatars />
                <OrganizationSwitcher
                    afterCreateOrganizationUrl="/"
                    afterLeaveOrganizationUrl="/"
                    afterSelectOrganizationUrl="/"
                    afterSelectPersonalUrl="/"
                />
                <UserButton />
            </div>
        </nav>
    );
};
