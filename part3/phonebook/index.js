const express = require("express");
const app = express();

app.use(express.json());

let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Phonebook Server</h1>");
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info for ${data.length} people</p><p>${new Date()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.json(data);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = data.find((p) => p.id === id);

  if (person) response.json(person);
  else response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  data = data.filter((p) => p.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const max = 100000;
  return Math.floor(Math.random() * max);
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "missing name or number",
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  data = data.concat(person);

  response.json(person);
});

const PORT = 3001;
app.listen(PORT);

console.log(`Connecting to port ${PORT}`);
