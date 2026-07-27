import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowDown, Fingerprint, Brain, Apple, Home as HomeIcon,
  Droplets, Sprout, Sun, Map, ScanLine, Sparkles, Users, Microscope,
  BarChart3, LogIn, MousePointerClick, ScrollText, Palette, Bot, Mail
} from 'lucide-react';

const NODE_TYPES = {
  entry: { ring: 'border-[#5eead4]/40', glow: 'rgba(94,234,212,0.25)', tag: 'Entry', tagColor: 'text-[#5eead4]' },
  section: { ring: 'border-stone-600/40', glow: 'rgba(214,211,209,0.12)', tag: 'Section', tagColor: 'text-stone-300' },
  action: { ring: 'border-[#d4a373]/40', glow: 'rgba(212,163,115,0.25)', tag: 'Action', tagColor: 'text-[#d4a373]' },
  modal: { ring: 'border-[#5eead4]/30', glow: 'rgba(94,234,212,0.18)', tag: 'Modal', tagColor: 'text-[#5eead4]' },
  system: { ring: 'border-stone-500/30', glow: 'rgba(214,211,209,0.08)', tag: 'System', tagColor: 'text-stone-400' },
  terminal: { ring: 'border-[#d4a373]/50', glow: 'rgba(212,163,115,0.3)', tag: 'Outcome', tagColor: 'text-[#d4a373]' },
};

function Node({ icon: Icon, title, subtitle, type = 'section', delay = 0, active, onClick }) {
  const t = NODE_TYPES[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.5 }}
      onClick={onClick}
      className={`relative w-full glass-panel rounded-sm border ${t.ring} p-4 flex items-center gap-4 transition-all duration-300 ${active ? 'scale-[1.02]' : 'hover:bg-white/5'} ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div
        className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center border bg-white/5"
        style={{ borderColor: 'inherit', boxShadow: `0 0 24px ${t.glow}` }}
      >
        <Icon className="w-5 h-5" style={{ color: type === 'action' || type === 'terminal' ? '#d4a373' : '#5eead4' }} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-60">{t.tag}</span>
        </div>
        <h4 className="font-serif text-base text-stone-100 leading-tight truncate">{title}</h4>
        {subtitle && <p className="font-mono text-[10px] text-stone-500 leading-snug mt-0.5 line-clamp-2">{subtitle}</p>}
      </div>
    </motion.div>
  );
}

function Connector({ label }) {
  return (
    <div className="flex flex-col items-center gap-1 py-1.5">
      {label && <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-stone-600">{label}</span>}
      <ArrowDown className="w-3.5 h-3.5 text-stone-700" />
    </div>
  );
}

function Branch({ left, right }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 relative">
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 w-px h-6 bg-stone-700/60" />
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-3 w-px h-6 bg-stone-700/60" />
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-stone-700/40" />
      {left}
      {right}
    </div>
  );
}

function LegendItem({ type, label }) {
  const t = NODE_TYPES[type];
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2.5 h-2.5 rounded-full border ${t.ring} bg-white/5`} style={{ boxShadow: `0 0 10px ${t.glow}` }} />
      <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400">{label}</span>
    </div>
  );
}

