const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Regions = require('../models/regions');

router.get('/', (req, res, next) => {
    Regions.find()
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
    const regions = new Regions({
        regions: req.body.regions,
        citys:req.body.citys,
        transp:req.body.transp

    })
    regions.save()
        .then(result => {
            res.status(201).json({
                message: 'Regions was created',
                regions: regions
            })
        })
        .catch(err => {
         res.status(500).json({
            message: `Problem with data structure: ${err}`,
            Error: err
        })
    })
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
        Regions.find({_id: id })
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




router.patch("/:regionsId", (req, res, next) => {
    const id = req.params.regionsId;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Regions.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
            message: `Successful patch request`,
            URL: `http://localhost:3000/Regions${id}`,
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



router.delete('/:regionsId', (req, res, next) => {
    const id = req.params.regionsId
    Regions.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: `Successful remove id: ${id}`,
                URL: `http://localhost:3000/regions${id}`,
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