exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('posts')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('posts').insert([{
                    post_content: 'Yo whattup blah blah blah',
                    user_id: 1,
                },
                {
                    post_content: 'blah blah blah',
                    user_id: 1,
                },
                {
                    post_content: 'asdfbjasodgias blah blah blah',
                    user_id: 2,
                },
                {
                    post_content: 'asdjgln gaksjldg baljaah',
                    user_id: 2,
                },
            ])
        })
}