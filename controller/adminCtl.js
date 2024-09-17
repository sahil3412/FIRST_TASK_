const admin = require("../models/admin_model")
const path = require('path');
const fs = require('fs');
const { Admin } = require("mongodb");


const login = async (req, res) => {
    return res.render('login');
}


const AdminLoginData = async (req, res) => {
    if(AdminLoginData){
        return res.redirect('/admin')
    }
    else{
        return res.redirect('back')
    }


}

const addAdmin = async (req, res) => {
    return res.render('add_admin')
}

const viewAdmin = async (req, res) => {

    return res.render('view_admin', {
        viewData: viewData
    })
}

const adminInsertData = async (req, res) => {
    console.log(req.file);
    console.log(req.body);

    await admin.create(req.body);
    return res.redirect("back");

}

const deleteAdminRecord = async (req, res) => {
    const deteleAdmin = await admin.findById(req.params.id);
    await admin.findByIdAndDelete(req.params.id);
    return res.redirect('back');
}

const updateAdminRecord = async (req, res) => {
    let updatedata = await admin.findById(req.query.id);
    return res.render('update_Admin', {
        admindata: updatedata
    })
}

const Add_user = async (req, res) => {
    return res.render('add_user')
}


module.exports = {
     addAdmin, viewAdmin, adminInsertData,
    deleteAdminRecord, updateAdminRecord, login,Add_user
}