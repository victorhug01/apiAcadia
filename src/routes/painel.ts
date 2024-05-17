import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('home do painel')
})

router.get('/noticia', (req: Request, res: Response) => {
    res.send('lista de noticias cadastradas')
})


export default router