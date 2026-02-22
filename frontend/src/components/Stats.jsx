import { Zap, ShieldCheck, BarChart3 } from "lucide-react";

export default function StatsBadges() {
  const items = [
    {
      icon: <Zap size={16} />,
      label: "Instant AI Decisions"
    },
    {
      icon: <ShieldCheck size={16} />,
      label: "Secure Digital KYC"
    },
    {
      icon: <BarChart3 size={16} />,
      label: "Real-Time Tracking"
    }
  ];

  return (
    <section className="flex justify-center gap-4 pb-12 -mt-0 flex-wrap fade-in">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 px-7 py-3 rounded-full
          bg-[#0F1F35]
          border border-yellow-500/20
          text-sm
          transition-all duration-300
          hover:border-yellow-400
          hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
        >
          <span className="text-yellow-500">{item.icon}</span>
          <span className="text-gray-300">{item.label}</span>
        </div>
      ))}
    </section>
  );
}