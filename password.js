const pw = ["127.0.0.1", "ABDF"];

exports.password = (req, res) => {
  const pass = req.params.password;

  if (pw.includes(pass)) {
    res.send("khamdaeng");
  } else {
    res.send("wrong password");
  }
};