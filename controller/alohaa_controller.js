const AlohaaService = require('../service/alohaa_service')

exports.createAlohaa = async (req, res, next) => {
  const event = req.body;
  try {
    const {
      organisation_id,
      call_type,
      caller_number,
      receiver_number,
      did_number,
      received_at,
      ended_at,
      call_id,
      call_status,
      call_duration,
      call_recording_url,
      agent_name,
      dtmfcodes,
      dtmfcode,
    } = event;

    const alohaa = await AlohaaService.createAlohaa({
      organisation_id,
      call_type,
      caller_number,
      receiver_number,
      did_number,
      received_at,
      ended_at,
      call_id,
      call_status,
      call_duration,
      call_recording_url,
      agent_name,
      dtmfcodes,
      dtmfcode,
    });

    res.status(200).json({
      status: true,
      message: 'Alohaa created successfully',
      data: alohaa,
    });
  } catch (error) {
    console.error('Error creating Alohaa:', error.message);
    res.status(500).json({
      status: false,
      message: 'Failed to create Alohaa',
      error: error.message,
    });
  }
};
