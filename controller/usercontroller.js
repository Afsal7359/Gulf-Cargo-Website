const Service = require('../model/Service')
const Blog = require('../model/Blog')
const axios = require('axios');
module.exports={
    RenderHomePage: async(req,res)=>{
        try {
            const ServiceData = await Service.find().sort({_id:-1}).limit(3)
            let message
            res.render('user/home',{ServiceData,message})
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
    },
     TrackingPost : async (req, res) => {
        try {
            const trackingid = req.body.trackingid;
            console.log(trackingid, "id");
    
            const response = await axios.post(`https://erp.gulfcargoksa.com/api/tracking`, { booking_no: trackingid }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            const responseData = response.data;
            const data = responseData.data;
            const adress = responseData.adress;
            console.log(data, "dddddddddda");
            
            if (data) {
                res.render('user/tracking', { data: JSON.stringify(data), adress: JSON.stringify(adress) });
            } else {
                const message = "Tracking Id Not Found";
                const ServiceData = await Service.find().sort({ _id: -1 }).limit(3);
                res.render('user/home', { ServiceData, message });
            }
        } catch (error) {
            console.log(error.message);
            // Handle error appropriately, e.g., render an error page or return an error response
            res.status(500).send("An error occurred while fetching tracking data.");
        }
    }
}