const verifyPostUser = (joiSchema) => async (req, res, next) => {
  try {
    await joiSchema.validateAsync(req.body);

    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = verifyPostUser;
