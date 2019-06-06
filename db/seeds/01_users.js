exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([{
                    first_name: 'Chris',
                    last_name: 'Jannenga',
                    handle: 'cjannenga',
                    email: 'cjannenga@gmail.com',
                    password:'password',
                    age: 25,
                    bio: "Whattup im chris",
                    imgUrl: 'https://i.imgur.com/TzBNuvj.jpg'
                },
                {
                    first_name: 'Krystine',
                    last_name: 'Jannenga',
                    handle: 'kjannenga',
                    email: 'kjannenga1@gmail.com',
                    password: 'password',
                    age: 23,
                    bio: "Hi I like to code.",
                    imgUrl: 'https://avatars3.githubusercontent.com/u/22760491?s=460&v=4'
                },
            ])
        })
}