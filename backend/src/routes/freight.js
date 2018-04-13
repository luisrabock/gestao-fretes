const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//const Data = require('../models/data');
//const Location = require('../models/locations');
const Freight = require('../models/freight');


router.get('/', (req, res, next) => {
    Freight.find()
        .then(docs => {
            res.status(200).json({
                message: `Successful data find`,
                URL: `http://localhost:3000/freights/`,
                data: result  
            });
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
        });
});



//Precisa analisar esse post, será alterado

router.post('/', (req, res, next) => {
    finder(Location, function(result){
        const data = new Data({
        conhecimento: req.body.nota,
        serie: req.body.serie,
        cgcEmit: req.body.cgc,
        peso: req.body.peso,
        volumes: req.body.volumes,
        emissao: req.body.emissao,
        estadoDest: req.body.estadoDest,
        cidadeDest: req.body.cidadeDest,
        situacao: req.body.situacao,
        destInfo: []
        });
        data.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: `Successful data insert`,
                    URL: `http://localhost:3000/freights/`,
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
    }, req.body.cidade);
});

router.get('/:freightId', (req, res, next) => {
    const id = req.params.freightId;
    Freight.findById(id)
        .then(doc => {
            res.status(200).json({
                message: `Successful getById request`,
                URL: `http://localhost:3000/freights/${id}`,
                data: doc  
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            });
    });
});

router.patch("/:freightId", (req, res, next) => {
    const id = req.params.freightId;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Freight.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
            message: `Successful patch update`,
            URL: `http://localhost:3000/freights/${id}`,
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

router.delete('/:freightId', (req, res, next) => {
    const id = req.params.freightId;
    Freight.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: `Successful remove id: ${id}`,
                URL: `http://localhost:3000/freights/${id}`,
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