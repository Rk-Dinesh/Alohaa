const AlohaaModel = require("../model/alohaa");

exports.createAlohaa = async (AlohaData) => {
    const alohaa = new AlohaaModel(AlohaData);
    return await alohaa.save();
};

exports.getbyAgentPhone = async (receiver_number) => {
    return await AlohaaModel.find({
        receiver_number,
    });
  };