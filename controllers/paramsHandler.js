const paramsHandle = (req, res) => {
  const proccess = req.body.filter(
    (e) => e.BodyId == req.headers.id && e.BodyIdNumber == req.params.number
  );
  if (proccess.length > 0) {
    proccess.map((e)=>res.json(e));
  } else {
    res.json({ message: "not found" });
  }
};

export default paramsHandle;
