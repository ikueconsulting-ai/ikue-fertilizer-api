import npk from "../data/npk.json";

export default function handler(req, res) {
  const region = req.query.region || "global";

  res.status(200).json({
    commodity: "npk",
    region,
    priceTon: npk.priceTon,
    priceKg: npk.priceTon / 1000,
    updated: new Date().toISOString()
  });
}
