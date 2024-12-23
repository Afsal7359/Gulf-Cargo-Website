const Service = require('../model/Service')
const Blog = require('../model/Blog')
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
    RenderPrivacyPolicy: async(req,res)=>{
        try {
            res.render('user/Privacy')
        } catch (error) {
            console.log(error);
        }
    },
    TrackingPost : async (req, res) => {
        try {
            const trackingid = req.body.trackingid;
            console.log(trackingid, "id");
            const response = await fetch('https://gulfcargoksa.cyenosure.co.in/api/tracking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ booking_no: trackingid })
            });
            console.log(response,'reeeee');
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const responseData = await response.json();
            const data = responseData.data;
            const adress = responseData.adress;
            console.log(data , "dddddddddda");
    
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