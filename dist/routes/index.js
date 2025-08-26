import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();
router.get("/", (_, res) => {
    return res.send("Olá, dev!");
});
router.post("/", (req, res) => {
    const { usuario } = req.body;
    return res.status(StatusCodes.CREATED).send({ response: `Usuário ${usuario} cadastrado!` });
});
export { router };
