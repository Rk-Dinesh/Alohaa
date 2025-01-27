const AlohaaModel = require("../model/alohaa");

exports.createAlohaa = async (AlohaData) => {
    const alohaa = new AlohaaModel(AlohaData);
    return await alohaa.save();
};