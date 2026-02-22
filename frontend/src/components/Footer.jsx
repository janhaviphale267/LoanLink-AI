export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-10 text-gray-400 fade-in">
      <div>© 2025 LoanLink AI. All rights reserved.</div>

      <div className="flex gap-6">
        <span className="hover:text-white transition-colors">Privacy Policy</span>
        <span className="hover:text-white transition-colors">Terms of Service</span>
        <span className="hover:text-white transition-colors">DPDP Compliance</span>
      </div>
    </footer>
  );
}