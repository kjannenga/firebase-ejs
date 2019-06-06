exports.up = knex => {
    return knex.schema.createTable('comments', function (table) {
        table.increments();
        table.string('comment_content', 255)
        table.integer('user_id')
              .notNullable()
              .references('id')
              .inTable('users')
              .onDelete('CASCADE')
              .index();
        table.integer('post_id')
            .notNullable()
            .references('id')
            .inTable('posts')
            .onDelete('CASCADE')
            .index();
        table.timestamps(true, true)
    })

}

exports.down = knex => {
    return knex.schema.dropTable('comments');
}
