const boom = require("@hapi/boom");
const { names } = require("debug");

function scopesValidationHandler(allowedScopes) {
  return function (req, res, next) {
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized("Missing Scopes"));
    }
    const hasAccess = allowedScopes
      .map((allowedScope) => req.user.scopes.includes(allowedScope))
      .find((allowed) => Boolean(allowed));

    if (hasAccess) {
      next();
    } else {
      next(boom.unauthorized("Insufficient scopes"));
    }
  };
}
module.exports = scopesValidationHandler;
