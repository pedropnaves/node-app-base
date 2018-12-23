const errorController = async (req, res) => {
  res.status(404).send();
};

module.exports = {
  errorController,
};
