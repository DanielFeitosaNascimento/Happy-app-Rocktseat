import express from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from './models/orphanege';

const app = express();

app.use(express.json());

app.post('/orphanages', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    opening_on_weekends,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    opening_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return res.json({ message: 'ok', status: '200', description: 'Orfanato cadastrado com sucesso!' });
});

app.listen(3333);

