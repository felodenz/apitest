const paramsHandle = (req, res) => {
  const proccess = req.body.filter(
    (object) => object.BodyId == req.headers.id && object.BodyIdNumber == req.params.number
  );
  if (proccess.length > 0) {
    proccess.map((paired)=>res.json(paired));
  } else {
    res.json({ message: "not found" });
  }
};

export default paramsHandle;
