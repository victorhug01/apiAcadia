import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Helllo peoples')
})

router.get('/contact', (req: Request, res: Response) => {
    res.send('Form of contact')
})

router.get('/info', (req: Request, res: Response) => {
    res.send('Institucional page')
})

export default router