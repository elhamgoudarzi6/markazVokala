// Model
const Admin= require(`${config.path.model}/admin`);
const Slider = require(`${config.path.model}/slider`);
const SmsSubscription=require(`${config.path.model}/smsSubscription`);
const News=require(`${config.path.model}/news`);
const ContactUs=require(`${config.path.model}/contactUs`);
const Faq=require(`${config.path.model}/faq`);
const Notification=require(`${config.path.model}/notification`);
const Occasion=require(`${config.path.model}/occasion`);
const Video=require(`${config.path.model}/video`);
const Article =require(`${config.path.model}/article`);
const Moazedat =require(`${config.path.model}/moazedat`);
const Commission =require(`${config.path.model}/commission`);
const Category = require(`${config.path.model}/category`);
const Member = require(`${config.path.model}/member`);
const Employee = require(`${config.path.model}/employee`);

module.exports = class Controller {
    constructor() {
        this.model = { Admin,Slider,SmsSubscription,News,ContactUs,Faq,Notification,Occasion,Video,Article,
        Moazedat,Commission,Category,Member,Employee}
    }
    showValidationErrors(req, res, callback) {
        let errors = req.validationErrors();
        if (errors) {
            res.json({
                message: errors.map(error => {
                    return {
                        'field': error.param,
                        'message': error.msg
                    }
                }),
                success: false
            });
            return true;
        }
        return false
    }

    escapeAndTrim(req, items) {
        items.split(' ').forEach(item => {
            req.sanitize(item).escape();
            req.sanitize(item).trim();
        });
    }
}
