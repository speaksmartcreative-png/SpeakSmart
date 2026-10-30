import React from 'react';
import { 
  Sparkles, 
  Compass, 
  BrainCircuit, 
  Activity, 
  CheckCircle2, 
  Target,
  Shield,
  Layers
} from 'lucide-react';
import { PROGRAMS_LIST } from '../data/mockData';

interface WhatIsSpeakSmartProps {
  onOpenRegister: () => void;
  onNavigateAristri: () => void;
}

export const WhatIsSpeakSmart: React.FC<WhatIsSpeakSmartProps> = ({
  onOpenRegister,
  onNavigateAristri,
}) => {
  return (
    <section id="what-is-speaksmart" className="py-16 md:py-24 bg-white text-black border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Logo & Motto */}
        <div className="mb-12 pb-8 border-b border-stone-200">
          <div className="flex items-center gap-4">
            <img
              src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
              alt="SpeakSmart Centre for Communication"
              className="h-16 sm:h-20 w-auto object-contain shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1f5e5e] mb-1">
                <span className="w-2.5 h-0.5 bg-[#3dabab]"></span>
                <span>Institute Overview &amp; Methodology</span>
                <span className="text-stone-300">·</span>
                <span className="font-mono text-stone-500">LLPIN: ACO-6485</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 font-display tracking-tight leading-tight">
                What is <span className="font-script text-4xl sm:text-5xl text-stone-950">Speak</span><span className="font-script text-4xl sm:text-5xl text-[#3dabab]">Smart</span>?
              </h2>
              <p className="text-sm font-bold text-[#1f5e5e] tracking-wide mt-1">
                Think • Speak • Lead
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Story / Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-black font-display">
              Breaking the Fear of the Podium Through Science & Practice
            </h3>
            <p className="text-stone-700 leading-relaxed">
              Every day, brilliant young students sit in classrooms with insightful ideas trapped behind pounding hearts, shaking hands, and cracked voices. Traditional schooling asks students to present, but rarely teaches them <em>how</em> to breathe, modulate, or structure thoughts under adrenaline.
            </p>
            <p className="text-stone-700 leading-relaxed">
              At SpeakSmart, we replace stage anxiety with muscle memory. Through weekly live podium trials, multi-angle camera debriefs, and classical rhetoric frameworks, our students learn to stand tall, look the world in the eye, and speak with unwavering clarity.
            </p>

            {/* Key Differentiators */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3dabab] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-black">12-Student Cohort Cap</h4>
                  <p className="text-xs text-stone-600">We never lecture to large halls. Every student speaks on the live microphone every single week.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3dabab] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-black">Audio-Visual Playback Diagnostics</h4>
                  <p className="text-xs text-stone-600">Students watch and listen to their own speeches in slow motion to self-correct posture, eye contact, and pacing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3dabab] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-black">Home to ARISTRI™ Examination System</h4>
                  <p className="text-xs text-stone-600">Double certification from GOI and SpeakSmart with live on-the-spot individual examiner testing.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenRegister}
                className="px-6 py-3 text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-md shadow-sm transition-all cursor-pointer"
              >
                Enroll for Upcoming Semester
              </button>
              <button
                onClick={onNavigateAristri}
                className="px-5 py-3 text-sm font-bold text-black hover:text-[#3dabab] border border-stone-300 hover:border-[#3dabab] rounded-md transition-colors cursor-pointer bg-white"
              >
                Learn About ARISTRI™ Examination →
              </button>
            </div>
          </div>

          {/* Right Bento / Visual Feature Box */}
          <div className="lg:col-span-5 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-inner space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3dabab]">
              <Layers className="w-4 h-4 text-[#3dabab]" />
              <span>The SpeakSmart Guarantee</span>
            </div>

            <h4 className="text-xl font-bold text-black font-display">
              The 16-Week Transformation Cycle
            </h4>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#3dabab] font-bold mb-1">
                  <span>WEEKS 1 – 4</span>
                  <span>FOUNDATION</span>
                </div>
                <h5 className="text-sm font-bold text-black">Overcoming Stage Terror & Diaphragmatic Breath</h5>
                <p className="text-xs text-stone-600 mt-1">
                  Vocal projection, grounding the stance, eliminating the dry mouth response, and commanding silence before the first word.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#3dabab] font-bold mb-1">
                  <span>WEEKS 5 – 8</span>
                  <span>STRUCTURE</span>
                </div>
                <h5 className="text-sm font-bold text-black">Thought Architecture & Keyword Cue Cards</h5>
                <p className="text-xs text-stone-600 mt-1">
                  Discarding full scripts. Mastering the 3-point framework, opening hooks, emotional storytelling, and impactful punchlines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#3dabab] font-bold mb-1">
                  <span>WEEKS 9 – 12</span>
                  <span>AGILITY</span>
                </div>
                <h5 className="text-sm font-bold text-black">Extempore, Table Topics & Handling Rebuttals</h5>
                <p className="text-xs text-stone-600 mt-1">
                  Thinking on your feet. Eliminating filler words (&quot;uhm&quot;, &quot;like&quot;, &quot;you know&quot;) and delivering 2-minute impromptu responses.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#3dabab] font-bold mb-1">
                  <span>WEEKS 13 – 16</span>
                  <span>MASTERY</span>
                </div>
                <h5 className="text-sm font-bold text-black">Jury Examination & The Grand Stage Showcase</h5>
                <p className="text-xs text-stone-600 mt-1">
                  Delivering a formal 4-minute speech before an audience of 200+ guests and an external jury panel with certification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Pillars of SpeakSmart */}
        <div className="pt-12 border-t border-stone-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black font-display">
              The 5 Pillars of SpeakSmart Oratory
            </h3>
            <p className="text-stone-600 text-sm mt-2">
              Every lesson at SpeakSmart touches upon these five proprietary development disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-black mb-2">1. Vocal Acoustics</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Diaphragmatic resonance, pitch variation, deliberate cadence, and learning the dramatic impact of calculated silence.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center mb-4">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-black mb-2">2. Thought Logic</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Structuring complex concepts into compelling 3-act narratives with memorable hooks, evidence, and unforgettable calls to action.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-black mb-2">3. Stage Physics</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Posture grounding, purposeful movement, natural hand gestures, and 180-degree triangular audience gaze techniques.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-black mb-2">4. Impromptu Agility</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Extempore training using the PREP (Point, Reason, Example, Point) framework to speak coherently on any surprise topic.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-black mb-2">5. Psychological Grit</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Controlled adrenaline exposure, cognitive reframing of mistakes, and recovering gracefully from spontaneous brain freezes.
              </p>
            </div>
          </div>
        </div>

        {/* Semester Programs Overview Cards */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-black font-display">
                Current Semester Program Tracks
              </h3>
              <p className="text-stone-600 text-sm mt-1">
                Choose the developmentally tailored batch that matches your student&apos;s age and experience level.
              </p>
            </div>
            <button
              onClick={onOpenRegister}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded shadow-sm transition-all cursor-pointer whitespace-nowrap self-start md:self-auto"
            >
              Register for New Semester
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS_LIST.map((prog) => (
              <div
                key={prog.id}
                className="flex flex-col justify-between p-6 rounded-xl bg-white border border-stone-200 hover:border-[#3dabab] hover:shadow-lg transition-all"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#3dabab] font-mono mb-2">
                    {prog.badge}
                  </div>
                  <h4 className="text-lg font-bold text-black font-display leading-snug">
                    {prog.name}
                  </h4>
                  <p className="text-xs font-semibold text-stone-500 mt-1">{prog.ageRange}</p>
                  <p className="text-xs text-stone-500">{prog.duration}</p>

                  <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-700 space-y-2">
                    <p className="leading-relaxed">
                      <strong className="text-black">Key Focus:</strong> {prog.focus}
                    </p>
                    <div className="pt-1">
                      <span className="text-[11px] font-semibold text-stone-500 block mb-1">Batch Times:</span>
                      <ul className="space-y-0.5 text-[11px] text-stone-600">
                        {prog.batches.map((b, i) => (
                          <li key={i}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="text-xs font-mono text-stone-600 mb-3">{prog.fee}</p>
                  <button
                    onClick={onOpenRegister}
                    className="w-full py-2 text-xs font-bold text-white bg-black hover:bg-[#3dabab] transition-colors rounded cursor-pointer text-center"
                  >
                    Select Batch & Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
