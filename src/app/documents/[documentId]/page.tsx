import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
    const awaitedParams = await params;

    return (
        <div>
            <Toolbar />
            <Editor />
        </div>
    );
};

export default DocumentIdPage;
