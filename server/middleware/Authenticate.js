const { ValidationError } = require("yup");
const token = require("../utils/token");

module.exports = async (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) return next(new ValidationError("No token was provided in the Authorization header."));

	const cleanedAuthorization = authorization.replace(/Bearer\ +/gim, "");

	try {
		const { user } = token.verify(cleanedAuthorization);
		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({ errors: ["Unauthorized"] });
	}
};
