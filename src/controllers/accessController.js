const mongoose = require('mongoose');
const Access = mongoose.model('Access');

async function isNewAccess(access) {
  // const duplicatedAccess = await Access.findOne({
  //   "location.latitude": access.location.latitude,
  //   "location.longitude": access.location.longitude,
  // });
  // if (duplicatedAccess) return false;
  return true;
}

module.exports = {
  async create(req, res) {
    console.log(req.body);
    try {
      if (await !isNewAccess(req.body)) {
        return res.status(400).send('Duplicated access.');
      }
      const access = await Access.create(req.body);
      return res.send(access);
    } catch (error) {
      return res.status(400).send('Access insert failed.');
    }
  },
};
