const AlohaaService = require('../service/alohaa_service')
exports.createAlohaa = async (req, res, next) => {
    try {
        const { organisation_id, call_type,caller_number, receiver_number,did_number,received_at,ended_at,call_id,call_status,call_duration,call_recording_url,agent_name } = req.body;
        const alohaa = await AlohaaService.createAlohaa({organisation_id, call_type,caller_number, receiver_number,did_number,received_at,ended_at,call_id,call_status,call_duration,call_recording_url,agent_name});
        
        res.status(200).json({
            status: true,
            message: "Alohaa created successfully",
            
        });
    } catch (error) {
        next(error);
    }
};