import data from "../data/dap.json";

export default function handler(req, res) {
  const region = req.query.region || "global";
  const entry = data[region] || data["global"];

  res.status(200).json({
    commodity: "dap",
    region,
    priceTon: entry.priceTon,
    priceKg: entry.priceTon / 1000,
    updated: entry.updated
  });
}
