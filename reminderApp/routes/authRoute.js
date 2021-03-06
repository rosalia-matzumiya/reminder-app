const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

//localhost:8000/auth/login
router.get("/login", forwardAuthenticated, (req, res) => res.render("auth/login"));

router.post("/login",
  passport.authenticate("local", {
    successRedirect: "/reminders",
    failureRedirect: "/auth/login",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

module.exports = router;
