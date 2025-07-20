const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<p>Schedule Page</p>");
})

router.use(express.json());
router.post("/", (req, res) => {
    const { id, name, start, end } = req.body;
    //TODO: database logic
    res.status(201).send({message: "Task scheduled successfully", task: { id, name, start, end } });
});



module.exports = router;