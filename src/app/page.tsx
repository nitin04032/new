import KPITile from "../components/KPITile";
import LineStatusPanel from "../components/LineStatusPanel";

async function fetchDashboard() {
  const res = await fetch("http://localhost:3000/api/dashboard", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load dashboard");
  const json = await res.json();
  return json.data as {
    kpis: Array<{ key: string; value: string; delta?: string; positive?: boolean }>;
    lines: Array<{ id: string; name: string; status: "Running" | "Hold" | "Down" }>;
    alerts: Array<{ id: string; type: string; text: string }>;
  };
}

export default async function Home() {
  const data = await fetchDashboard();
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.kpis.map((k) => (
          <KPITile key={k.key} label={k.key} value={k.value} delta={k.delta} positive={k.positive} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <LineStatusPanel lines={data.lines} />
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-medium">Alerts</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {data.alerts.map((a) => (
              <li key={a.id} className="rounded border border-gray-100 bg-gray-50 px-3 py-2">
                {a.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
