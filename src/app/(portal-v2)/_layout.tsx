export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg z-50">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-semibold text-xl text-gray-800">RaiNews</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 px-4 pt-24 pb-8">
        {children}
      </main>
    </div>
  );
}
