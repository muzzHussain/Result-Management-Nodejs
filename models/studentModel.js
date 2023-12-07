const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        roll: {
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATE
        },
        score: {
            type: Sequelize.INTEGER
        }
    });
    return Student;
}