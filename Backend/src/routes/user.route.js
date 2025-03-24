const express = require("express");

const router = express.Router();
router.post("/users", async (req, res) => {
    const {  email , name , password } = req.body;
    const user = await prisma.user.create({
        data: {
        email,
        name,
        password,
        },
    });
    res.json(user);
});

module.exports = router;