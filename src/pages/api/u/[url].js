import { useRouter } from 'next/router'

require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
async function sheet(short) {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    const credentials = require('../../../../credentials.json');
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsById[1919810]
    const rows = await sheet.getRows()
    let row = rows.find(row => short === row.short_url)
    console.log(row)
    let origin = row._rawData[0]
    console.log(origin)
    return origin
}

export default function handler(req, res) {
    const { url } = req.query
    return sheet(url)
        .then(e => res.redirect(302, `${e}`))
        .catch(e => res.status(200).json({ origin_url: "error" }));
}