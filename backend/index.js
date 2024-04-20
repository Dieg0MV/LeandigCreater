import {app} from './server.js';
import morgan from 'morgan';

app.get('/ping', (req, res) => {
   res.send('recibiendo hola mundo')
})

app.post('/ping', (req, res) => {
   res.send('enviando mundo')
})

app.put('/ping', (req, res) => {
   res.send('actualizando mundo')
})

app.use(morgan('dev'))
app.listen(4000)