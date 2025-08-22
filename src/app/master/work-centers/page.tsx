import React from "react";

async function fetchWorkCenters() {
  const res = await fetch("http://localhost:3000/api/work-centers", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load Work Centers");
  const json = await res.json();
  return json.data as Array<{ id: string; code: string; type: string; capacity: number }>;
}

export default async function WorkCentersPage() {
  const wcs = await fetchWorkCenters();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Work Centers</h1>
        <button className="inline-flex items-center rounded bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-gray-800">New Work Center</button>
      </div>
      <div className="overflow-x-auto rounded border border-gray-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Code</th>
              <th className="px-3 py-2 text-left font-medium">Type</th>
              <th className="px-3 py-2 text-left font-medium">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {wcs.map((wc) => (
              <tr key={wc.id} className="border-t border-gray-100">
                <td className="px-3 py-2 font-mono">{wc.code}</td>
                <td className="px-3 py-2">{wc.type}</td>
                <td className="px-3 py-2">{wc.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}