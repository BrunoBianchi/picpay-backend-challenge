import { Request, Response, Router } from "express";
import z from 'zod';
import { ComumInterface } from "../../interfaces/ComumInterface";
import {createUsuarioComum} from "../../services/API/APIService";

const router:Router = Router();

router.post('/comum/', async (req:Request, res:Response) => {
    const schema = z.object({
        nome:z.string(),
        email:z.string().email(),
        cpf:z.string().min(11).max(11),
        senha:z.string().min(8),
        saldo:z.number().min(0.01)
    }).parse(req.body);
    const comum:ComumInterface = await createUsuarioComum(schema);
    res.status(201).json(comum);
});

export default router;