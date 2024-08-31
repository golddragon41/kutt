const asyncHandler = require("express-async-handler");
const { Router } = require("express");

const validators = require("../handlers/validators.handler");
const helpers = require("../handlers/helpers.handler");
const user = require("../handlers/users.handler");
const auth = require("../handlers/auth.handler");

const router = Router();

router.get(
  "/",
  asyncHandler(auth.apikey),
  asyncHandler(auth.jwt),
  asyncHandler(user.get)
);

router.post(
  "/delete",
  helpers.viewTemplate("partials/settings/delete_account"),
  asyncHandler(auth.apikey),
  asyncHandler(auth.jwt),
  validators.deleteUser,
  asyncHandler(helpers.verify),
  asyncHandler(user.remove)
);

module.exports = router;
