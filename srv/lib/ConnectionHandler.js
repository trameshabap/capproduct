const cds = require("@sap/cds")

async function ConnectBackend(req) {

    const backConnect = await cds.connect.to('GWSAMPLE')

    const trx = backConnect.tx(req);
    return trx.run(req.query); 

}

module.exports = {
    ConnectBackend
}