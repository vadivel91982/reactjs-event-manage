const dbCon = require("../../_helpers/dbConnect");
const errHandler = require("../../../../config/errorHandler");
const dataJson = require('../data/nifty500.json');

exports.gainersNifty500 = async (req, res, next) => {
    try {
        const data = dataJson.map((nifty) => {
            return nifty.Symbol
        })
        const query = "SELECT DISTINCT symbol, open, high, low, close, prevclose, tottrdqty, ROUND(((close/prevclose)-1)*100, 2)as percent FROM nse_bhavcopy WHERE symbol IN ('" + data.join("','") + "') AND series = 'EQ' AND TIMESTAMP = (SELECT MAX(TIMESTAMP) FROM nse_bhavcopy) ORDER BY percent DESC limit 0,50;";

        let getGainersNify500 = await dbCon.executeQuery(query);
        if (getGainersNify500) {
            return res.status(200).send({
                status: 'success',
                data: getGainersNify500,
                count: getGainersNify500.length,
                message: ""
            });
        }
        return res.status(404).send({
            status: 'error',
            message: 'Records Not Found!'
        });

    } catch (e) {
        return res.status(500).send({
            status: 'error',
            message: errHandler.getErrorMessage(e)
        })
    }
}
