const pw = {"127.0.0.1": "Level_2", "ABDF": "Level_3", "subscribetokhamdaeng": "Level_4"};

exports.password = (req, res) => {
  const pass = req.params.password;

  if (pw.hasOwnProperty(pass)) {
    const level = pw[pass];
    res.send(`${level}`);
    console.log(level)
  } else {
    res.send("NO!");
  }
};
