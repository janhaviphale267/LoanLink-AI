import { Lock, ShieldCheck, CheckCircle, Shield } from "lucide-react";

export default function Security() {
  const items = [
    { icon: <Lock size={20} />, label: "256-bit AES Encryption" },
    { icon: <ShieldCheck size={20} />, label: "RBI Guidelines Compliant" },
    { icon: <CheckCircle size={20} />, label: "DPDP Act 2023 Ready" },
    { icon: <Shield size={20} />, label: "SOC 2 Type II" }
  ];

  return (
    <section className="py-24 text-center fade-in">

      {/* BIGGER HEADING */}
      <h2 className="text-4xl md:text-4xl font-semibold mb-4">
        Bank-Grade Security
      </h2>

      {/* BIGGER SUBTITLE */}
      <p className="text-gray-400 text-base md:text-xl mb-12 max-w-2xl mx-auto">
        Your data is protected with industry-leading security standards
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0F1F35] border border-green-400/20 transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            <div className="text-green-400">{item.icon}</div>
            <span className="text-sm md:text-base">{item.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}