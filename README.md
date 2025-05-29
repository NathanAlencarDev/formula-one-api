# Formula 1 API

A simple Node.js API using **Fastify** that provides information about Formula 1 **teams** and **drivers**.

## 🚀 Features

* List all F1 teams
* List all F1 drivers
* Get a specific driver by ID
* CORS enabled for public access
* Lightweight and fast using Fastify

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/NathanAlencarDev/formula-one-api.git
```

2. Navigate into the project directory:

```bash
cd formula1-api
```

3. Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Server

Start the server with:

```bash
npm start
```

The server will start on `http://localhost:3333`.

---

## 📡 API Endpoints

### Get all teams

```
GET /teams
```

**Response:**

```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
    { "id": 2, "name": "Mercedes", "base": "Brakley, United Kingdom" },
    { "id": 3, "name": "Red Bull Racing", "base": "Milton Keynes, United Kingdom" }
  ]
}
```

---

### Get all drivers

```
GET /drivers
```

**Response:**

```json
{
  "drivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" },
    { "id": 3, "name": "Lando Norris", "team": "McLaren" }
  ]
}
```

---

### Get driver by ID

```
GET /drivers/:id
```

**Example:**

```
GET /drivers/1
```

**Response:**

```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

If the driver is not found:

```json
{
  "message": "Driver Not Found"
}
```

---

## 🔐 CORS

CORS is configured to allow all origins (`origin: "*"`) and only allows `GET` requests.

---

## 🛠️ Tech Stack

* [Fastify](https://www.fastify.io/)
* [Node.js](https://nodejs.org/)
* \[TypeScript (optional interface usage)]

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
