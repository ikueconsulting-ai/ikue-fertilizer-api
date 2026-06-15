import data from "../data/npk.json";

export default function handler(req, res) {
  const region = req.query.region || "global";
  const entry = data[region] || data["global"];

  res.status(200).json({
    commodity: "npk",
    region,
    priceTon: entry.priceTon,
    priceKg: entry.priceTon / 1000,
    updated: entry.updated
  });
}
