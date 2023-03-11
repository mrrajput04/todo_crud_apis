class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
  static Error404(message = "Sorry page not available") {
    return new CustomErrorHandler(404, message);
  }
  static wrongCredentials(message = "email or password is wrong") {
    return new CustomErrorHandler(401, message);
  }
  static unAuthorized(message = "unauthorized login") {
    return new CustomErrorHandler(401, message);
  }
  static wrongOtp(message = "invalid otp"){
    return new CustomErrorHandler(401,message);
  }
  static alreadyExist(message="already exists") {
    return new CustomErrorHandler(409, message);
  }
  static notFound(message = "404 not found") {
    return new CustomErrorHandler(404, message);
  }
  static passLength(message = "password must be 5 characters  long") {
    return new CustomErrorHandler(400, message);
  }
}

module.exports = CustomErrorHandler;
