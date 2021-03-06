exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', function(tbl) {
        tbl.increments();
        tbl.string('step', 280).notNullable();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps')
};