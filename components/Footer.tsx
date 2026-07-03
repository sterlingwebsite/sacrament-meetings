export default function Footer() {
  return (
    <footer className="no-print bg-gray-100 border-t border-gray-200 mt-auto py-6 text-center text-xs text-gray-500">
      <div className="max-w-5xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Oak Hills Ward — Sacrament Meeting Planner.</p>
        <p className="mt-1 text-gray-400">Designed for bishoprics and branch leaders.</p>
      </div>
    </footer>
  );
}
