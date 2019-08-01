const express = require('express');
const router = express.Router();
const userRepo = require('../modules/userRepo');



router.get('/user', async (req, res) => {
   
    // let orderBy = parseInt(req.query.orderBy);
    // let pageSize = parseInt(req.query.pageSize);
        try {
            const result = await userRepo.getUserProfile();
            res.render('user', { "userList" : result , "tableTitle" : "users"});
        
        } catch(e) {
            res.status(500).json({ "status_code": 500, "status_massage": "internal server error", "error": e});
        }

});

module.exports = router;