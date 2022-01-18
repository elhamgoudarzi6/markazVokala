const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class CommissionController extends Controller {
    registerCommission(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Commission({
            title: req.body.title,
            details: req.body.details,
            image: req.body.image,
        }).save(err => {
            if (err) {
                throw err;
            }
            return res.json({
                data: 'خبر با موفقیت ثبت  شد',
                success: true
            });
        });
    }

    updateCommission(req, res) {
        let listFields={};
        if(req.body.title){ listFields.title=req.body.title}
         if(req.body.image){ listFields.image=req.body.image}
        if(req.body.details){ listFields.details=req.body.details}
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Commission.findByIdAndUpdate(req.params.id,listFields, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'خبر با موفقیت آپدیت شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
  
 
    deleteCommission(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Commission.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'خبر با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }


    getCommission(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Commission.findById(req.params.id, (err, Result) => {
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

    getAllCommission(req, res) {
        this.model.Commission.find({}).exec((err, Result) => {
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
