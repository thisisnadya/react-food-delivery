const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
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

    // hashing password
    const hash = await bcrypt.hashSync(password, 10);

    res.json({ email, username, hash, passwordCheck });
  } catch (error) {
    res.status(500).json({ err: error.message || "Error while registration" });
  }
};

exports.login = (req, res) => {
  try {
    // validate req
    if (!req.body) {
      res.status(406).json({ err: "You have to fill the email and password" });
      return;
    }

    // get user data
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      res.status(406).json({ err: "Not all fields have been entered" });
    }

    const user = "$2b$10$5ZkuiruVx2wXba70NgSAbe.CywpLKlszO5O3yYDw.taZ.3PMRC97.";
    // compare the password
    const isMatch = bcrypt.compare(password, user);

    res.json({ email, isMatch });
  } catch (error) {
    res.status(500).json({ err: error.message || "Error while login" });
  }
};
