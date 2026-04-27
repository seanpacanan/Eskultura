import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";

const danceImg = "https://images.unsplash.com/photo-1582614988360-0a960f9bdb2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGN1bHR1cmFsJTIwZGFuY2UlMjBwZXJmb3JtYW5jZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc3NjE0MzY0M3ww&ixlib=rb-4.1.0&q=80&w=1080";

/* Filipino-inspired geometric SVG pattern */
function FilipinoBaybayin() {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-[0.07]">
      {/* Weaving / banig-inspired diamond grid */}
      {Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 8 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={col * 50 + (row % 2 === 0 ? 0 : 25)}
            y={row * 50}
            width="24"
            height="24"
            rx="2"
            transform={`rotate(45 ${col * 50 + (row % 2 === 0 ? 12 : 37)} ${row * 50 + 12})`}
            fill="#9B1B2E"
          />
        ))
      )}
      {/* Circular motifs */}
      {[80, 200, 320].map((cx, i) => (
        <circle key={i} cx={cx} cy={200} r={30 + i * 10} stroke="#C8962C" strokeWidth="1.5" strokeDasharray="4 6" />
      ))}
      <circle cx="200" cy="200" r="8" fill="#C8962C" />
      <circle cx="200" cy="200" r="16" stroke="#C8962C" strokeWidth="1" />
    </svg>
  );
}

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export function Hero() {
  const navigate = useNavigate();
  const scrollToUnits = () => {
    document.querySelector("#units")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSignup = () => {
    navigate("/signup");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FDFAF4 0%, #FFF8EE 40%, #FDF4F0 100%)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <FilipinoBaybayin />
        </div>

        {/* Floating gradient orbs */}
        <FloatingOrb
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          delay={0}
        />
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,150,44,0.15) 0%, transparent 70%)" }}
        />
        <FloatingOrb
          className="absolute bottom-16 -left-20 w-80 h-80 rounded-full"
          delay={1.5}
        />
        <div
          className="absolute bottom-16 -left-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(155,27,46,0.1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(224,112,58,0.05) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8 z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8962C]/40 bg-[#C8962C]/10 text-[#9B5B1A]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8962C] animate-pulse" />
                Filipino Arts & Culture Organization
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1
                style={{
                  fontFamily: "'Inter', serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "#1A1210",
                }}
              >
                <span 
                  className="block"
                    style={{
                    backgroundImage: "linear-gradient(135deg, #A47251 0%, #A47251 60%, #A47251 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  >
                    EsKultura:
                </span>
    
                <span className="block"> Eskuwelahan ng Manlililok ng Kulturang Pilipino</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#6B5E59] max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.75 }}
            >
              A digital space where creativity shapes Filipino culture through{" "}
              <span className="text-[#A47251]" style={{ fontWeight: 600 }}>arts, performance, and expression</span>.
              Join thousands of students celebrating the living heritage of the Philippines.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToUnits}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  background: "linear-gradient(135deg, #A47251 0%, #A47251 100%)",
                }}
              >
                Get Started
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={scrollToSignup}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#A47251] text-[#A47251] hover:bg-[#9B1B2E]/5 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                Sign Up Free
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {["#9B1B2E", "#C8962C", "#E0703A", "#8B6E52"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs"
                    style={{ background: c, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.65rem" }}
                  >
                    {["JR", "MA", "KP", "RL"][i]}
                  </div>
                ))}
              </div>
              <p className="text-[#6B5E59]" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                <span className="text-[#2D2320]" style={{ fontWeight: 600 }}>500+ students</span> already joined
              </p>
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            {/* Main image frame */}
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-3xl border border-dashed border-[#C8962C]/30"
              />

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                style={{ background: "linear-gradient(135deg, #9B1B2E, #C8962C)" }}
              />

              {/* Image container */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: "clamp(280px, 42vw, 480px)", aspectRatio: "4/5" }}
              >
                <img
                  src={danceImg}
                  alt="Filipino Cultural Dance Performance"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(155,27,46,0.5) 0%, transparent 50%)" }}
                />
                {/* Caption tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="px-4 py-2 rounded-xl backdrop-blur-md"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
                  >
                    <p className="text-white" style={{ fontFamily: "'Inter', serif", fontWeight: 600, fontSize: "0.85rem" }}>
                      Celebrating the Living Arts of the Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-8 px-4 py-3 rounded-xl shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(200,150,44,0.2)",
                }}
              >
                <p className="text-[#A47251]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}>5</p>
                <p className="text-[#6B5E59]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.72rem" }}>Creative Units</p>
              </motion.div>

              {/* Second floating card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 bottom-20 px-4 py-3 rounded-xl shadow-xl"
                style={{
                  background: "rgba(164,114,81)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(200,150,44,0.3)",
                }}
              >
                <p className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}>🎭</p>
                <p className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.72rem" }}>Culture & Arts</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#units")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6B5E59] hover:text-[#9B1B2E] transition-colors"
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Discover</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}