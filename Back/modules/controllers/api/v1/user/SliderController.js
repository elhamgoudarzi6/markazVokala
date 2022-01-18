const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class SliderController extends Controller {
    getAllSlider(req, res) {
        this.model.Slider.find({})
        .populate({path: 'Category'})
        .sort({ link: -1 }).exec((err, slider) => {
            if (err) throw err;
            if (slider) {
                return res.json({
                    data: slider,
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
    

}