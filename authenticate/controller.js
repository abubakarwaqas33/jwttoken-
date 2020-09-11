const conn = require('../config/config')


module.exports = function (app) {

    app.get('/', (req, res) => {

        res.json({test:'display login page'})
    });

    app.post('/register', (req, res) => {
     
        let data = { name: req.body.name, username: req.body.username, password: req.body.password };

        conn.query('select * from users where username ="'+req.body.username+'" ',function (err, results) {
                if (err) { 
                    return res.json({ message: err })
                }
                else if(results.length>0){
                  
                    return res.json({ message: '"user already registered'+ results })
                }
                else{

                    let sql = "INSERT INTO users SET ?";
                    conn.query(sql, data, (err, results) => {
                        if (err) throw err;

                        return res.json({ message: 'register successfully' })
                    });
                }
            
            })

    });


}





