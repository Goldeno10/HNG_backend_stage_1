# Number Properties API

This is a simple Node.js and Express API that analyzes numerical properties and provides fun facts about numbers using the Numbers API. This project is part of the **HNG Internship Task**.

## 🚀 Features

- Check if a number has special properties (prime, perfect, Armstrong, Fibonacci, palindrome, etc.).
- Calculate the sum of the digits of a number.
- Fetch a fun fact about a number from the Numbers API.
- Returns error response for invalid numbers.

## 📜 API Endpoints

### ✅ Health Check

```http
GET /
```

Returns:

```json
{
  "success": true
}
```

### 🔢 Get Number Properties

```http
GET /number/:num
```

#### Example Request:

```http
GET /number/371
```

#### Example Response:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

#### Error Response:

```json
{
  "number": "xyz",
  "error": true
}
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Goldeno10/HNG_backend_stage_1.git
cd HNG_backend_stage_1
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Run the Server

```sh
npm start
```

The server will start at **http://localhost:3000**.

## 🔥 Tech Stack

- **Node.js** - Server-side JavaScript runtime.
- **Express.js** - Web framework for handling API requests.
- **Axios** - For fetching fun facts about numbers.
- **TypeScript** - Strongly typed JavaScript for better maintainability.

## 📜 Project Structure

```
HNG_backend_stage_1/
│── src/
│   ├── index.ts         # Main entry point
│   ├── utils/
│   │   ├── numberProperties.ts  # Functions for checking number properties
│── package.json        # Dependencies and scripts
│── tsconfig.json       # TypeScript configuration
│── README.md           # Project documentation
```

## 🎯 Task Requirements

- ✅ Use **Node.js** and **Express.js**.
- ✅ Implement an API route to check number properties.
- ✅ Fetch fun facts from an external API.
- ✅ Handle errors for invalid inputs.
- ✅ Ensure proper API documentation.

## 📌 Contributing

If you'd like to contribute:

1. Fork this repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## 📝 License

This project is licensed under the **MIT License**.

## 🤝 Connect

For questions or collaborations, feel free to reach out!

- 📧 Email: ibrahimmuhammad271@gmail.com
- 🔗 LinkedIn: [Muhammad Ibrahim](https://linkedin.com/in/muhammad-ib)
- 🐦 Twitter: [@Goldeno](https://twitter.com/Goldeno)
