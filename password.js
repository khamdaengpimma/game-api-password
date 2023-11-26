const pw = {"127.0.0.1": "Level_1", "ABDF": "Level_2", "subscribetokhamdaeng": "Level_3"};

exports.password = (req, res) => {
  const pass = req.params.password;

  if (pw.hasOwnProperty(pass)) {
    const level = pw[pass];
    res.send(`${level}`);
  } else {
    res.send("NO!");
  }
};