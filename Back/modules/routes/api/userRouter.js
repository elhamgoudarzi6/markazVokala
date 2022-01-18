const express = require('express');
const router = express.Router();
const adminRouter = express.Router();

// middlewares
const apiAuthAdminUser = require('./middleware/apiAuthAdmin');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');

//user Controllers
const { api: ControllerApi } = config.path.controllers;
const NewsController = require(`${ControllerApi}/v1/user/NewsController`);
const ContactUsController = require(`${ControllerApi}/v1/user/ContactUsController`);
const HomePageController = require(`${ControllerApi}/v1/user/HomePageController`);
const SliderController = require(`${ControllerApi}/v1/user/SliderController`);
const NotificationController = require(`${ControllerApi}/v1/user/NotificationController`);
const OccasionController = require(`${ControllerApi}/v1/user/OccasionController`);
const SubscriptionController = require(`${ControllerApi}/v1/user/SubscriptionController`);
const ArticleController = require(`${ControllerApi}/v1/user/ArticleController`);

router.get('/getAllSlider', SliderController.getAllSlider.bind(SliderController));
router.get('/getSlider/:id', SliderController.getSlider.bind(SliderController));

//home page 
router.get('/getAllFaq', HomePageController.getAllFaq.bind(HomePageController));
router.get('/getAllVideo', HomePageController.getAllVideo.bind(HomePageController));
router.get('/getAllCommission', HomePageController.getAllCommission.bind(HomePageController));
router.get('/getAllMoazedat', HomePageController.getAllMoazedat.bind(HomePageController));
router.get('/getAllMember', HomePageController.getAllMember.bind(HomePageController));
router.get('/getAllEmployee', HomePageController.getAllEmployee.bind(HomePageController));

//contact us
router.post('/registerContactUs', ContactUsController.registerContactUs.bind(ContactUsController));

//news 
router.get('/getNews/:id', NewsController.getNews.bind(NewsController));
router.get('/getAllNews', NewsController.getAllNews.bind(NewsController));
router.get('/getLatestNews', NewsController.getLatestNews.bind(NewsController));
router.get('/getAllTagNews', NewsController.getAllTagNews.bind(NewsController));

//news 
router.get('/getArticle/:id', ArticleController.getArticle.bind(ArticleController));
router.get('/getAllArticle', ArticleController.getAllArticle.bind(ArticleController));
router.get('/getLatestArticle', ArticleController.getLatestArticle.bind(ArticleController));

//notification
router.get('/getNotification/:id', NotificationController.getNotification.bind(NotificationController));
router.get('/getAllNotification', NotificationController.getAllNotification.bind(NotificationController));
router.get('/getLatestNotification', NotificationController.getLatestNotification.bind(NotificationController));
router.get('/getAllTagNotification', NotificationController.getAllTagNotification.bind(NotificationController));
//notification
router.get('/getOccasion/:id', OccasionController.getOccasion.bind(OccasionController));
router.get('/getAllOccasion', OccasionController.getAllOccasion.bind(OccasionController));
router.get('/getLatestOccasion', OccasionController.getLatestOccasion.bind(OccasionController));
router.get('/getAllTagOccasion', OccasionController.getAllTagOccasion.bind(OccasionController));
//subscription
router.post('/addSmsSubscription', SubscriptionController.addSmsSubscription.bind(SubscriptionController));

router.use('', router);
module.exports = router;
