const queryHandle = (req, res) => {
  const id = req.query.id;
  const number = req.query.number;
  const proccess = req.body.filter(
    (e) => e.BodyId == id && e.BodyIdNumber == number
  );
  if (proccess.length > 0) {
    proccess.map((e) => {
      // res.
      res.status(200).json({ name: e.name });
    });
  } else {
    res.status(404).json({ message: "not found" });
  }
};
export default queryHandle;
