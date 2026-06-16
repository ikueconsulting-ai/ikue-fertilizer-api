export default function handler(req, res) {
  const region = req.query.region || "global";
  const priceTon = 420;

  res.status(200).json({
    commodity: "urea",
    region,
    priceTon,
    priceKg: priceTon / 1000,
    updated: new Date().toISOString()
  });
}
