const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class SliderController extends Controller {
    getAllSlider(req, res) {
        this.model.Slider.find({})
        .populate('Category')
        .sort({ imageUrl: -1 }).exec((err, Result) => {
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

    getSlider(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Slider.findById(req.params.id).populate('Category').exec((err, Result) => {
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

    registerSlider(req, res) {
        req.checkBody('imageurl', ' تصویر نمیتواند خالی بماند').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        let newSlider = new this.model.Slider({
            categoryID:req.body.categoryID,
            imageDescription:req.body.imageDescription,
            imageurl: req.body.imageurl,
            gallery:req.body.gallery
        })
        newSlider.save(err => {
            if (err)  return res.json({
                data: 'خطا',
                success: false
            });
            return res.json({
                data: 'اسلایدر با موفقیت ثبت شد',
                success: true
            });
        })
    }


    
    updateSlider(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Slider.findByIdAndUpdate(req.params.id, {
            categoryID:req.body.categoryID,
            imageDescription:req.body.imageDescription,
            imageurl: req.body.imageurl,
            gallery:req.body.gallery
        }, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: ' اسلاید با موفقیت آپدیت شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }


    deleteSlider(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Slider.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'اسلاید با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
}
