const model = require('../models/users');


const addUser = (req, res, next) => {
    //still missing
    /*Idea: create a user (if not already existing, considered its unitnName) 
    working out its name and surname from the email, and having the role specified by parameter :role*/
};

const allUsers = async (req, res, next) => {
    let users = await model.find({});
    users = users.map((user) => {
        return {
            unitnName: user.unitnName,
            name: user.firstname,
            surname: user.lastname,
            role: user.role
        }
    });
    res.status(200).json(users);
};

const allStudents = async (req, res, next) => {
    let result = await model.find({role: 'student'});
    result = result.map((user) => {
        return {
            unitnName: user.unitnName,
            name: user.firstname,
            surname: user.lastname,
            // role: user.role
        }
    });
    res.status(200).json(result);
};

const allTeachers = async (req, res, next) => {
    let result = await model.find({role: 'teacher'});
    result = result.map((user) => {
        return {
            unitnName: user.unitnName,
            name: user.firstname,
            surname: user.lastname,
            // role: user.role
        }
    });
    res.status(200).json(result);
};

const usersByUnitnname = async (req, res, next) => {
    let result = await model.find({unitnName: req.params.unitnname});
    result = result.map((user) => {
        return {
            unitnName: user.unitnName,
            name: user.firstname,
            surname: user.lastname,
            role: user.role
        }
    });
    res.status(200).json(result);
};

module.exports = {
    addUser,
    allUsers,
    allStudents,
    allTeachers,
    usersByUnitnname
};
