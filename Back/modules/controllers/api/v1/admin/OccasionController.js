const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class OccasionController extends Controller {

    registerOccasion(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Occasion({
            title: req.body.title,
            brief: req.body.brief,
            image: req.body.image,
            date: req.body.date,
        }).save(err => {
            if (err) {
                throw err;
            }
            return res.json({
                data: ' با موفقیت ثبت  شد',
                success: true
            });
        });
    }

    updateOccasion(req, res) {
        let listFields={};
        if(req.body.title){ listFields.title=req.body.title}
        if(req.body.brief){ listFields.brief=req.body.brief}
        if(req.body.image){ listFields.image=req.body.image}
        if(req.body.date){ listFields.date=req.body.date}
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Occasion.findByIdAndUpdate(req.params.id,listFields, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'با موفقیت آپدیت شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
  
 
    deleteOccasion(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Occasion.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: ' با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }


    getOccasion(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Occasion.findById(req.params.id, (err, Result) => {
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

    getAllOccasion(req, res) {
        this.model.Occasion.find({}).exec((err, Result) => {
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
