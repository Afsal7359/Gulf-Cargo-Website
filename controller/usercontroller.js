const Service = require('../model/Service')
const Blog = require('../model/Blog')
module.exports={
    RenderHomePage: async(req,res)=>{
        try {
            const ServiceData = await Service.find().sort({_id:-1}).limit(3)
            res.render('user/home',{ServiceData})
        } catch (error) {
            console.log(error);
        }
    },
    RenderAboutPage: async(req,res)=>{
        try {
            const ServiceData = await Service.find().sort({_id:-1}).limit(3)
            res.render('user/about',{ServiceData})
        } catch (error) {
            console.log(error);
        }
    },
    RenderServicePage: async(req,res)=>{
        try {
            const ServiceData = await Service.find()
            res.render('user/service',{ServiceData})
        } catch (error) {
            console.log(error);
        }
    },
    RenderBlogPage: async(req,res)=>{
        try {
            const BlogData = await Blog.find()
            res.render('user/blog',{BlogData})
        } catch (error) {
            console.log(error);
        }
    },
    RenderContactPage: async(req,res)=>{
        try {
            res.render('user/contact')
        } catch (error) {
            console.log(error);
        }
    }
}