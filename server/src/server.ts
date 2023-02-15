import express from 'express';
import { router } from './route/decorationRoute';

const app = express();

app.use(express.json());
app.use('/', router);
app.listen(3333, () => console.log('Server is running!'));