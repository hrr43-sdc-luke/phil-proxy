module.exports = {
  getExpId,
};
// last 10% => 9mil-10 mil only!
const noOfExpId = 10000000;
const tenPercent = noOfExpId * 0.10;
const min = noOfExpId - tenPercent;

function getExpId(userContext, events, done) {
  userContext.vars.expId = Math.floor(Math.random() * (noOfExpId - min + 1)) + min;
  return done();
}
