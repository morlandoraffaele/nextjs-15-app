import Link from "next/link";

export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <nav className="shadow-sm fixed top-0 left-0 right-0 bg-black/30backdrop-blur-lg z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white font-semibold hover:text-gray-300 transition-colors">
                Acme
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-6 pt-20">
        {children}
      </main>
    </div>
  );
}
