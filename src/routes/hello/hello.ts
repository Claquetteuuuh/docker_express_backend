import { Request, Response, Router } from "express";

const secretToken = process.env.CLAQUETTEUUUH_API_KEY;
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const clientToken = req.headers['authorization'];
  if (clientToken !== `Bearer ${secretToken}`) {
    res.status(400).json("Token invalide");
    return;
  }

  res.status(200).json({ message: "Hello World !" })
})

export default router
