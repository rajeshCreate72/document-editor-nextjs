import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
    const awaitedParams = await params;
    const { documentId } = awaitedParams;

    return (
        <div>
            <Toolbar />
            <Editor />
        </div>
    );
};

export default DocumentIdPage;
