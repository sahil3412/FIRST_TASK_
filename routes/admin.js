const express = require("express");
const adminCtl = require("../controller/adminCtl");

const admin = require("../models/admin_model");

const routes = express.Router();

routes.get("/", adminCtl.login);


routes.get("/add_admin", adminCtl.addAdmin);

routes.get("/view_admin", adminCtl.viewAdmin);

routes.post("/adminInsertData", adminCtl.adminInsertData);

routes.get("/deleteAdminRecord/:id", adminCtl.deleteAdminRecord);

routes.get("/updateAdminRecord", adminCtl.updateAdminRecord);

routes.get("/logout", (req, res) => {
    return res.redirect("/admin")
});

routes.get("/user",adminCtl.user);

module.exports = routes;