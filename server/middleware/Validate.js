const { isSchema } = require("ypu");

module.exports = (schema) => {
	if (!isSchema(schema)) throw new Error("The provided schema is invalid.");

	return async (req, res, next) => {
		try {
			await schema.validate(req.body);
			next();
		} catch (error) {
			next(error);
		}
	};
};
