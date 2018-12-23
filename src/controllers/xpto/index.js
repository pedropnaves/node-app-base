const getXpto = async (req, res) => {
  res.status(200).json({
    page: 'xpto',
  });
};

const getXptoById = async (req, res) => {
  res.status(200).json({
    page: 'xpto',
    params: req.params,
  });
};

module.exports = {
  getXpto,
  getXptoById,
};
