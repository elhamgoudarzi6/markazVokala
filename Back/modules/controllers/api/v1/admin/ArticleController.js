const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class ArticleController extends Controller {

    registerArticle(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Article({
            title: req.body.title,
            author: req.body.author,
            details: req.body.details,
            image: req.body.image,
            imageDescription: req.body.imageDescription,
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

    updateArticle(req, res) {
        let listFields={};
        if(req.body.title){ listFields.title=req.body.title}
        if(req.body.author){ listFields.author=req.body.author}
        if(req.body.details){ listFields.details=req.body.details}
        if(req.body.image){ listFields.image=req.body.image}
        if(req.body.imageDescription){ listFields.imageDescription=req.body.imageDescription}
        if(req.body.date){ listFields.date=req.body.date}
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Article.findByIdAndUpdate(req.params.id,listFields, (err, Result) => {
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
  
 
    deleteArticle(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Article.findByIdAndRemove(req.params.id, (err, Result) => {
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


    getArticle(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Article.findById(req.params.id, (err, Result) => {
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

    getAllArticle(req, res) {
        this.model.Article.find({}).sort({date:-1}).exec((err, Result) => {
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
