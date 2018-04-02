const GestaoFretes = require('./gestaoFretes');
const ErrorHandler = require('./common/erroHandler');

GestaoFretes.methods(['get', 'post', 'put', 'delete']);
GestaoFretes.updateOptions({ new: true, runValidators: true });
GestaoFretes.after('post', ErrorHandler).after('put', ErrorHandler);

module.exports = GestaoFretes;
