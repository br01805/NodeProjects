const express = require('express');

const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message:'Handling GET requests to /Products and hook works succesfully'}
    );

});

router.post('/',(req,res,next) => {
    res.status(200).json({
        message:'Handling POST requests to /Products'}
    );

});

router.get('/:productId',(req,res,next) => {
   const id = req.params.productId;
   if(id === 'special'){
       res.status(200).json({
           message: 'you discovered the special parameter',
           id: id
       });
    }
       else{
       res.status(200).json({
         message: 'you passed an ID'
       })
       }
   });

   router.patch('/:productId',(req,res,next) => {
     res.status(200).json({
         message: 'updated product!'
     });
    });

    router.delete('/:productId',(req,res,next) => {
        res.status(200).json({
            message: 'deleted product!'
        });
       });
module.exports = router;
