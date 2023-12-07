const { Router } = require('express');
const router = Router();

router.get('/login', (req, res) => {
    res.status(200).send("Enter pwd to login as a teacher");
});


module.exports = router;