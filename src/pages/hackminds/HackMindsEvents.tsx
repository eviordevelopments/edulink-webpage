import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import Timeline from "@/components/hackminds/Timeline";
import EventCards from "@/components/hackminds/EventCards";

const HackMindsEvents = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Header />
            <main className="pt-20">
                <Timeline />
                <EventCards />
            </main>
            <Footer />
        </div>
    );
};

export default HackMindsEvents;
