import {
  Brain,
  Zap,
  ShieldCheck,
  ClipboardList,
  Users,
  Mail
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain size={20} />,
      title: "AI Underwriting",
      desc: "Machine learning powered risk assessment with proper accuracy"
    },
    {
      icon: <Zap size={20} />,
      title: "Instant Decisions",
      desc: "Automated loan decisions in under 2 minutes"
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Secure KYC",
      desc: "PAN & Aadhaar verification with military-grade encryption"
    },
    {
      icon: <ClipboardList size={20} />,
      title: "Audit Trail",
      desc: "Complete blockchain-style immutable audit logs"
    },
    {
      icon: <Users size={20} />,
      title: "Role-Based Access",
      desc: "Granular permissions for users, reviewers & admins"
    },
    {
      icon: <Mail size={20} />,
      title: "Smart Notifications",
      desc: "Real-time email & in-app status updates"
    }
  ];

  return (
    <section className="py-16 fade-in">

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-4">
        Enterprise-Grade Features
      </h2>

      <p className="text-gray-400 text-center mb-10 text-lg">
        Everything you need for secure, intelligent loan processing
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[#0F1F35] p-6 rounded-xl
            border border-yellow-500/20
            transition-all duration-300
            hover:-translate-y-1 hover:border-yellow-400
            hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]"
          >

            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-3">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}