import { FileCheck, Brain, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FileCheck size={28} />,
      title: "Submit",
      desc: "Fill a simple application form with your details"
    },
    {
      icon: <Brain size={28} />,
      title: "AI Scores",
      desc: "Our AI engine evaluates your application instantly"
    },
    {
      icon: <Zap size={28} />,
      title: "Instant Decision",
      desc: "Get approved or reviewed within minutes"
    }
  ];

  return (
    <section className="py-24 text-center relative fade-in">
      
      {/* BIGGER HEADING */}
      <h2 className="text-5xl font-semibold text-center mb-5">
        How It Works
      </h2>

      {/* BIGGER SUBTITLE */}
      <p className="text-gray-400 text-base md:text-xl mb-16">
        Three simple steps to your loan decision
      </p>

      <div className="relative max-w-5xl mx-auto">

        <div className="absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-70 blur-[1px]" />

        <div className="grid grid-cols-3 gap-10 relative">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="relative z-10 bg-[#0F1F35] border border-yellow-500/20 w-16 h-16 flex items-center justify-center rounded-xl text-yellow-500 shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:scale-110">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}