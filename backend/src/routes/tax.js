const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tax = require('../models/tax');

router.get('/', (req, res, next) => {
    Tax.find()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            })
        });
});

router.post('/', (req, res, next) => {
    const tax = new Tax({
        transp: req.body.transp,
        estadoOrig:req.body.estadoOrig,
        cidadeOrig: req.body.cidadeOrig,
        estadoDest: req.body.estadoDest,
        cidadeDest:req.body.cidadeDest,
        previsao: req.body.previsao,
        pedagio: req.body.pedagio,
        indice: req.body.indice,
        seguro: req.body.seguro,
        trt: req.body.trt,
        tas: req.body.tas,
        tfd: req.body.tfd,
        sf: req.body.sf,
        trf: req.body.trf,
        ta: req.body.ta,
        vd: req.body.vd,
        tda: req.body.tda,
        min: req.body.min,
        perc: req.body.perc,
        pesoUn: req.body.pesoUn,
        pesoMin: req.body.pesoMin,
    })
    tax.save()
        .then(result => {
            res.status(201).json({
                message: 'Tax was created',
                deadline: tax
            })
        })
        .catch(err => {
         res.status(500).json({
            message: `Problem with data structure: ${err}`,
            Error: err
        })
    })
});

router.get('/:cidade', (req, res, next) => {
    const cidade = req.params.cidade;
        Tax.find({cidadeDest: cidade })
            .then(docs => {
                res.status(200).json(docs)
            })
            .catch(err => {
                res.status(500).json({
                    message: `Problem with data structure: ${err}`,
                    Error: err
                })
            })
});

router.get('/transp/:transp', (req, res, next) => {
    const transp = req.params.transp;
        Tax.find({transp: transp })
            .then(docs => {
                res.status(200).json(docs)
            })
            .catch(err => {
                res.status(500).json({
                    message: `Problem with data structure: ${err}`,
                    Error: err
                })
            })
});




router.patch("/:taxId", (req, res, next) => {
    const id = req.params.taxId;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Tax.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
            message: `Successful patch request`,
            URL: `http://localhost:3000/tax${id}`,
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



router.delete('/:taxId', (req, res, next) => {
    const id = req.params.taxId
    Tax.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: `Successful remove id: ${id}`,
                URL: `http://localhost:3000/tax${id}`,
                data: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            })
        })
});

module.exports = router;