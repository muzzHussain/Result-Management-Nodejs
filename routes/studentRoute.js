const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send(200);
})

router.get('/search', (req, res) => {
    res.status(200).send("Enter roll and dob to search result");
});




module.exports = router;