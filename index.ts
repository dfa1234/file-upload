import * as express from 'express';
import * as fileUpload from 'express-fileupload';
const app = express()
const port = 3000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', '*');
    next();
});

app.use(fileUpload());

app.get('/', (req, res) => {
    res.send('Status 🟢')
})

app.post('/upload', (req, res) => {
    delete (req.files.file as any).data;
    delete (req.files.file as any).mv;
    console.log(req.files.file);
    setTimeout(() => {
        res.json({ success: true });
    }, 5000)
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
