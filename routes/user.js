var express = require('express');
const usercontroller = require('../controller/usercontroller');
var router = express.Router();

/* GET users listing. */
router.get('/',usercontroller.RenderHomePage )
router.get('/about',usercontroller.RenderAboutPage )
router.get('/service',usercontroller.RenderServicePage )
router.get('/blog',usercontroller.RenderBlogPage )
router.get('/contact',usercontroller.RenderContactPage )
router.post('/tracking',usercontroller.TrackingPost);
router.get('/PrivacyPolicy',usercontroller.RenderPrivacyPolicy);

module.exports = router;
