const usermodel = require('../model/users');


const userHome = async (req, res, next) => {
    role = await usermodel.getRole(req.params.unitnname)

    if(role == "teacher"){
        res.render("home-docente");
    }
    else if(role == "student"){
        res.render("home-studente");
    }
    else{
        res.status(501);
        res.send("Utente non trovato");
    }
}

const addUser = async (req, res, next) => {
    result = await usermodel.addUser(req.params.unitnname)
    res.status(200);
    res.send(result);
}

const allUsers = async (req, res, next) => {
    result = await usermodel.allUsers()
    res.status(200);
    res.json(result);
}

const allStudents = async (req, res, next) => {
    result = await usermodel.allStudents()
    res.status(200);
    res.json(result);
}

const allTeachers = async (req, res, next) => {
    result = await usermodel.allTeachers()
    res.status(200);
    res.json(result);
}

const usersByUnitnname = async (req, res, next) => {
    result = await usermodel.usersByUnitnname()
    res.status(200);
    res.json(result);
}

module.exports = {
    userHome,
    addUser,
    allUsers,
    allStudents,
    allTeachers,
    usersByUnitnname
};