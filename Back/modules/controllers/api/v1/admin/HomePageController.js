const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class HomePageController extends Controller {
    getAllFaq(req, res) {
        this.model.Faq.find({}).exec((err, Result) => {
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

    registerFaq(req, res) {
        req.checkBody('question', '  فیلد سوال نمیتواند خالی بماند').notEmpty();
        req.checkBody('reply', '  فیلد جواب نمیتواند خالی بماند').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
        let newFaq = new this.model.Faq({
            question:req.body.question,
            reply:req.body.reply,
        })
        newFaq.save(err => {
            if (err)  return res.json({
                data: 'خطا',
                success: false
            });
            return res.json({
                data: ' با موفقیت ثبت شد',
                success: true
            });
        })
    }


    deleteFaq(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Faq.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
    
    
    
    
    //member
    
    getAllMember(req, res) {
        this.model.Member.find({}).sort({ level: 1 }).exec((err, Result) => {
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

    registerMember(req, res) {
        if (this.showValidationErrors(req, res))
            return;
        let newMember = new this.model.Member({
            fullName:req.body.fullName,
            role:req.body.role,
            image:req.body.image,
            level:req.body.level,
        })
        newMember.save(err => {
            if (err)  return res.json({
                data: 'خطا',
                success: false
            });
            return res.json({
                data: ' با موفقیت ثبت شد',
                success: true
            });
        })
    }


    deleteMember(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Member.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین اطلاعاتی وجود ندارد',
                success: false
            });
        });
    }
    
    
    
    
       //Employee
    
        getAllEmployee(req, res) {
        this.model.Employee.find({}).exec((err, Result) => {
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

    registerEmployee(req, res) {
        if (this.showValidationErrors(req, res))
            return;
        let newMember = new this.model.Employee({
            fullName:req.body.fullName,
            role:req.body.role,
            image:req.body.image,
        })
        newMember.save(err => {
            if (err)  return res.json({
                data: 'خطا',
                success: false
            });
            return res.json({
                data: ' با موفقیت ثبت شد',
                success: true
            });
        })
    }


    deleteEmployee(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Employee.findByIdAndRemove(req.params.id, (err, Result) => {
            if (err) throw err;
            if (Result) {
                return res.json({
                    data: 'با موفقیت حذف شد',
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
