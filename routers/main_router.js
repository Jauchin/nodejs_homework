let express = require('express');
let router = express.Router();
let Shieh = require('./Shieh.js');
let Alice = require('./Alice.js');
let Bob = require('./Bob.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("111.png", options)
})
router.use('/Sheih', Shieh);
router.use('/Alice', Alice);
router.use('/Bob', Bob);

module.exports = router;