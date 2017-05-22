
exports.seed = function (knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        knex('activities').insert({user_id: 99901, name: 'Piano'}),
        knex('activities').insert({user_id: 99902, name: 'Car'}),
        knex('activities').insert({user_id: 99903, name: 'Rubbish'}),
        knex('activities').insert({user_id: 99904, name: 'Music'}),
        knex('activities').insert({user_id: 99905, name: 'Cooking'}),
        knex('activities').insert({user_id: 99906, name: 'Car'}),
        knex('activities').insert({user_id: 99907, name: 'Cooking'}),
        knex('activities').insert({user_id: 99908, name: 'Painting'}),
        knex('activities').insert({user_id: 99909, name: 'Art'}),
        knex('activities').insert({user_id: 99910, name: 'Travel'}),
        knex('activities').insert({user_id: 99911, name: 'Movies'}),
        knex('activities').insert({user_id: 99912, name: 'Basketball'}),
        knex('activities').insert({user_id: 99913, name: 'Rugby'}),
        knex('activities').insert({user_id: 99914, name: 'Surfing'}),
        knex('activities').insert({user_id: 99915, name: 'Computing'}),
        knex('activities').insert({user_id: 99916, name: 'Kungfu'}),
        knex('activities').insert({user_id: 99917, name: 'Climbing'}),
        knex('activities').insert({user_id: 99918, name: 'Singing'}),
        knex('activities').insert({user_id: 99919, name: 'Dancing'}),
        knex('activities').insert({user_id: 99920, name: 'Fool around'}),
        knex('activities').insert({user_id: 99921, name: 'Sleeping'}),
        knex('activities').insert({user_id: 99922, name: 'Ballet'}),
        knex('activities').insert({user_id: 99923, name: 'Drama'}),
        knex('activities').insert({user_id: 99924, name: 'Guitar'}),
        knex('activities').insert({user_id: 99925, name: 'Running'}),
        knex('activities').insert({user_id: 99926, name: 'Weight lifting'})
      ]);
    });
};
