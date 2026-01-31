import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/hackminds/HeroSection";
import NarrativeContext from "@/components/hackminds/NarrativeContext";
import RolesTabs from "@/components/hackminds/RolesTabs";
import MissionValues from "@/components/hackminds/MissionValues";
import ValuePropTable from "@/components/hackminds/ValuePropTable";
import ObjectivesModule from "@/components/hackminds/ObjectivesModule";
import RoutesGrid from "@/components/hackminds/RoutesGrid";
import MentorsModule from "@/components/hackminds/MentorsModule";
import AlliancesGrid from "@/components/hackminds/AlliancesGrid";
import StudentBoard from "@/components/hackminds/StudentBoard";
import FinancingSection from "@/components/hackminds/FinancingSection";
import CallToAction from "@/components/hackminds/CallToAction";
import ClosingSection from "@/components/hackminds/ClosingSection";
import FeaturedEventsCarousel from "@/components/hackminds/FeaturedEventsCarousel";

const HackMindsLanding = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Header />
            <main>
                <HeroSection />
                <NarrativeContext />
                <MissionValues />
                <ObjectivesModule />
                <RoutesGrid />
                <MentorsModule />
                <AlliancesGrid />
                <StudentBoard />
                <FinancingSection />
                <FeaturedEventsCarousel />
                <CallToAction />
                <ClosingSection />
            </main>
            <Footer />
        </div>
    );
};

export default HackMindsLanding;
