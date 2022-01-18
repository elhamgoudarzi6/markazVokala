const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class NotificationController extends Controller {

    registerNotification(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Notification({
            title: req.body.title,
            brief: req.body.brief,
            details: req.body.details,
            keywords: req.body.keywords,
            image: req.body.image,
            imageDescription: req.body.imageDescription,
            date: req.body.date,
            metaDescription: req.body.metaDescription,
            tags:req.body.tags
        }).save(err => {
            if (err) {
                throw err;
            }
            return res.json({
                data: 'اطلاعیه با موفقیت ثبت  شد',
                success: true
            });
        });
    }

    updateNotification(req, res) {
        let listFields={};
        if(req.body.title){ listFields.title=req.body.title}
        if(req.body.brief){ listFields.brief=req.body.brief}
        if(req.body.details){ listFields.details=req.body.details}
        if(req.body.keywords){ listFields.keywords=req.body.keywords}
        if(req.body.image){ listFields.image=req.body.image}
        if(req.body.imageDescription){ listFields.imageDescription=req.body.imageDescription}
        if(req.body.date){ listFields.date=req.body.date}
        if(req.body.metaDescription){ listFields.metaDescription=req.body.metaDescription}
        if(req.body.tags){ listFields.tags=req.body.tags}
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Notification.findByIdAndUpdate(req.params.id,listFields, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'اطلاعیه با موفقیت آپدیت شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
  
 
    deleteNotification(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Notification.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'اطلاعیه با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }


    getNotification(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Notification.findById(req.params.id, (err, Result) => {
            if (Result) {
                return res.json({
                    data: Result,
                    success: true
                })
            }
            res.json({
                data: 'یافت نشد',
                success: false
            })
        })
    }

    getAllNotification(req, res) {
        this.model.Notification.find({}).exec((err, Result) => {
                if (err) throw err;
                if (Result) {
                    return res.json({
                        data: Result,
                        success: true
                    });
                }
                res.json({
                    data: 'اطلاعاتی وجود ندارد',
                    success: false
                })
            });
    }


    
}
