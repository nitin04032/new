import React from "react";

async function fetchBOMs() {
  const res = await fetch("http://localhost:3000/api/boms", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load BOMs");
  const json = await res.json();
  return json.data as Array<{ id: string; itemCode: string; rev: string; components: number }>;
}

export default async function BOMsPage() {
  const boms = await fetchBOMs();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">BOMs</h1>
        <button className="inline-flex items-center rounded bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-gray-800">New BOM</button>
      </div>
      <div className="overflow-x-auto rounded border border-gray-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Item</th>
              <th className="px-3 py-2 text-left font-medium">Revision</th>
              <th className="px-3 py-2 text-left font-medium"># Components</th>
            </tr>
          </thead>
          <tbody>
            {boms.map((b) => (
              <tr key={b.id} className="border-t border-gray-100">
                <td className="px-3 py-2 font-mono">{b.itemCode}</td>
                <td className="px-3 py-2">{b.rev}</td>
                <td className="px-3 py-2">{b.components}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}