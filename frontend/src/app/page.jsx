import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/HeroSection';
import TodayMenu from '../components/TodayMenu';
import MenuHighlights from '../components/MenuHighlights';
import SpecialMenu from '../components/SpecialMenu';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ReservationSection from '../components/ReservationSection';

const HomePage = () => {
    return (
        <div className="bg-off-white min-h-screen">
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <TodayMenu />

            {/* Menu Highlights Section */}
            <MenuHighlights />

            <SpecialMenu />

            {/* Testimonials Section */}
            {/* <TestimonialsSection /> */}

            {/* Reservation Section */}
            <ReservationSection />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;
