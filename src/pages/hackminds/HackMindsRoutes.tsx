import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import RoutesGrid from "@/components/hackminds/RoutesGrid";

const HackMindsRoutes = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Header />
            <main className="pt-20">
                <RoutesGrid />
            </main>
            <Footer />
        </div>
    );
};

export default HackMindsRoutes;
