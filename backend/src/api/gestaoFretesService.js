const GestaoFretes = require('./gestaoFretes');
const ErrorHandler = require('./common/erroHandler');
const moment = require('moment');

GestaoFretes.methods(['get', 'post', 'put', 'delete']);
GestaoFretes.updateOptions({ new: true, runValidators: true });
//GestaoFretes.after('post', ErrorHandler).after('put', ErrorHandler);

//busca os objetos daquele mês para renderizar a cidade no mapa
const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
GestaoFretes.route('markers', (req, res, next) => {
    GestaoFretes.find({emissao: {$gt:startOfMonth}})
    .exec(function(err, results){
        if(err) {
           return res.send('Error')
        } else {
            res.json(results)
        };
    });
});

module.exports = GestaoFretes;