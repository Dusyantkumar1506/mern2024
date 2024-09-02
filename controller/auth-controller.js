// home logic
const home = async (req, res) => {
  try {
    res.status(200).send("welcome to dusyant server");
  } catch (error) {
    console.log(error);
  }
};

// register logic
const register = async (req, res) => {
  try {
    res.status(200).send("welcome to register server");
  } catch (error) {
    res.status(400).send("page is not find");
  }
};

module.exports = { home, register };
