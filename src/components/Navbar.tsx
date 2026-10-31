import React, { useState } from 'react';
import { Menu, X, ChevronDown, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenRegister,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialsDropdown, setTestimonialsDropdown] = useState(false);

  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setTestimonialsDropdown(false);
  };

  const isTestimonialActive = 
    currentView === 'testimonials' || 
    currentView === 'student-testimonials' || 
    currentView === 'parent-testimonials';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-stone-900 border-b border-stone-200 shadow-md">
      
      {/* Signature Teal Letterhead Accent Strip */}
      <div className="h-1 bg-gradient-to-r from-[#1f5e5e] via-[#3dabab] to-[#1f5e5e]" />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Crest & Wordmark */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3.5 hover:opacity-95 transition-all whitespace-nowrap shrink-0 text-left cursor-pointer group py-1"
          title="SpeakSmart Centre for Communication - Home"
        >
          <img
            src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
            alt="SpeakSmart Centre for Communication Logo"
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-xs"
          />
          <div className="flex flex-col">
            <div className="flex items-baseline leading-none font-display">
              <span 
                className="font-script text-2xl sm:text-3xl lg:text-[32px] font-bold text-stone-950"
                style={{ fontFamily: "'Hand of Sean', 'Hand Of Sean', cursive" }}
              >
                Speak
              </span>
              <span 
                className="font-script text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#3dabab]"
                style={{ fontFamily: "'Hand of Sean', 'Hand Of Sean', cursive" }}
              >
                Smart
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-extrabold text-stone-700 mt-0.5 font-sans">
              Centre for Communication
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (Pill Style with Elevated Highlights) */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-2.5 text-xs xl:text-sm font-semibold text-stone-700">
          <button
            onClick={() => handleLinkClick('speaksmart')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              currentView === 'speaksmart'
                ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                : 'hover:text-stone-950 hover:bg-stone-100/90'
            }`}
          >
            What is SpeakSmart
          </button>

          <button
            onClick={() => handleLinkClick('aristri')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              currentView === 'aristri'
                ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                : 'hover:text-stone-950 hover:bg-stone-100/90'
            }`}
          >
            What is ARISTRI™
          </button>

          {/* Testimonials Dropdown Button */}
          <div 
            className="relative"
            onMouseEnter={() => setTestimonialsDropdown(true)}
            onMouseLeave={() => setTestimonialsDropdown(false)}
          >
            <button
              onClick={() => handleLinkClick('testimonials')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                isTestimonialActive
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 hover:bg-stone-100/90'
              }`}
            >
              <span>Testimonials</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${testimonialsDropdown ? 'rotate-180 text-[#3dabab]' : 'text-stone-400'}`} />
            </button>

            {testimonialsDropdown && (
              <div className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-xl shadow-2xl border border-stone-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <button
                  onClick={() => handleLinkClick('student-testimonials')}
                  className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                    currentView === 'student-testimonials' ? 'text-[#3dabab] bg-[#3dabab]/10 font-bold' : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#3dabab]/15 text-[#1f5e5e] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-[#3dabab]" />
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900">Student Testimonials</span>
                    <span className="text-[10px] text-stone-500 font-normal">Orator stories &amp; victories</span>
                  </div>
                </button>

                <div className="border-t border-stone-100 my-1"></div>

                <button
                  onClick={() => handleLinkClick('parent-testimonials')}
                  className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                    currentView === 'parent-testimonials' ? 'text-[#3dabab] bg-[#3dabab]/10 font-bold' : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#3dabab]/15 text-[#1f5e5e] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-[#3dabab]" />
                  </div>
                  <div>
                    <span className="block font-bold text-stone-900">Parent Testimonials</span>
                    <span className="text-[10px] text-stone-500 font-normal">Feedback from families</span>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('updates')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              currentView === 'updates'
                ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                : 'hover:text-stone-950 hover:bg-stone-100/90'
            }`}
          >
            Updates &amp; Exams
          </button>

          <button
            onClick={() => handleLinkClick('rules')}
            className={`px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
              currentView === 'rules'
                ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                : 'hover:text-stone-950 hover:bg-stone-100/90'
            }`}
          >
            Rules &amp; Code
          </button>
        </nav>

        {/* Primary Call-to-Action (Elevated Gradient with Shadow) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenRegister}
            className="px-5 py-2.5 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] hover:from-[#359b9b] hover:to-[#1c5c5c] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#3dabab]/20 hover:shadow-lg hover:shadow-[#3dabab]/30 cursor-pointer flex items-center gap-2 whitespace-nowrap"
          >
            <span>Register for New Semester</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenRegister}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] rounded-md shadow-xs cursor-pointer whitespace-nowrap"
          >
            Register
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800 focus:outline-none cursor-pointer transition-colors"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleLinkClick('speaksmart')}
            className={`block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              currentView === 'speaksmart' ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold' : 'text-stone-800 hover:bg-stone-100'
            }`}
          >
            What is SpeakSmart
          </button>
          
          <button
            onClick={() => handleLinkClick('aristri')}
            className={`block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              currentView === 'aristri' ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold' : 'text-stone-800 hover:bg-stone-100'
            }`}
          >
            What is ARISTRI™
          </button>

          {/* Testimonials with sub-buttons */}
          <div className="border-y border-stone-100 py-2 my-1">
            <button
              onClick={() => handleLinkClick('testimonials')}
              className={`flex items-center justify-between w-full text-left px-3.5 py-2 text-sm font-semibold rounded-lg ${
                isTestimonialActive ? 'text-[#3dabab] bg-[#3dabab]/10 font-bold' : 'text-stone-800 hover:bg-stone-100'
              }`}
            >
              <span>Testimonials</span>
              <span className="text-[10px] font-bold text-[#3dabab] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#3dabab]/30">Overview</span>
            </button>
            <div className="pl-3 space-y-1 mt-1.5">
              <button
                onClick={() => handleLinkClick('student-testimonials')}
                className={`flex items-center gap-2.5 w-full text-left px-3.5 py-2 text-xs rounded-lg ${
                  currentView === 'student-testimonials' ? 'text-[#3dabab] font-bold bg-[#3dabab]/10' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-[#3dabab]" />
                <span>Student Testimonials</span>
              </button>
              <button
                onClick={() => handleLinkClick('parent-testimonials')}
                className={`flex items-center gap-2.5 w-full text-left px-3.5 py-2 text-xs rounded-lg ${
                  currentView === 'parent-testimonials' ? 'text-[#3dabab] font-bold bg-[#3dabab]/10' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Users className="w-4 h-4 text-[#3dabab]" />
                <span>Parent Testimonials</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => handleLinkClick('updates')}
            className={`block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              currentView === 'updates' ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold' : 'text-stone-800 hover:bg-stone-100'
            }`}
          >
            Updates &amp; Exam Dates
          </button>
          
          <button
            onClick={() => handleLinkClick('rules')}
            className={`block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              currentView === 'rules' ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold' : 'text-stone-800 hover:bg-stone-100'
            }`}
          >
            Rules &amp; Regulations
          </button>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full text-center px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] hover:from-[#359b9b] hover:to-[#1c5c5c] rounded-lg cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              <span>Student Registration for New Semester</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
