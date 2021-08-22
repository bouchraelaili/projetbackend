const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SuperAdmin = require('../models/superAdmin.model');
const Order = require('../models/Order.model');
const Admin = require('../models/Admin.model');
const Seller = require('../models/Seller.model');
const { inputValidationSchema  } = require("./XssValidation");

//______________________get all SuperAdmin__________________________ 
const getAllSuperAdmins = (req, res) => {
        SuperAdmin.find()
        .then(superAdmin => {
              res.status(200).json(superAdmin);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
      };
//_______________________ Super Admin authentication________________________

const addSuperAdmin = (req, res) => {

  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };
       
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
            if (err) {
              res.json({error : err})    
            }
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const login = req.body.login;
        const password = hashPassword;
        const SuperadminPush = new SuperAdmin({
          firstName,
          lastName,
          email,
          login,
          password,  
        });
        SuperadminPush
          .save()
          .then(() => res.json("SupperAdmin authentication successfully"))
          .catch((err) => res.status(400).json("Error :" + err));
      });
      }
      
      //-------------------------login Super Admin-----------------------------
      
      const loginSuperAdmin = (req, res) => {
      
        let error = [];

        
        const { err } = inputValidationSchema.validate(req.body)
        if (err) {
      
                
      
                error.push(err.details[0].message);
                return res.json({
      
                        error : error
                }) 
      
        };

        let login=req.body.login;
        let password=req.body.password;
      
      SuperAdmin.findOne({login : login})
      .then(superadmin => {
      
      if(superadmin){
        bcrypt.compare(password, superadmin.password, function(err, result){
            if (err) {
                res.json({
                  error : err
                })
              }
           if(result){
              let token=jwt.sign({login :login},'tokenkey',(err,token) => {
                res.cookie("token", token)  
                res.json({
                    token : token
                })
              })
           }
           
        })
      }else{
        res.json({
            message : 'SuperAdmin not found'
        })
      }
      }).catch((err) => res.status(400).json("Error :" + err));
      }

 //-------------------------logout Super Admin and remove token-----------------------------   
     const logout = (req, res) => {
        const deconnect = res.clearCookie("token")
      
        res.json({
            message: 'User is Signout !!'
        })
      }
      


      
      
  


//______________________get all Seller_____________________ 
const getAllSeller = (req, res) => {
        Seller.find()
        .then(SellerInfos => {
              res.status(200).json(SellerInfos);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
    };
    

 //________________________updating Seller____________________
const updateSeller = (req, res) => {
        // Find Seller By ID and update it
        Seller.updateOne(
                         {_id: req.params.id},
                          {
                            status : req.body.status,
                            type : req.body.type
                          }
                        )
        .then(() => res.status(201).json("Seller updated successfully"))
        .catch((err) => res.status(400).json("Error :" + err));
      };
      // ______________________get seller by id__________________
const getSellerById = (req, res) => {
        Seller.findById(req.params.id)
            .then(Seller => {
              res.status(200).json(Seller);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Seller not found with id " + req.params.id,
                        error: err
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving Seller with id " + req.params.id,
                    error: err
                });
            });
      };
              
      //______________________Delete Seller _____________________ 
      const deleteSeller = (req, res) => {
        const {id} = req.params;
        Seller.findOneAndDelete({_id: id})
            .then(admin => {
                if(!admin) {
                  res.status(404).json({
                    message: "Does Not exist seller with id = " + id,
                    error: "404",
                  });
                }
                res.status(200).json({});
            }).catch(err => {
                return res.status(500).send({
                  message: "Error -> Can NOT delete a seller with id = " + id,
                  error: err.message
                });
            });
      };
      

       //------------------------- Validate Order ----------------------------- 
const validateOrder = (req, res) => {
    
    Order.findByIdAndUpdate(
                     {_id: req.params.id},
                      {
                        shipped : true
                      }
                    )
    .then(() => res.status(201).json("Order updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
  };
   //-------------------------get all orders-----------------------------  
  const getAllOrder = (req, res) => {
    Order.find()
    .then(OrderInfos => {
          res.status(200).json(OrderInfos);
        }).catch(error => {
          console.log(error);
          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
  };
        // ______________________get orders by id__________________
        const getOrderById = (req, res) => {
          Order.findById(req.params.id)
                    .then((order) => res.json(order))
                    .catch((err) => res.status(400).json("Error :" + err));
        };
        
   //___________________________delete Order ______________________
  const deleteOrder= (req, res) => {
    const {id} = req.params;
    Order.findOneAndDelete({_id: id})
        .then(Delivery => {
            if(!Delivery) {
              res.status(404).json({
                message: "Does Not exist a Order with id = ",
                error: "404",
              });
            }
            res.status(200).json({});
        }).catch(err => {
            return res.status(500).send({
              message: "Error -> Can NOT delete a Order with id = ",
              error: err.message
            });
        });
  };     
   //-------------------------logout Admin and remove token-----------------------------   
   const logout = (req, res) => {
    const deconnect = res.clearCookie("token")
  
    res.json({
        message: 'User is Signout !!'
    })
  } 


module.exports={
  getAllSuperAdmins,addSuperAdmin,loginSuperAdmin,logout,validateOrder,getAllOrder,getOrderById,deleteOrder,getAllSeller,updateSeller,getSellerById,deleteSeller
};