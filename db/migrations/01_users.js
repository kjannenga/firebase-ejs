exports.up = knex => {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('first_name', 255)
        table.string('last_name', 255)
        table.string('handle', 100)
        table.string('email', 100)
        table.string('password', 100)
        table.integer('age')
        table.string('bio', 500)
        table.string('imgUrl', 500)
        table.timestamps(true, true)
    })

}

exports.down = knex => {
    return knex.schema.dropTable('users');
}
