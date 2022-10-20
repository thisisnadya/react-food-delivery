exports.registerUser = (req, res) => {
  try {
    // validate request
    if (!req.body) {
      res.status(406).json({ err: "You have to fill the registration form" });
      return;
    }
    let { email, username, password, passwordCheck } = req.body;

    if (!email || !password || !passwordCheck) {
      return res.status(406).json({ err: "Not all field have been entered" });
    }

    if (password.length < 8) {
      return res
        .status(406)
        .json({ err: "Password must be at least 8 characters long" });
    }

    if (password !== passwordCheck) {
      res.status(406).json({ err: "Password not match" });
    }

    res.json({ email, username, password, passwordCheck });
  } catch (error) {
    res.status(500).json({ err: error.message || "Error while registration" });
  }
};

exports.login = (req, res) => {
  res.json({ message: "Controller Request" });
};
