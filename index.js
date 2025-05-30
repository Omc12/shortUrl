const express = require('express')
const path = require('path')
const urlRoute = require('./routes/url')
const URL = require('./models/url')
const { connectToMongoDB } = require('./connect')
const staticRouter = require('./routes/staticRouter')

const app = express()
const PORT = 8001

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log('mongoDB connected'))

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/url', urlRoute);
app.use('/', staticRouter)

app.get('/test', async(req, res) => {
    const allUrls = await URL.find({})
    return res.render('home', {
        urls: allUrls,
    })
});

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
   const entry =  await URL.findOneAndUpdate(
    {
        shortId,
    }, 
    { $push: {
        visitHistory: {
            timestamp: Date.now()
        }
    },
});
res.redirect(entry.redirectUrl)
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));