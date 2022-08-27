const express = require("express"),
    app = express(),
    puerto = process.env.PORT || 3000;

const { play } = require("./CodeBreaker");

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