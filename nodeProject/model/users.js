const mongoose = require('mongoose');

usermodel = mongoose.model('Users', new mongoose.Schema({
    unitnName: 'String',
    firstname: 'String',
    lastname: 'String',
    role: 'String'
}));

async function addUser(name, role) {
    // Aggiunge l'utente con nome name e ruolo role al sistema
    // ritorna 0 in caso tutto sia andato a buon fine
    // 1 se l'utente esiste già, -1 in caso di errore

    let result = await usermodel.find({unitnName: name});

    if(result.length > 0){
        return 1;
    }
    else{
        usermodel.create({
            unitnName: name,
            firstname: name.split(".")[0],
            lastname: name.split(".")[1].split("-")[0],
            role: role
        }, function (err, user) {
            if (err){
                return -1;
            }
        })
        return 0;
    }
};

async function allUsers () {
    let users = await usermodel.find({});
    users = users.map((user) => {
        return {
            unitnName: user.unitnName,
            name: user.firstname,
            surname: user.lastname,
            role: user.role
        }
    });
    return users;
};

async function allStudents () {
    let students = await usermodel.find({role: 'student'});
    students = students.map((student) => {
        return {
            unitnName: student.unitnName,
            name: student.firstname,
            surname: student.lastname,
            // role: user.role
        }
    });
    return students;
};

async function allTeachers () {
    let teachers = await usermodel.find({role: 'teacher'});
    teachers = teachers.map((teacher) => {
        return {
            unitnName: teacher.unitnName,
            name: teacher.firstname,
            surname: teacher.lastname,
            // role: user.role
        }
    });
    return teachers;
};

async function usersByUnitnname () {    // TODO: farla come le altre
    let result = await usermodel.find({unitnName: req.params.unitnname});
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

async function getRole (name) {
    let result = await usermodel.find({unitnName: name});
    result = result.map((user) => {
        return {
            role: user.role
        }
    });
    if(result[0] == undefined)
        return undefined
    else
        return result[0].role
}

module.exports = {
    usermodel,
    addUser,
    allUsers,
    allStudents,
    allTeachers,
    usersByUnitnname,
    getRole
};