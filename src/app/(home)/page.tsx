"use client";

import React from "react";
import { Navbar } from "./navbar";
import { TemplageGallery } from "./template-gallery";

import { api } from "../../../convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { DocumentsTable } from "./document-table";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
    const [search] = useSearchParam();
    const { results, status, loadMore } = usePaginatedQuery(api.documents.get, { search }, { initialNumItems: 5 });

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed p-4 top-0 left-0 right-0 z-10 h-10 bg-white">
                <Navbar />
            </div>
            <div className="mt-20">
                <TemplageGallery />
            </div>
            <DocumentsTable documents={results} loadMore={loadMore} status={status} />
        </div>
    );
};

export default Home;
