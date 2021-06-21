import express, { Request, Response } from "express";

const app = express();

app.get(`/test`, (request: Request, response: Response) => {
  return response.json({ message: `Test GET ok!` });
});

app.post(`/test`, (request: Request, response: Response) => {
  return response.json({ message: `Test POST ok!` });
});

app.listen(3000, () => console.log("Server is running!"));
