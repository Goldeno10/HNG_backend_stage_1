import axios from "axios";
import express, { Express, NextFunction, Request, Response } from "express";
import {
  digitSum,
  isArmstrong,
  isEven,
  isFibonacci,
  isPalindrome,
  isPerfect,
  isPerfectCube,
  isPerfectSquare,
  isPrime,
} from "./utils/numberProperties";

const app: Express = express();

interface NumberProperties {
  number: number;
  is_prime: boolean;
  is_perfect: boolean;
  properties: string[];
  digit_sum: number;
  fun_fact: string;
}

interface ErrorProperties {
  number: string;
  error: boolean;
}

// CORS Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Body Parser Middleware
app.use(express.json());

// Route
app.get("/", (_req: Request, res: Response) => {
  res.json({ success: true });
});

// numbers fun fact api url
const numbersApiUrl = "http://numbersapi.com/";

interface Params {
  num: string;
}

// app.get("/api/classify-number", async (req: Request, res: Response) => {
//   const num: number = parseInt(req.params.num);

//   if (isNaN(num)) {
//     const errorProperties: ErrorProperties = {
//       number: req.params.num,
//       error: true,
//     };
//     res.json(errorProperties);
//     return;
//   }

//   const numberProperties: NumberProperties = {
//     number: num,
//     is_prime: isPrime(num),
//     is_perfect: isPerfect(num),
//     properties: [],
//     digit_sum: digitSum(num),
//     fun_fact: "",
//   };

//   try {
//     const response = await axios.get(`${numbersApiUrl}${num}`);
//     numberProperties.fun_fact = response.data;
//   } catch (error) {
//     numberProperties.fun_fact = "Could not fetch fun fact.";
//   }

//   numberProperties.properties = [
//     isArmstrong(num) ? "armstrong" : "",
//     isEven(num) ? "even" : "odd",
//     isFibonacci(num) ? "fibonacci" : "",
//     isPalindrome(num) ? "palindrome" : "",
//     isPerfectCube(num) ? "perfect cube" : "",
//     isPerfectSquare(num) ? "perfect square" : "",
//     isPrime(num) ? "prime" : "",
//     isPerfect(num) ? "perfect" : "",
//   ].filter(Boolean);

//   return res.json(numberProperties);
// });

app.get("/api/classify-number", async (req: Request, res: Response) => {
  const num = Number(req.query.number);

  if (isNaN(num)) {
    return res.json({ number: req.query.number, error: true });
  }

  const numberProperties: NumberProperties = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties: [],
    digit_sum: digitSum(num),
    fun_fact: "",
  };

  try {
    const response = await axios.get(`${numbersApiUrl}${num}`);
    numberProperties.fun_fact = response.data;
  } catch (error) {
    numberProperties.fun_fact = "Could not fetch fun fact.";
  }

  numberProperties.properties = [
    isArmstrong(num) ? "armstrong" : "",
    isEven(num) ? "even" : "odd",
    isFibonacci(num) ? "fibonacci" : "",
    isPalindrome(num) ? "palindrome" : "",
    isPerfectCube(num) ? "perfect cube" : "",
    isPerfectSquare(num) ? "perfect square" : "",
    isPrime(num) ? "prime" : "",
    isPerfect(num) ? "perfect" : "",
  ].filter(Boolean);

  return res.json(numberProperties);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Serevr running on port ${PORT}`));
