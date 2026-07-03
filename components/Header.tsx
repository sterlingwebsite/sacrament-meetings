import NavLinks from './NavLinks';

export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="no-print bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-blue-900 tracking-tight">Oak Hills Ward</h1>
          <p className="text-xs text-gray-500 font-medium">{currentDate}</p>
        </div>
        <NavLinks />
      </div>
    </header>
  );
}
