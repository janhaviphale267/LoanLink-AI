export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 fade-in">

        {/* Left */}
        <div className="text-sm text-center md:text-left">
          © 2025 LoanLink AI. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex gap-6 text-sm">
          <span className="hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            DPDP Compliance
          </span>
        </div>

      </div>
    </footer>
  );
}