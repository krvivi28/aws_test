import server from "./app.js";

server.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
