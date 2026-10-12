export interface DiagnosticCase {
  id: string;
  vehicle: string;
  complaint: string;
  dialect: string;
  latency: string;
  predictions: {
    component: string;
    confidence: number;
    fault: string;
  }[];
  bom: {
    sku: string;
    desc: string;
    qty: number;
    unit_cost_inr: number;
  }[];
  estimated_labor_hours: number;
  deterministic_total_inr: number;
}

export const DIAGNOSTIC_CASES: DiagnosticCase[] = [
  {
    id: "case-creta",
    vehicle: "Hyundai Creta 1.5L CRDi Diesel (2021)",
    complaint: "Gaddi 2000 RPM pe miss kar rahi hai, engine light jali hai aur highway pe average gir gaya.",
    dialect: "DIALECT: Hinglish Colloquial (Mumbai / Pune)",
    latency: "LATENCY: 394ms",
    predictions: [
      { component: "Fuel Injector #3", confidence: 0.94, fault: "Clogged / Solenoid Stutter" },
      { component: "MAF Airflow Sensor", confidence: 0.81, fault: "Carbon Deposition" },
    ],
    bom: [
      { sku: "HYU-CRD-INJ3", desc: "Common Rail Injector Nozzle", qty: 1, unit_cost_inr: 4200 },
      { sku: "SRV-MAF-CLN", desc: "Ultrasonic MAF Clean & Recalibration", qty: 1, unit_cost_inr: 850 },
    ],
    estimated_labor_hours: 2.25,
    deterministic_total_inr: 5050.0,
  },
  {
    id: "case-swift",
    vehicle: "Maruti Suzuki Swift 1.2L DualJet (2022)",
    complaint: "Subah start karne me lamba self leti hai aur AC on karte hi engine vibrate hota hai.",
    dialect: "DIALECT: North / Urban Hindi Colloquial",
    latency: "LATENCY: 412ms",
    predictions: [
      { component: "Starter Relay / Battery", confidence: 0.89, fault: "Under-voltage (<11.8V)" },
      { component: "AC Compressor Pulley", confidence: 0.86, fault: "Bearing Friction" },
    ],
    bom: [
      { sku: "EXD-MF45-BAT", desc: "Exide Maintenance Free 45Ah", qty: 1, unit_cost_inr: 4800 },
      { sku: "MAR-PULY-IAC", desc: "Idler Pulley Assembly", qty: 1, unit_cost_inr: 1150 },
    ],
    estimated_labor_hours: 1.5,
    deterministic_total_inr: 5950.0,
  },
  {
    id: "case-nexon",
    vehicle: "Tata Nexon EV Max / Prime (2023)",
    complaint: "Break lagane pe steering kaanpta hai aur front wheel se sharp metallic grinding aa rahi hai.",
    dialect: "DIALECT: Hinglish Service Advisor Note",
    latency: "LATENCY: 378ms",
    predictions: [
      { component: "Front Disc Rotors", confidence: 0.98, fault: "Runout > 0.05mm (Warped)" },
      { component: "Ceramic Brake Pads", confidence: 0.96, fault: "Pad Wear < 2mm Service Limit" },
    ],
    bom: [
      { sku: "TAT-ROTR-VENT", desc: "Ventilated Front Disc Rotor Pair", qty: 1, unit_cost_inr: 3600 },
      { sku: "TAT-PADS-OEM", desc: "Low-Metallic Front Pad Kit", qty: 1, unit_cost_inr: 2100 },
    ],
    estimated_labor_hours: 2.0,
    deterministic_total_inr: 5700.0,
  },
];
