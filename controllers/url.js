const { nanoid } = require('nanoid')
const URL = require('../models/url')
const { error } = require('console')

async function handleGenerateNewShortUrl(req, res) {
    const body = request.body
    if (!body.url) return res.status(400).json({ error: 'ur; is required'})
    const shortID = nanoid(8)
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
    })
}