const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class SubscriptionController extends Controller {
    addSmsSubscription(req, res) {
        req.checkBody('mobile', 'وارد کردن فیلد موبایل الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        this.model.SmsSubscription.findOne({mobile: req.body.mobile}, (err, result) => {
            if (err)  return res.json({
                data: err,
                success: false
            });
            if (result == null) {
                this.model.SmsSubscription({
                    mobile: req.body.mobile,
                }).save(err => {
                    if (err) {
                        throw err;
                    }
                    return res.json({
                        data: 'شماره با موفقیت ثبت  شد',
                        success: true
                    });
                })
            }
            else
                return res.json({
                    data: ' این شماره همراه قبلاً ثبت  شده است',
                    success: false
                });
    })
    }
}
