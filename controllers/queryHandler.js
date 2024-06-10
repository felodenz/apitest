const queryHandle = (req, res) => {
  const {id,number} = req.query;
  const proccess = req.body.filter(
    (bodyObject) => bodyObject.BodyId == id && bodyObject.BodyIdNumber == number
  );
  if (proccess.length > 0) {
    proccess.map((paired) => {
      // res.
      res.status(200).json({ name: paired.name });
    });
  } else {
    res.status(404).json({ message: "not found" });
  }
};
export default queryHandle;
