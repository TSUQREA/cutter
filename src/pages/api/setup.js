require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
async function sheet() {
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
    const credentials = require('../../../credentials.json');
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    await doc.updateProperties({ title: 'ShortURL' });
    await doc.addSheet({ title: "ShortURLs", headerValues: ['origin_url', 'short_url'], sheetId: 1919810 })
}

export default function handler(req, res) {
    sheet()
        .then(res.status(200).json({ result: "Setup is complete." }))
        .catch(res.status(200).json({ result: "Setup failed." }));
}