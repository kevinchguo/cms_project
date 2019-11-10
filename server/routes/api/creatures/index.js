const express = require('express');
const creatureRouter = express.Router();
const knex = require('knex');

creatureRouter.route('/').get((req, res) => {
  return req.db.Creature.fetchAll({
    withRelated: [
      'user_id',
      'category_id',
      'creature_status_id',
      'condition_id'
    ]
  })
    .then(creatures => {
      return res.json(creatures);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

creatureRouter.route('/newest').get((req, res) => {
  console.log('newest route works');
  return req.db.Creature.forge()
    .orderBy('sort_by_date', 'DESC')
    .fetchAll({
      withRelated: [
        'user_id',
        'category_id',
        'creature_status_id',
        'condition_id'
      ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

creatureRouter.route('/oldest').get((req, res) => {
  console.log('oldest route works');
  return req.db.Creature.forge()
    .orderBy('sort_by_date', 'ASC')
    .fetchAll({
      withRelated: [
        'user_id',
        'category_id',
        'creature_status_id',
        'condition_id'
      ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

creatureRouter.route('/highest').get((req, res) => {
  console.log('newest route works');
  return req.db.Creature.forge()
    .orderBy('price', 'DESC')
    .fetchAll({
      withRelated: [
        'user_id',
        'category_id',
        'creature_status_id',
        'condition_id'
      ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

creatureRouter.route('/lowest').get((req, res) => {
  console.log('newest route works');
  return req.db.Creature.forge()
    .orderBy('price', 'ASC')
    .fetchAll({
      withRelated: [
        'user_id',
        'category_id',
        'creature_status_id',
        'condition_id'
      ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

creatureRouter.route('/search').post((req, res) => {
  let keyword = req.body.data;
  keyword.toLowerCase()[0].toUpperCase() + keyword.toLowerCase().slice(1);
  console.log(typeof keyword, 'this is the keyword');
  return req.db.Creature.forge()
    .where('name', 'like', `%${keyword.toLowerCase()}%`)
    .orderBy('sort_by_date', 'DESC')
    .fetchAll({
      withRelated: [
        'user_id',
        'category_id',
        'creature_status_id',
        'condition_id'
      ]
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = creatureRouter;
