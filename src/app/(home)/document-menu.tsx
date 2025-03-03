import { ExternalLinkIcon, FilePenIcon, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Id } from "../../../convex/_generated/dataModel";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RemoveDialog } from "@/components/remove-dialog";
import { TrashIcon } from "lucide-react";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
}

export const DocuemntMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <RenameDialog documentId={documentId} initialTitle={title}>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                        <FilePenIcon className="size-4 mr-2" />
                        Rename
                    </DropdownMenuItem>
                </RenameDialog>
                <RemoveDialog documentId={documentId}>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                        <TrashIcon className="size-4 mr-2" />
                        Remove
                    </DropdownMenuItem>
                </RemoveDialog>
                <DropdownMenuItem onClick={() => onNewTab(documentId)}>
                    <ExternalLinkIcon className="size-4" /> Open in new tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
