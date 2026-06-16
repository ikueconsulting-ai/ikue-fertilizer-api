export default function handler(req, res) {
  try {
    const priceTon = 420;

    res.status(200).json({
      commodity: "urea",
      priceTon,
      priceKg: priceTon / 1000,
      updated: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}

