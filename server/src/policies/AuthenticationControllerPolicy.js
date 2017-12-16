const Joi=require('joi')

module.exports={
    register (req, res, next){
        const schema={
            name:Joi.string(),
            email:Joi.string().email()
        }
        const{error,value}=Joi.validate(req.body,schema);
        if(error){
             switch(error.details[0].context.key){
                 case name:
                 res.status(400).send({
                     error:"You must provide name!"
                 })
                 break;
                 case email:
                 res.status(400).send({
                    error:"You must provide valid email!"
                })
                 break;
             }

        }else{
            next;
        }
     
    }
}