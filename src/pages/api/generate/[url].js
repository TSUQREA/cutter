require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
async function sheet(origin_url) {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    const credentials = require('../../../../credentials.json');
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsById[1919810]
    const short = Math.random().toString(32).substring(2)
    await sheet.addRow({ origin_url: origin_url, short_url: `${short}` })
    return `${short}`
}

export default function handler(req, res) {
    const { url } = req.query
    sheet(url)
        .then(e => res.status(200).json({ short_url: `${e}` }))
        .catch(e => res.status(200).json({ origin_url: `${e}` }));
}