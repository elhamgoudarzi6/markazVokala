const Controller = require(`${config.path.controller}/Controller`);

module.exports = new class CategoryController extends Controller {

    registerCategory(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Category({
            title: req.body.title,

        }).save(err => {
            if (err) {
                throw err;
            }

            return res.json({
                data: 'دسته سطح یک با موفقیت ثبت  شد',
                success: true
            });
        });
    }


    updateCategory(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Category.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
        }, (err, Category) => {
            if (err) throw err;
            if (Category) {
                return res.json({
                    data: ' دسته سطح یک با موفقیت آپدیت شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
  
 

    deleteCategory(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Category.findByIdAndRemove(req.params.id, (err, Category) => {
            if (err) throw err;
            if (Category) {
                return res.json({
                    data: 'دسته سطح یک با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }



    getAllCategory(req, res) {
        this.model.Category.find()
            .populate({ path: 'SubCategory'})
            .exec((err, Category) => {
                if (err) throw err;
                if (Category) {
                    return res.json({
                        data: Category,
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
