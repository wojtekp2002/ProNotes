const hbs = require('hbs');
const users = require('../db/models/auth')

class authActions {
    //render
     async render (req, res) {
        try {
            res.render('login')
        } catch (err) {
            console.error(err);
        }
    }

    //login
    async login (req, res) {
        try {
            const check = await users.findOne({login: req.body.login});
            if (check.password===req.body.password)
            {
                res.render('home');
            }
            else
            {
                res.send('Błędne hasło!')
            }

        } catch (err) {
            console.error(err)
        };
    }

    //rejestracja
     async signup (req, res) {
        try {
            res.render('signup')
        } catch (err) {
            console.error(err);
        }
     }

     async signup2 (req, res) {
        const data = {
            login: req.body.login,
            password: req.body.password
        }

        await users.insertMany([data]);
        res.status(201).json(data);
        res.render('home');
     }
};

module.exports = new authActions();