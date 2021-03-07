import express from 'express';
import { async } from 'regenerator-runtime';
import { filterShows } from '../controllers';

const router = express.Router();

router.get('/', (req, res, next) => res.render('index', { title: 'JSON-based web service' }));

/* POST home page. */
router.post('/', async (req, res, next) =>
  req.body?.payload ?
    res.json({ response: await filterShows(req.body.payload) })
    :
    res.status(400).json({ message: '"payload" list does not exsits' }));

export default router;
