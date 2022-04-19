require('dotenv').config()
module.exports = {
    env: {
        serviceName: 'cutter', //Service Name
        serviceDomain: 'cutter.go5.run', //Domain
        serviceDescription: 'Google Spreadsheet-based ShortURL Service.', //Description
        serviceIcon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f517.png', //Icon

        // Google SpreadSheet
        SHEET_ID: ""
    }
};