const usermodel = require('../model/users');


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
    addUser,
    allUsers,
    allStudents,
    allTeachers,
    usersByUnitnname
};