import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplageGallery } from "./template-gallery";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed p-4 top-0 left-0 right-0 z-10 h-10 bg-white">
                <Navbar />
            </div>
            <div className="mt-20">
                <TemplageGallery />
            </div>
        </div>
    );
};

export default Home;
