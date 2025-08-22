import React from "react";

async function fetchItems() {
  const res = await fetch("http://localhost:3000/api/items", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load items");
  const json = await res.json();
  return json.data as Array<{ id: string; code: string; description: string; uom: string }>;
}

export default async function ItemsPage() {
  const items = await fetchItems();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Items</h1>
        <button className="inline-flex items-center rounded bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-gray-800">New Item</button>
      </div>
      <div className="overflow-x-auto rounded border border-gray-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Code</th>
              <th className="px-3 py-2 text-left font-medium">Description</th>
              <th className="px-3 py-2 text-left font-medium">UoM</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-t border-gray-100">
                <td className="px-3 py-2 font-mono">{it.code}</td>
                <td className="px-3 py-2">{it.description}</td>
                <td className="px-3 py-2">{it.uom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}