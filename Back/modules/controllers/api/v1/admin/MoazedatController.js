const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class MoazedatController extends Controller {

    registerMoazedat(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Moazedat({
            title: req.body.title,
            details: req.body.details,
            image: req.body.image,
            imageDescription: req.body.imageDescription,
            date: req.body.date,
            time:req.body.time
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

    updateMoazedat(req, res) {
        let listFields={};
        if(req.body.title){ listFields.title=req.body.title}
        if(req.body.details){ listFields.details=req.body.details}
        if(req.body.image){ listFields.image=req.body.image}
        if(req.body.imageDescription){ listFields.imageDescription=req.body.imageDescription}
        if(req.body.date){ listFields.date=req.body.date}
        if(req.body.time){ listFields.time=req.body.time}
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Moazedat.findByIdAndUpdate(req.params.id,listFields, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: ' با موفقیت آپدیت شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
  
 
    deleteMoazedat(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Moazedat.findByIdAndRemove(req.params.id, (err, Result) => {
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


    getMoazedat(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Moazedat.findById(req.params.id, (err, Result) => {
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

    getAllMoazedat(req, res) {
        this.model.Moazedat.find({}).exec((err, Result) => {
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
