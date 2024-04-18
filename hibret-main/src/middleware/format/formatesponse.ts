// Response formatting middleware
const formatResponse = (req, res, next) => {
    res.locals.statusCode = res.statusCode || 200; // Default status code to 200
    res.locals.data = res.locals.data || {}; // Default data to an empty object
    
    // Format response body with common structure
    const responseBody = {
      status: res.locals.statusCode,
      data: res.locals.data
    };
  
    res.json(responseBody);
  };
  export default formatResponse
  
  // Apply response formatting middleware to all routes
 
  