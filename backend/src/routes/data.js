const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');

const Data = require('../models/data');
const Location = require('../models/locations');
const  {finDiff, findColor, findDeliery }  = require('../utils/utils');

const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');

router.get('/', (req, res, next) => {
    Data.find()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
        });
});

router.get('/data', (req, res, next) => {
    Data.find({entrega: false})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
        });
});

router.get('/markers', (req, res, next) => {
    Data.find({emissao: {$gt:startOfMonth}})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
        });
});

//vai precisar fazer uma funcao que trata o array de teste e separa os dados

//Previsao de entrega precisa de uma funcao que recebe transp e estado e devolve prazo

router.post('/', (req, res, next) => {
    Location.findOne({cidade: req.body.cidadeDest})
            .then(result => {
                const data = new Data({
                    nota: req.body.nota,
                    serie: req.body.serie,
                    cgc: req.body.cgc,
                    cgcTransp: req.body.cgcTransp,
                    peso:req.body.peso,
                    volumes:req.body.volumes,
                    emissao: req.body.emissao,
                    embarque: req.body.embarque,
                    previsao: req.body.previsao,
                    coordenadas: [result.latitude, result.longitude],
                    estado: req.body.estado,
                    cidade: req.body.cidade,
                    estadoDest: req.body.estadoDest,
                    cidadeDest: req.body.cidadeDest,
                    valor: req.body.valor
                    });
                return data.save()
            })
            .then(result => {
                res.status(200).json({
                    message: `Successful post request`,
                    URL: `http://localhost:3000/data/`,
                    data: result
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            })
        });
});

router.get('/:dataId', (req, res, next) => {
    const id = req.params.dataId;
    Data.findById(id)
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
    });
});

router.get('/nota/:nota', (req, res, next) => {
    const nota = req.params.nota;
    Data.find({nota: nota})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
    });
});

router.patch("/:dataId", (req, res, next) => {
    const id = req.params.dataId;
    const updateOps = {};
    for (const ops of req.body.payload) {
      updateOps[ops.propName] = ops.value;
    }
    Data.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
            message: `Successful patch update`,
            URL: `http://localhost:3000/data/${id}`,
            data: result  
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
            message: `Problem with data structure: ${err}`,
            Error: err
        });
      });
  });

  router.patch("/nota/:nota", (req, res, next) => {
    const nota = req.params.nota;
    const updateOps = {};
    for (const ops of req.body) {
        if(ops.propName == 'cod') {
            updateOps.cor = findColor(ops.value)
        }
        if(ops.propName == 'cod') {
            updateOps.entrega = findDeliery(ops.value)
        }
      updateOps[ops.propName] = ops.value;
    }   
    Data.update({ nota: nota }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(updateOps)
        res.status(200).json({
            message: `Successful patch update`,
            URL: `http://localhost:3000/data/${nota}`,
            data: result  
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
            message: `Problem with data structure: ${err}`,
            Error: err
        });
      });
  });

router.delete('/:dataId', (req, res, next) => {
    const id = req.params.dataId;
    Data.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: `Successful remove id: ${id}`,
                URL: `http://localhost:3000/data/${id}`,
                data: result  
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            })
        });
});

module.exports = router;

