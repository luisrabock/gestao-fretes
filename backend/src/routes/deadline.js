const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Deadline = require('../models/deadline');

router.get('/', (req, res, next) => {
    Deadline.find()
        .then(docs => {
            res.status(200).json({
                message: `Successful get request`,
                URL: `http://localhost:3000/deadlines`,
                data: docs
            })
        })
        .catch(err => {
            res.status(500).json({
                message: `Problem with data structure: ${err}`,
                Error: err
            })
        });
});

router.post('/', (req, res, next) => {
    
    const deadline = new Deadline({
        transportadora: req.body.transportadora,
        cgc: req.body.cgc,
        cidade: req.body.cidade,
        regiao: req.body.regiao,
        prazo: req.body.prazo,
    })
    deadline.save()
        .then(result => {
            res.status(201).json({
                message: 'deadline was created',
                deadline: deadline
            })
        })
        .catch(err => {
         res.status(500).json({
            message: `Problem with data structure: ${err}`,
            Error: err
        })
    })
});

router.get('/:deadlineId', (req, res, next) => {
    const id = req.params.deadlineId;
        Deadline.findOne({_id: id })
            .then(result => {
                res.status(201).json({
                    message: `Successful getById request`,
                    URL: `http://localhost:3000/deadlines${id}`,
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

router.patch("/:deadlineId", (req, res, next) => {
    const id = req.params.deadlineId;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Deadline.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
            message: `Successful patch request`,
            URL: `http://localhost:3000/deadlines${id}`,
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



router.delete('/:deadlineId', (req, res, next) => {
    const id = req.params.deadlineId
    DeadlineId.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: `Successful remove id: ${id}`,
                URL: `http://localhost:3000/deadlines${id}`,
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