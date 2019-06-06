exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('comments')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('comments').insert([{
                    comment_content: 'blah blah',
                    user_id: 2,
                    post_id: 1
                },
                {
                    comment_content: 'blah blah blah',
                    user_id: 1,
                    post_id: 1
                },
                {
                    comment_content: 'asdfbjasodgias blah blah blah',
                    user_id: 1,
                    post_id: 2
                },
                {
                    comment_content: 'asdjgln gaksjldg baljaah',
                    user_id: 2,
                    post_id: 2
                },
                {
                    comment_content: 'asobdfj',
                    user_id: 2,
                    post_id: 3
                },
                {
                    comment_content: 'hello',
                    user_id: 1,
                    post_id: 3
                },
                {
                    comment_content: 'ljkndsg',
                    user_id: 2,
                    post_id: 4
                },
                {
                    comment_content: 'awattup',
                    user_id: 1,
                    post_id: 4
                },
            ])
        })
}