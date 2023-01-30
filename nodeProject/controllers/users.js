const model = require('../models/users');


const addUser = async (req, res, next) => {
    let result = await model.find({unitnName: req.params.unitnname});

    if(result.length > 0){
        res.status(200);
        res.send('Utente già registrato');
    }
    else{
        unitnName = req.params.unitnname

        model.create({
            unitnName: unitnName,
            firstname: unitnName.split(".")[0],
            lastname: unitnName.split(".")[1].split("-")[0],
            role: req.params.role
        }, function (err, user) {
            if (err){
                console.log("Errore nell'aggiunta dell'utente: " + user);
            }
        })
        res.status(200)
        res.send('Utente registrato con successo');
    }
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
