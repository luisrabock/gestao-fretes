const moment = require('moment');

//function find coordenates before insert database
const findCoord = (collection, callback, city) => {
    collection.findOne({cidade: city}, function(err, result) {
     if (err) {
        console.log(err)
    } else  {
        console.log(result)
        callback(result)
        }
    });
};
module.exports = {
//function returns diff of today and delivery date
    finDiff: (date) => {
        const difer = moment().diff(date, 'days')
        return difer
},

//function returns color to render data table
    findColor: (cod) => {
        if(cod == '0' || cod == 91 || cod == 24 || cod == 31 || cod == 1 || cod == 2) {
            return true
        } else {
            return false
        }
    },
    //function returns delivery true or false
    findDeliery: (cod) => {
        if(cod == 1 || cod == 2 || cod == 24 || cod == 31) {
            return true
        } else {
            return false
        }
    }

}