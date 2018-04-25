const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Location = require('../models/locations');

router.get('/', (req, res, next) => {
    Location.find()
        .then(docs => {
            res.status(200).json({
                message: `Successful get request`,
                URL: `http://localhost:3000/locations`,
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

router.get('/cidades', (req, res, next) => {
    Location.aggregate([
        { "$project": {
            "_id": 0,
            value: "$cidade",
            label: "$cidade"
        }},
        {$sort: {value: 1}}
    ])
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
    const location = new Location({
        cidade: req.body.cidade,
        uf: req.body.uf,
        regiao: req.body.regiao,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        coordenadas: [req.body.coordenadas]
    })
    location.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Location was created',
                location: location
            })
        })
        .catch(err => {
         res.status(500).json({
            message: `Problem with data structure: ${err}`,
            Error: err
        });
    });
});

router.get('/:locationId', (req, res, next) => {
    const id = req.params.locationId;
        Location.findOne({_id: id })
            .then(result => {
                res.status(201).json({
                    message: `Successful getById request`,
                    URL: `http://localhost:3000/locations${id}`,
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

router.patch("/:locationId", (req, res, next) => {
    const id = req.params.locationId;
    const updateOps = {};

    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Location.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json({
            message: `Successful patch request`,
            URL: `http://localhost:3000/locations${id}`,
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



router.delete('/:locationId', (req, res, next) => {
    const id = req.params.locationId
    Location.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: `Successful remove id: ${id}`,
                URL: `http://localhost:3000/locations${id}`,
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