export default function UserJourney() {
  const [activePath, setActivePath] = useState('guest');

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#0a1410', color: '#d6d3d1' }}>
      <style>{`
        .font-serif { font-family: "Playfair Display", serif; }
        .font-mono { font-family: "Space Mono", monospace; }
        .glass-panel { background: rgba(255,255,255,0.03); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.08); }
        .grid-bg { background-image: linear-gradient(rgba(94,234,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.04) 1px, transparent 1px); background-size: 48px 48px; }
      `}</style>

      {/* Header */}
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-[#5eead4]/30 rounded-full bg-[#0a1410]/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse" style={{ boxShadow: '0 0 10px rgba(94,234,212,0.8)' }} />
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#5eead4]">System Map / User Journey</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-100 leading-tight mb-4">
            The Biological Terrain <br />
            <span className="italic text-[#5eead4]">Journey Map</span>
          </h1>
          <p className="max-w-xl mx-auto font-mono text-xs text-stone-400 leading-relaxed tracking-wide border-t border-white/10 pt-6">
            A visual cartography of every path a visitor, applicant, and member can traverse through the Deep Nature experience — from first scroll to protocol activation.
          </p>

          {/* Path toggle */}
          <div className="flex justify-center gap-2 mt-10">
            {[
              { key: 'guest', label: 'Guest Discovery' },
              { key: 'applicant', label: 'Membership Applicant' },
              { key: 'member', label: 'Member Terminal' },
            ].map(p => (
              <button
                key={p.key}
                onClick={() => setActivePath(p.key)}
                className={`px-4 py-2 rounded-sm border font-mono text-[9px] uppercase tracking-widest transition-all ${
                  activePath === p.key
                    ? 'border-[#5eead4] bg-[#5eead4]/10 text-[#5eead4]'
                    : 'border-white/10 bg-white/5 text-stone-400 hover:border-white/20'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Legend */}
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-white/5">
        <LegendItem type="entry" label="Entry" />
        <LegendItem type="section" label="Page Section" />
        <LegendItem type="action" label="User Action" />
        <LegendItem type="modal" label="Modal / Overlay" />
        <LegendItem type="system" label="System / AI" />
        <LegendItem type="terminal" label="Outcome" />
      </div>

      {/* Map */}
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-0">

        {/* Global persistent tools */}
        <div className="mb-6">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600 block mb-3">Persistent Layer — active throughout</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Node icon={Palette} title="Theme Switcher" subtitle="Clinical · Elemental · Futuristic" type="system" delay={0.05} />
            <Node icon={Bot} title="Lab Assistant" subtitle="Contextual guidance per section" type="system" delay={0.1} />
            <Node icon={ScrollText} title="Scroll Progress" subtitle="Navigation tracker" type="system" delay={0.15} />
          </div>
        </div>

        <div className="my-8 border-t border-dashed border-white/10" />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600 block mb-4">Primary Flow</span>

        {/* ENTRY */}
        <Node icon={LogIn} title="Landing — Hero" subtitle="“Where Nature Meets Intelligence” · scroll to enter" type="entry" />

        {/* Hero branch */}
        <Branch
          left={
            <>
              <Node icon={MousePointerClick} title="Digital Simulator" subtitle="Hero CTA button" type="action" />
              <Connector />
              <Node icon={Microscope} title="Digital Terrain Simulator" subtitle="Interactive biometric sandbox" type="modal" />
              <Connector />
              <Node icon={BarChart3} title="Biometric Dashboard" subtitle="Overlay — live readings" type="modal" />
            </>
          }
          right={
            <>
              <Node icon={ScanLine} title="Scroll Down" subtitle="Enter the Protocol" type="action" />
              <Connector label="continue" />
              <Node icon={Brain} title="Digital Terrain Section" subtitle="Neural · Bio-Nutrition · Environmental Base" type="section" />
            </>
          }
        />

        <Connector />

        {/* Terrain concept cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Node icon={Brain} title="Neural Mapping" type="action" delay={0.05} />
          <Node icon={Apple} title="Bio-Nutrition" type="action" delay={0.1} />
          <Node icon={HomeIcon} title="Environmental Base" type="action" delay={0.15} />
        </div>

        <Connector />
        <Node icon={Sparkles} title="Concept Details Modal" subtitle="AI-generated overview · methodology · case study · outcomes" type="modal" />

        <Connector label="from modal" />
        <Branch
          left={
            <>
              <Node icon={Map} title="View Journey" subtitle="Protocol Journey visualization" type="modal" />
            </>
          }
          right={
            <>
              <Node icon={Fingerprint} title="Begin Protocol" subtitle="Opens Member Access modal" type="action" />
            </>
          }
        />

        <Connector />

        {/* Continue scroll */}
        <Node icon={Map} title="Blue Zone Section" subtitle="Engineering Your Personal Blue Zone" type="section" />
        <Connector label="click image" />
        <Node icon={Sparkles} title="Concept Details Modal" subtitle="Blue Zone Engineering protocol" type="modal" />

        <Connector />
        <Node icon={BarChart3} title="Global Impact Counter" subtitle="Aggregate healthspan metrics" type="section" />

        <Connector />
        <Node icon={Users} title="Transformation Stories" subtitle="Member testimonials · AI-perspective aware" type="section" />

        <Connector />
        <Node icon={Droplets} title="The Elements Section" subtitle="Fluid Dynamics · Microbiome · Mitochondrial Light" type="section" />
        <Connector label="toggle perspective" />
        <Node icon={Sparkles} title="AI Content Generation" subtitle="Clinical / Holistic / Futuristic tones" type="system" />

        <Connector />
        <Node icon={HomeIcon} title="Footer" subtitle="Manifesto · Apply for Membership · Contact" type="section" />

        <div className="my-10 border-t border-dashed border-white/10" />

        {/* Membership flow */}
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600 block mb-4">Membership & Access Flow</span>
        <Node icon={Fingerprint} title="Member Access Modal" subtitle="Triggered from nav, footer, or “Begin Protocol”" type="modal" />

        <Connector label="two paths" />
        <Branch
          left={
            <>
              <Node icon={LogIn} title="Member Login" subtitle="BIO-ID + Genetic Key" type="action" />
              <Connector label="authenticate" />
              <Node icon={Fingerprint} title="Member Dashboard" subtitle="Recommended protocols · terrain score" type="modal" />
              <Connector />
              <Node icon={Microscope} title="Terrain Assessment" subtitle="AI-powered biological analysis" type="modal" />
            </>
          }
          right={
            <>
              <Node icon={MousePointerClick} title="Application Form" subtitle="Name · Email · Interests" type="action" />
              <Connector label="submit" />
              <Node icon={Sparkles} title="Generate Personalized Tiers" subtitle="Explorer · Sustainer · Pioneer" type="system" />
              <Connector label="select tier" />
              <Node icon={MousePointerClick} title="Submit Application" subtitle="Persist application record" type="action" />
            </>
          }
        />

        <Connector label="on submit" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Node icon={Droplets} title="MembershipApplication Record" subtitle="Saved to database — status: pending" type="terminal" />
          <Node icon={Mail} title="Confirmation Email" subtitle="Sent to applicant with tier details" type="terminal" />
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#13241c]/30">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-serif text-sm text-stone-300">Centre for Biological Medicine — Journey Cartography</span>
          <span className="font-mono text-[9px] text-stone-600 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse" />
            Map Synced
          </span>
        </div>
      </footer>
    </div>
  );
}