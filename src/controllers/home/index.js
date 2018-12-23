const getHome = async (req, res) => {
  res.status(200).json({
    page: 'home',
  });
};

const getHomeById = async (req, res) => {
  res.status(200).json({
    page: 'home',
    params: req.params,
  });
};

module.exports = {
  getHome,
  getHomeById,
};
