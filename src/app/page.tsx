import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white">
            <Link href={"/documents/123"}>
                Click <Button>here</Button> to go to component page
            </Link>
        </div>
    );
};

export default Home;
