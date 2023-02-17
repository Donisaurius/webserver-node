import http from "http";

const port = 8081;

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   "Content-Type": "application/json",
  // });//* PARA ENVIAR JSON

  // res.setHeader("Content-Disposition", "attachment; filename=prueba.csv");//* PARA ENVIAR UN ARCHIVO CSV

  // res.writeHead(200, {
  //   "Content-Type": "application/csv",
  // });//* PARA ENVIAR UN ARCHIVO CSV

  // const person = {
  //   name: "Adonis",
  // };
  // res.write(JSON.stringify(person));//* Hay que enviar la informacion en string

  // res.write("id,name\n");
  // res.write("1,Adonis\n");

  res.end(); //Se debe finalizar el server
});

server.listen(port);

console.log("Escuchando el puerto: ", port);
