const Activity = require('../models/Activity.model');

// -------------get Activity by category -----------

const getproductByCategory = async(req,res)=>{

    try {

        const category = req.params.category;
   

   

      
        

        const Activity = await Product.find({ category: category });

        if (!Activity) {

            return res.json({
                error : "You have no product yet "
            }) 

                
        }

        res.send(products);


        
    } catch (err) {
        res.json(err)
        
    }

    

}
module.exports={
    getproductByCategory
  };