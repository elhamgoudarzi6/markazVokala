const express = require('express');
const router = express.Router();
const adminRouter = express.Router();

// middlewares
const apiAuthAdminUser = require('./middleware/apiAuthAdmin');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');
const { uploadFiles } = require('./middleware/UploadMiddleware');

//user Controllers
const { api: ControllerApi } = config.path.controllers;
//admin controller
const AdminAuthController = require(`${ControllerApi}/v1/admin/AuthController`);
const AdminUploadController = require(`${ControllerApi}/v1/admin/UploadController`);
const SliderController = require(`${ControllerApi}/v1/admin/SliderController`);
const NewsController = require(`${ControllerApi}/v1/admin/NewsController`);
const ArticleController = require(`${ControllerApi}/v1/admin/ArticleController`);
const ContactUsController = require(`${ControllerApi}/v1/admin/ContactUsController`);
const HomePageController = require(`${ControllerApi}/v1/admin/HomePageController`);
const NotificationController = require(`${ControllerApi}/v1/admin/NotificationController`);
const OccasionController = require(`${ControllerApi}/v1/admin/OccasionController`);
const SubscriptionController = require(`${ControllerApi}/v1/admin/SubscriptionController`);
const VideoController = require(`${ControllerApi}/v1/admin/VideoController`);
const CommissionController = require(`${ControllerApi}/v1/admin/CommissionController`);
const MoazedatController = require(`${ControllerApi}/v1/admin/MoazedatController`);
const CategoryController = require(`${ControllerApi}/v1/admin/CategoryController`);

//upload
adminRouter.post('/upload', uploadImage.single('file'), AdminUploadController.uploadImage.bind(AdminUploadController));
//multi file
adminRouter.post('/multiUpload',uploadFiles,AdminUploadController.uploadFiles.bind(AdminUploadController));

//delete file uploaded in server
adminRouter.post('/deleteFile',AdminUploadController.deleteFile.bind(AdminUploadController));

//home page 
adminRouter.get('/getAllFaq',HomePageController.getAllFaq.bind(HomePageController));
adminRouter.delete('/deleteFaq/:id',HomePageController.deleteFaq.bind(HomePageController));
adminRouter.post('/registerFaq',HomePageController.registerFaq.bind(HomePageController));

adminRouter.get('/getAllMember',HomePageController.getAllMember.bind(HomePageController));
adminRouter.delete('/deleteMember/:id',HomePageController.deleteMember.bind(HomePageController));
adminRouter.post('/registerMember',HomePageController.registerMember.bind(HomePageController));

adminRouter.get('/getAllEmployee',HomePageController.getAllEmployee.bind(HomePageController));
adminRouter.delete('/deleteEmployee/:id',HomePageController.deleteEmployee.bind(HomePageController));
adminRouter.post('/registerEmployee',HomePageController.registerEmployee.bind(HomePageController));

//contact us
adminRouter.get('/getAllContactUs',ContactUsController.getAllContactUs.bind(ContactUsController));
adminRouter.delete('/deleteContactUs/:id',ContactUsController.deleteContactUs.bind(ContactUsController));
adminRouter.get('/getContactUs/:id',ContactUsController.getContactUs.bind(ContactUsController));

//auth admin
adminRouter.post('/loginAdmin', AdminAuthController.loginAdmin.bind(AdminAuthController));
adminRouter.post('/registerAdmin', AdminAuthController.registerAdmin.bind(AdminAuthController));
adminRouter.put('/updateAdmin/:id', AdminAuthController.updateAdmin.bind(AdminAuthController));
adminRouter.delete('/deleteAdmin/:id', AdminAuthController.deleteAdmin.bind(AdminAuthController));
adminRouter.get('/getAllAdmin', AdminAuthController.getAllAdmin.bind(AdminAuthController));
adminRouter.put('/changePassword/:id', AdminAuthController.changePassword.bind(AdminAuthController));
adminRouter.put('/changeUsername/:id', AdminAuthController.changeUsername.bind(AdminAuthController));
adminRouter.put('/resetPassword', AdminAuthController.resetPassword.bind(AdminAuthController));

