const cat = require("../models/cat");

const checkCat = async (req, res) => {
  const result = await cat.find({ active: true });
  if (result.length === 0) return res.status(200).render("noCat");
  return res.status(200).redirect("/signin");
};

module.exports = {
  checkCat
};
