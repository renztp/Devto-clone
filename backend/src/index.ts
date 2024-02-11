import express, {Request, Response} from 'express';
const app = express();
import { auth } from 'express-oauth2-jwt-bearer';
import guard from "express-jwt-permissions";
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 8080;

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: process.env.TOKENSINGINGALG,
});

// enforce on all endpoints
app.use(jwtCheck);

app.get("/authorized", function (req: Request, res: Response) {
  res.send("Secured Resource");
});

app.get(
  "/posts",
  guard().check(["read:posts"]),
  function (req: Request, res: Response) {
    res.json({
      posts: [
        {
          title: "Hello World",
          content: "This is a test article",
        },
      ],
    });
  }
);

app.listen(port);

console.log('Running on port ', port);
