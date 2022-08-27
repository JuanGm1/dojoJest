const express = require("express"),
    app = express(),
    puerto = process.env.PORT || 3000;

const { play } = require("./CodeBreaker");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(puerto, () => {
    app.post('/juego', function (req, res) {
        respuesta = play(req.body.codigo);
        res.send(respuesta);
      });
});