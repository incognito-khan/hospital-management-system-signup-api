// response.service.js
class ResponseService {
    sendSuccess(res, message, data = null) {
      res.status(200).json({ message, data });
    }
  
    sendCreated(res, message, data = null) {
      res.status(201).json({ message, data });
    }
  
    sendError(res, message) {
      res.status(500).json({ message });
    }
  }
  
  module.exports = new ResponseService();