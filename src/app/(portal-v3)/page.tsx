import RouteBlock from "@/app/components/route-block";

export default function Portal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-screen w-screen flex items-center justify-center bg-orange-400">
        <div className="text-4xl font-bold font-mono">Acme Home</div>
      </div>
      <RouteBlock />
    </main>
  );
}
