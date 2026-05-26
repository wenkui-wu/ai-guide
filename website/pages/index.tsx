import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedContent from '../components/FeaturedContent';
import Roadmap from '../components/Roadmap';
import Changelog from '../components/Changelog';
import GrowthChart from '../components/GrowthChart';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark to-slate-900 text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <FeaturedContent />
        <Roadmap />
        <Changelog />
        <GrowthChart />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
