import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    kpis: [
      { key: "OEE", value: "78%", delta: "+2%", positive: true },
      { key: "Throughput", value: "420/h", delta: "+5%", positive: true },
      { key: "Plan vs Actual", value: "-8%", delta: "-3%", positive: false },
      { key: "Scrap rate", value: "2.1%", delta: "-0.2%", positive: true },
      { key: "WIP", value: "134", delta: "+12", positive: false },
      { key: "OTIF", value: "93%", delta: "+1%", positive: true },
    ],
    lines: [
      { id: "L1", name: "Line 1", status: "Running" },
      { id: "L2", name: "Line 2", status: "Hold" },
      { id: "L3", name: "Line 3", status: "Down" },
    ],
    alerts: [
      { id: "a1", type: "shortage", text: "RM-200 shortage for WO #12345" },
      { id: "a2", type: "delay", text: "WO #12340 delayed by 2h" },
      { id: "a3", type: "ncr", text: "3 NCRs pending disposition" },
      { id: "a4", type: "pm", text: "PM due: WC-ASSY in 4h" },
    ],
  };
  return NextResponse.json({ data });
}