exports.up = knex => {
    return knex.schema.createTable('posts', function (table) {
        table.increments();
        table.string('post_content', 1000)
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true)
    })

}

exports.down = knex => {
    return knex.schema.dropTable('posts');
}
