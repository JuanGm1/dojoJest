const express = require("express");
const { play } = require("./CodeBreaker");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(3000, () => {
    app.post('/juego', function (req, res) {
        respuesta = play(req.body.codigo);
        res.send(respuesta);
      });
});