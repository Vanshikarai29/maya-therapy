export default function Home() {
  return (
    <main className="bg-[#f5f0eb] text-[#3d2e25] min-h-screen">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#f5f0eb] border-b border-[#6b7f5e]/12 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-medium text-[#4a5c3e]">
            Dr. Maya Reynolds
          </h1>
          <div className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors"
            >
              About
            </a>
            <a
              href="#office"
              className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors"
            >
              Our Office
            </a>
            <a
              href="#contact"
              className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - REAL IMAGE */}
      <section className="min-h-[90vh] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          {/* Hero Image - NOW REAL PHOTO */}
          <div className="relative">
            <img
              src="/images/hero-doctor.png"
              alt="Dr. Maya Reynolds, Therapist Santa Monica"
              className="w-full max-w-sm mx-auto aspect-[3/4] object-cover rounded-[60%_60%_40%_40%] shadow-2xl border-8 border-white/80 hover:scale-[1.02] transition-all duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a5c3e]/30 via-transparent to-transparent rounded-[60%_60%_40%_40%]"></div>
          </div>

          {/* Hero Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-light text-[#4a5c3e] leading-tight mb-8">
              Compassionate
              <br />
              <span className="text-[#c07a5a] italic">therapy for</span>
              <br />
              lasting peace
            </h1>
            <p className="text-xl text-[#6b5a4e] mb-12 max-w-lg leading-relaxed">
              Evidence-based therapy for high-achieving adults in Santa Monica,
              CA. A calm space to process trauma, manage anxiety, and reconnect.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#3d2e25] rounded-full font-semibold uppercase tracking-wider text-[#3d2e25] hover:bg-[#4a5c3e] hover:text-white hover:border-[#4a5c3e] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Connect With Me
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="block text-lg uppercase tracking-widest text-[#c07a5a] font-medium mb-6">
              What I Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-6">
              Services Tailored
              <br />
              to You
            </h2>
            <p className="text-xl text-[#6b5a4e] max-w-2xl mx-auto leading-relaxed">
              Each session is thoughtfully guided by your unique story, goals,
              and pace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                title: "Trauma Recovery",
                desc: "EMDR and somatic techniques for safe trauma processing. Focus on stabilization and nervous system regulation.",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Anxiety Management",
                desc: "CBT, mindfulness, and somatic practices to address root causes and build lasting coping strategies.",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Burnout Recovery",
                desc: "For high-achievers feeling disconnected. Reclaim balance through nervous system regulation.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-[#faf7f4] rounded-3xl p-12 border border-[#6b7f5e]/10 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-white"
              >
                <div className="w-20 h-20 bg-[#f5f0eb] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#c07a5a] group-hover:text-white transition-all duration-500 shadow-lg">
                  <svg
                    className="w-10 h-10"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#4a5c3e] mb-6 text-center group-hover:text-[#c07a5a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6b5a4e] text-center leading-relaxed group-hover:text-[#4a5c3e]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - REAL IMAGE */}
      <section id="about" className="py-32 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          {/* About Image */}
          <div className="relative order-2 md:order-1">
            <img
              src="/images/hero-doctor.png"
              alt="Dr. Maya Reynolds profile"
              className="w-full max-w-md mx-auto aspect-[3/4] object-cover rounded-[60%_60%_40%_40%] shadow-2xl border-4 border-white/50"
            />
          </div>

          {/* About Content */}
          <div className="order-1 md:order-2">
            <span className="block text-lg uppercase tracking-widest text-[#c07a5a] font-medium mb-8">
              About Dr. Maya
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-8 leading-tight">
              Creating Safe
              <br />
              Spaces for Healing
            </h2>
            <p className="text-xl text-[#6b5a4e] mb-12 max-w-lg leading-relaxed">
              With 12+ years experience and advanced EMDR certification, I
              specialize in trauma, anxiety, and burnout recovery for
              high-achieving adults seeking meaningful transformation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {[
                "EMDR Certified",
                "CBT Specialist",
                "12+ Years",
                "Telehealth",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full text-[#4a5c3e] font-medium text-sm border border-[#6b7f5e]/30 hover:bg-[#c07a5a]/20 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#3d2e25] rounded-full font-semibold uppercase tracking-wider text-[#3d2e25] hover:bg-[#4a5c3e] hover:text-white transition-all duration-300 shadow-lg"
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* OFFICE SECTION - REAL IMAGES */}
      <section id="office" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="block text-lg uppercase tracking-widest text-[#c07a5a] font-medium mb-8">
              Our Sanctuary
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-6">
              Santa Monica Office
            </h2>
            <p className="text-xl text-[#6b5a4e] max-w-2xl mx-auto">
              Serene, trauma-informed space in the heart of Santa Monica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Therapy Room - REAL IMAGE */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img
                src="/images/Office.png"
                alt="Dr. Maya therapy room Santa Monica"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Waiting Area - REAL IMAGE */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img
                src="/images/Waiting.png"
                alt="Dr. Maya waiting area"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Office Features */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Private Parking",
                desc: "Discreet parking",
              },
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                title: "Ocean Views",
                desc: "Calming views",
              },
              {
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Telehealth",
                desc: "Virtual sessions",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-10 bg-[#faf7f4] rounded-2xl hover:shadow-xl hover:-translate-y-3 transition-all duration-500 border border-[#6b7f5e]/10"
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-[#f5f0eb] rounded-xl flex items-center justify-center hover:bg-[#c07a5a] hover:text-white transition-all duration-500 shadow-lg">
                  <svg
                    className="w-10 h-10"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#4a5c3e] mb-4 hover:text-[#c07a5a] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#6b5a4e]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-[#ede6dd] to-[#f5f0eb] border-y-2 border-[#6b7f5e]/20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-8 leading-tight">
            Ready to Begin Your
            <br />
            Healing Journey?
          </h2>
          <p className="text-xl text-[#6b5a4e] mb-12 max-w-2xl mx-auto leading-relaxed">
            Free 20-minute consultations. Your first step toward peace starts
            here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <a
              href="mailto:hello@drmayareynolds.com"
              className="flex-1 px-12 py-6 bg-[#4a5c3e] text-white rounded-2xl text-xl font-semibold uppercase tracking-wider hover:bg-[#c07a5a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              Book Consultation
            </a>
            <a
              href="tel:+13105551234"
              className="flex-1 px-12 py-6 border-3 border-[#3d2e25] text-[#3d2e25] rounded-2xl text-xl font-semibold uppercase tracking-wider hover:bg-[#3d2e25] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3d2e25] text-[#f5f0eb] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-serif font-medium mb-6">
                Dr. Maya Reynolds
              </h3>
              <p className="text-[#f5f0eb]/80 leading-relaxed max-w-sm mb-6">
                Compassionate therapy for trauma, anxiety, and burnout. Santa
                Monica, CA • In-person & telehealth available.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold uppercase tracking-wider text-[#8fa67f] mb-6">
                Services
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="#"
                  className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
                >
                  Trauma Recovery
                </a>
                <a
                  href="#"
                  className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
                >
                  Anxiety
                </a>
                <a
                  href="#"
                  className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
                >
                  Burnout
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold uppercase tracking-wider text-[#8fa67f] mb-6">
                Location
              </h4>
              <p className="text-[#f5f0eb]/80 mb-4">Santa Monica, CA</p>
              <p className="text-[#f5f0eb]/80">In-person & Virtual</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold uppercase tracking-wider text-[#8fa67f] mb-6">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:hello@drmayareynolds.com"
                  className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
                >
                  hello@drmayareynolds.com
                </a>
                <a
                  href="tel:+13105551234"
                  className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors"
                >
                  (310) 555-1234
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#f5f0eb]/30 pt-8 text-center text-sm text-[#f5f0eb]/60">
            <p>
              &copy; 2026 Dr. Maya Reynolds, PsyD. Santa Monica, CA. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="bg-[#f5f0eb] text-[#3d2e25] min-h-screen">

//       {/* NAVBAR */}
//       <nav className="sticky top-0 z-50 bg-[#f5f0eb] border-b border-[#6b7f5e]/12 backdrop-blur">
//         <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
//           <h1 className="text-2xl font-serif font-medium text-[#4a5c3e]">
//             Dr. Maya Reynolds
//           </h1>
//           <div className="hidden md:flex space-x-8">
//             <a href="#services" className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors">
//               Services
//             </a>
//             <a href="#about" className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors">
//               About
//             </a>
//             <a href="#office" className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors">
//               Our Office
//             </a>
//             <a href="#contact" className="text-sm font-medium uppercase tracking-wider text-[#6b5a4e] hover:text-[#4a5c3e] transition-colors">
//               Contact
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="min-h-[90vh] flex items-center py-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

//           {/* Hero Image */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-[#ede6dd]/50 rounded-[60%] blur-xl -z-10"></div>
//             <div className="w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-br from-[#8fa67f] via-[#6b7f5e] to-[#4a5c3e] rounded-[60%_60%_40%_40%] shadow-2xl flex items-center justify-center text-white p-8">
//               <div className="text-center">
//                 <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 border-2 border-white/50"></div>
//                 <div className="font-medium text-lg">Dr. Maya Reynolds</div>
//                 <div className="text-white/80 text-sm">Therapist • Santa Monica</div>
//               </div>
//             </div>
//           </div>

//           {/* Hero Content */}
//           <div>
//             <h1 className="text-5xl md:text-7xl font-serif font-light text-[#4a5c3e] leading-tight mb-8">
//               Compassionate<br/>
//               <span className="text-[#c07a5a] italic">therapy for</span><br/>
//               lasting peace
//             </h1>
//             <p className="text-xl text-[#6b5a4e] mb-12 max-w-lg leading-relaxed">
//               Evidence-based therapy for high-achieving adults in Santa Monica, CA.
//               A calm space to process trauma, manage anxiety, and reconnect.
//             </p>
//             <a href="#contact"
//                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#3d2e25] rounded-full font-semibold uppercase tracking-wider text-[#3d2e25] hover:bg-[#4a5c3e] hover:text-white hover:border-[#4a5c3e] transition-all duration-300 shadow-lg hover:shadow-xl">
//               Connect With Me
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES SECTION */}
//       <section id="services" className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <span className="block text-lg uppercase tracking-widest text-[#c07a5a] font-medium mb-6">What I Offer</span>
//             <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-6">Services Tailored<br/>to You</h2>
//             <p className="text-xl text-[#6b5a4e] max-w-2xl mx-auto leading-relaxed">
//               Each session is thoughtfully guided by your unique story, goals, and pace.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
//                 title: "Trauma Recovery",
//                 desc: "EMDR and somatic techniques for safe trauma processing. Focus on stabilization and nervous system regulation."
//               },
//               {
//                 icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
//                 title: "Anxiety Management",
//                 desc: "CBT, mindfulness, and somatic practices to address root causes and build lasting coping strategies."
//               },
//               {
//                 icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
//                 title: "Burnout Recovery",
//                 desc: "For high-achievers feeling disconnected. Reclaim balance through nervous system regulation."
//               }
//             ].map((service, index) => (
//               <div key={index} className="group bg-[#faf7f4] rounded-3xl p-12 border border-[#6b7f5e]/10 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 hover:bg-white">
//                 <div className="w-20 h-20 bg-[#f5f0eb] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#c07a5a] group-hover:text-white transition-all duration-500 shadow-lg">
//                   <svg className="w-10 h-10" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-serif font-semibold text-[#4a5c3e] mb-6 text-center group-hover:text-[#c07a5a] transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-[#6b5a4e] text-center leading-relaxed group-hover:text-[#4a5c3e]">
//                   {service.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section id="about" className="py-32 bg-[#f5f0eb]">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

//           {/* About Image */}
//           <div className="relative order-2 md:order-1">
//             <div className="w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-[#8fa67f]/30 via-[#6b7f5e]/20 to-[#c07a5a]/10 rounded-[60%_60%_40%_40%] shadow-2xl border-4 border-white/30 p-8 flex items-center justify-center">
//               <div className="text-center text-[#4a5c3e]">
//                 <div className="w-28 h-28 bg-white/30 rounded-full mx-auto mb-6 border-4 border-white/50 shadow-lg"></div>
//                 <div className="font-serif text-2xl font-medium">Maya Reynolds</div>
//                 <div className="text-sm text-[#6b5a4e]/80 uppercase tracking-wider">PsyD</div>
//               </div>
//             </div>
//           </div>

//           {/* About Content */}
//           <div className="order-1 md:order-2">
//             <span className="block text-lg uppercase tracking-widest text-[#c07a5a] font-medium mb-8">About Dr. Maya</span>
//             <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-8 leading-tight">
//               Creating Safe<br/>Spaces for Healing
//             </h2>
//             <p className="text-xl text-[#6b5a4e] mb-12 max-w-lg leading-relaxed">
//               With 12+ years experience and advanced EMDR certification, I specialize in trauma, anxiety,
//               and burnout recovery for high-achieving adults seeking meaningful transformation.
//             </p>

//             <div className="flex flex-wrap gap-4 mb-12">
//               {['EMDR Certified', 'CBT Specialist', '12+ Years', 'Telehealth'].map((tag, i) => (
//                 <span key={i} className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full text-[#4a5c3e] font-medium text-sm border border-[#6b7f5e]/30 hover:bg-[#c07a5a]/20 transition-all duration-300">
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#3d2e25] rounded-full font-semibold uppercase tracking-wider text-[#3d2e25] hover:bg-[#4a5c3e] hover:text-white transition-all duration-300 shadow-lg">
//               Learn More →
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* OFFICE SECTION */}
//       <section id="office" className="py-32 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="text-center mb-24">
//             <span className="block text-lg uppercase tracking-widest text-[#c07a5a] font-medium mb-8">Our Sanctuary</span>
//             <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-6">Santa Monica Office</h2>
//             <p className="text-xl text-[#6b5a4e] max-w-2xl mx-auto">
//               Serene, trauma-informed space in the heart of Santa Monica
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-20">
//             <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
//               <div className="w-full h-96 bg-gradient-to-br from-[#8fa67f] to-[#6b7f5e] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
//                 <div className="text-center text-white drop-shadow-lg">
//                   <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-6"></div>
//                   <h3 className="text-3xl font-serif font-semibold">Therapy Room</h3>
//                 </div>
//               </div>
//             </div>
//             <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
//               <div className="w-full h-96 bg-gradient-to-br from-[#c07a5a] to-[#d4956f] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
//                 <div className="text-center text-white drop-shadow-lg">
//                   <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-6"></div>
//                   <h3 className="text-3xl font-serif font-semibold">Waiting Area</h3>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Private Parking", desc: "Discreet parking" },
//               { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", title: "Ocean Views", desc: "Calming views" },
//               { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Telehealth", desc: "Virtual sessions" }
//             ].map((feature, i) => (
//               <div key={i} className="text-center p-10 bg-[#faf7f4] rounded-2xl hover:shadow-xl hover:-translate-y-3 transition-all duration-500 border border-[#6b7f5e]/10">
//                 <div className="w-20 h-20 mx-auto mb-8 bg-[#f5f0eb] rounded-xl flex items-center justify-center hover:bg-[#c07a5a] hover:text-white transition-all duration-500 shadow-lg">
//                   <svg className="w-10 h-10" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-serif font-semibold text-[#4a5c3e] mb-4 hover:text-[#c07a5a] transition-colors">{feature.title}</h3>
//                 <p className="text-[#6b5a4e]">{feature.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section id="contact" className="py-24 bg-gradient-to-r from-[#ede6dd] to-[#f5f0eb] border-y-2 border-[#6b7f5e]/20">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-5xl md:text-6xl font-serif font-light text-[#4a5c3e] mb-8 leading-tight">
//             Ready to Begin Your<br/>Healing Journey?
//           </h2>
//           <p className="text-xl text-[#6b5a4e] mb-12 max-w-2xl mx-auto leading-relaxed">
//             Free 20-minute consultations. Your first step toward peace starts here.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
//             <a href="mailto:hello@drmayareynolds.com" className="flex-1 px-12 py-6 bg-[#4a5c3e] text-white rounded-2xl text-xl font-semibold uppercase tracking-wider hover:bg-[#c07a5a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]">
//               Book Consultation
//             </a>
//             <a href="tel:+13105551234" className="flex-1 px-12 py-6 border-3 border-[#3d2e25] text-[#3d2e25] rounded-2xl text-xl font-semibold uppercase tracking-wider hover:bg-[#3d2e25] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-[#3d2e25] text-[#f5f0eb] py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-12 mb-12">
//             <div>
//               <h3 className="text-3xl font-serif font-medium mb-6">Dr. Maya Reynolds</h3>
//               <p className="text-[#f5f0eb]/80 leading-relaxed max-w-sm mb-6">
//                 Compassionate therapy for trauma, anxiety, and burnout.
//                 Santa Monica, CA • In-person & telehealth available.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold uppercase tracking-wider text-[#8fa67f] mb-6">Services</h4>
//               <div className="space-y-3 text-sm">
//                 <a href="#" className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors">Trauma Recovery</a>
//                 <a href="#" className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors">Anxiety</a>
//                 <a href="#" className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors">Burnout</a>
//               </div>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold uppercase tracking-wider text-[#8fa67f] mb-6">Location</h4>
//               <p className="text-[#f5f0eb]/80 mb-4">Santa Monica, CA</p>
//               <p className="text-[#f5f0eb]/80">In-person & Virtual</p>
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold uppercase tracking-wider text-[#8fa67f] mb-6">Contact</h4>
//               <div className="space-y-3 text-sm">
//                 <a href="mailto:hello@drmayareynolds.com" className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors">
//                   hello@drmayareynolds.com
//                 </a>
//                 <a href="tel:+13105551234" className="block text-[#f5f0eb]/80 hover:text-[#f5f0eb] transition-colors">
//                   (310) 555-1234
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-[#f5f0eb]/30 pt-8 text-center text-sm text-[#f5f0eb]/60">
//             <p>&copy; 2026 Dr. Maya Reynolds, PsyD. Santa Monica, CA. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }
