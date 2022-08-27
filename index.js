const express = require("express"),
    app = express(),
    puerto = process.env.PORT || 3000;

const { play } = require("./CodeBreaker");
const cors = require('cors');
app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(puerto, () => {
    app.post('/juego',cors(), function (req, res) {
        respuesta = play(req.body.codigo);
        res.send(respuesta);
      });
});