//news
adminRouter.post('/registerNews', NewsController.registerNews.bind(NewsController));
adminRouter.get('/getNews', NewsController.getNews.bind(NewsController));
adminRouter.put('/updateNews/:id', NewsController.updateNews.bind(NewsController));
adminRouter.delete('/deleteNews/:id', NewsController.deleteNews.bind(NewsController));
adminRouter.get('/getAllNews', NewsController.getAllNews.bind(NewsController));
//Moazedat
adminRouter.post('/registerMoazedat', MoazedatController.registerMoazedat.bind(MoazedatController));
adminRouter.get('/getMoazedat', MoazedatController.getMoazedat.bind(MoazedatController));
adminRouter.put('/updateMoazedat/:id', MoazedatController.updateMoazedat.bind(MoazedatController));
adminRouter.delete('/deleteMoazedat/:id', MoazedatController.deleteMoazedat.bind(MoazedatController));
adminRouter.get('/getAllMoazedat', MoazedatController.getAllMoazedat.bind(MoazedatController));
//Commission
adminRouter.post('/registerCommission', CommissionController.registerCommission.bind(CommissionController));
adminRouter.get('/getCommission', CommissionController.getCommission.bind(CommissionController));
adminRouter.put('/updateCommission/:id', CommissionController.updateCommission.bind(CommissionController));
adminRouter.delete('/deleteCommission/:id', CommissionController.deleteCommission.bind(CommissionController));
adminRouter.get('/getAllCommission', CommissionController.getAllCommission.bind(CommissionController));
//Article
adminRouter.post('/registerArticle', ArticleController.registerArticle.bind(ArticleController));
adminRouter.get('/getArticle', ArticleController.getArticle.bind(ArticleController));
adminRouter.put('/updateArticle/:id', ArticleController.updateArticle.bind(ArticleController));
adminRouter.delete('/deleteArticle/:id', ArticleController.deleteArticle.bind(ArticleController));
adminRouter.get('/getAllArticle', ArticleController.getAllArticle.bind(ArticleController));

//Notification
adminRouter.post('/registerNotification', NotificationController.registerNotification.bind(NotificationController));
adminRouter.get('/getNotification', NotificationController.getNotification.bind(NotificationController));
adminRouter.put('/updateNotification/:id', NotificationController.updateNotification.bind(NotificationController));
adminRouter.delete('/deleteNotification/:id', NotificationController.deleteNotification.bind(NotificationController));
adminRouter.get('/getAllNotification', NotificationController.getAllNotification.bind(NotificationController));

//Occasion
adminRouter.post('/registerOccasion', OccasionController.registerOccasion.bind(OccasionController));
adminRouter.get('/getOccasion/:id', OccasionController.getOccasion.bind(OccasionController));
adminRouter.put('/updateOccasion/:id', OccasionController.updateOccasion.bind(OccasionController));
adminRouter.delete('/deleteOccasion/:id', OccasionController.deleteOccasion.bind(OccasionController));
adminRouter.get('/getAllOccasion', OccasionController.getAllOccasion.bind(OccasionController));
//video
adminRouter.post('/registerVideo', VideoController.registerVideo.bind(VideoController));
adminRouter.get('/getVideo/:id', VideoController.getVideo.bind(VideoController));
adminRouter.delete('/deleteVideo/:id', VideoController.deleteVideo.bind(VideoController));
adminRouter.get('/getAllVideo', VideoController.getAllVideo.bind(VideoController));

//slider
adminRouter.post('/registerSlider', SliderController.registerSlider.bind(SliderController));
adminRouter.get('/getAllSlider', SliderController.getAllSlider.bind(SliderController));
adminRouter.get('/getSlider/:id', SliderController.getSlider.bind(SliderController));
adminRouter.put('/updateSlider/:id', SliderController.updateSlider.bind(SliderController));
adminRouter.delete('/deleteSlider/:id', SliderController.deleteSlider.bind(SliderController));
//category
adminRouter.post('/registerCategory', CategoryController.registerCategory.bind(CategoryController));
adminRouter.get('/getAllCategory', CategoryController.getAllCategory.bind(CategoryController));
adminRouter.put('/updateCategory/:id', CategoryController.updateCategory.bind(CategoryController));
adminRouter.delete('/deleteCategory/:id', CategoryController.deleteCategory.bind(CategoryController));

//subscription
adminRouter.get('/getSmsSubscription', SubscriptionController.getSmsSubscription.bind(SubscriptionController));
adminRouter.delete('/deleteSmsSubscription/:id', SubscriptionController.deleteSmsSubscription.bind(SubscriptionController));

router.use('', adminRouter);
module.exports = router;
