const { name } = require('ejs');
const usermodel = require('../model/users');


async function getDisplayName(unitnname){
    names = await usermodel.usersByUnitnname(unitnname)
    return names[0].firstname + " " + names[0].lastname
}

const userHome = async (req, res, next) => {
    role = await usermodel.getRole(req.params.unitnname)

    if(role == "teacher"){
        res.render("home-docente", {username: await getDisplayName(req.params.unitnname)});
    }
    else if(role == "student"){
        res.render("home-studente", {username: await getDisplayName(req.params.unitnname)});
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
    result = await usermodel.usersByUnitnname(req.params.unitnname)
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