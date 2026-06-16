import dap from "../data/dap.json";

export default function handler(req, res) {
  const region = req.query.region || "global";

  res.status(200).json({
    commodity: "dap",
    region,
    priceTon: dap.priceTon,
    priceKg: dap.priceTon / 1000,
    updated: new Date().toISOString()
  });
}
