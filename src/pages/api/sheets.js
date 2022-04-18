require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
async function sheet() {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    const credentials = require('../../../credentials.json');
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
}

export default function handler(req, res) {
    sheet()
        .then( a => res.status(200).json({ origin_url: a }))
        .catch( a => res.status(200).json({ origin_url: a }));
}