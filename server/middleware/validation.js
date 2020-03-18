import Joi from 'joi';
    

export default {
    
    schemas:{   UserSchema:Joi.object().keys({
                            email: Joi.string().email().required(),
                            firstname: Joi.string().trim().required(), 
                            secondname: Joi.string().trim().required(),
                            address: Joi.string().trim().required(),
                            phone: Joi.number(),
                            nationalid: Joi.number(),
                            othername: Joi.string().trim(),
                            passporturl: Joi.string().trim(),
                            password: Joi.string().min(5).required(),
                            usertype: Joi.string().valid(['user','candidate']),
                            isAdmin: Joi.boolean()
                            }).options({abortEarly : false}),

                            UpdateUser:Joi.object().keys({
                                email: Joi.string().email().trim(),
                                firstName: Joi.string().trim(), 
                                lastName: Joi.string().trim(),
                                address: Joi.string().trim(),
                                phoneNumber: Joi.number(),
                                otherName: Joi.string().trim(),
                                passporturl: Joi.string().trim(),
                                userName: Joi.string().trim(),
                                password: Joi.string().trim().min(5),
                                userType: Joi.string().trim().valid(['user','candidate']),
                                isAdmin: Joi.boolean()
                                }).options({abortEarly : false}),
             
                        PartySchema:Joi.object().keys({
                            partyname:Joi.string().trim().required(),
                            hqaddress: Joi.string().trim().required(),
                            logourl: Joi.string().trim().required(),
                            foundeon: Joi.date(),
                            partinfo: Joi.string().trim(),
                            partyaddress: Joi.string().trim()
                        }).options({abortEarly : false}),


                        UpdateParty:Joi.object().keys({
                            partyname:Joi.string().trim(),
                            hqaddress: Joi.string().trim(),
                            logourl: Joi.string().trim(),
                            foundeon: Joi.date(),
                            partinfo: Joi.string().trim(),
                            partyaddress: Joi.string().trim()

                        }).options({abortEarly : false}),

                        OfficeSchema:Joi.object().keys({
                            officename:Joi.string().trim().required(),
                            officeinfo: Joi.string().trim().required(),
                            status: Joi.string().trim().valid(['open','closed']),
                            logourl: Joi.string().trim(),
                            applyid: Joi.string().trim(),
                            leader: Joi.number(),
                            hqaddress:Joi.string().trim(),
                            type: Joi.string().trim().valid(['federal','legislative', 'state','local government']),
                        }).options({abortEarly : false}),

                        updateOffice:Joi.object().keys({
                            officename:Joi.string().trim().required(),
                            type: Joi.string().trim(),
                            officeinfo: Joi.string().trim().required(),
                            status: Joi.string().trim().valid(['open','closed']),
                            logourl: Joi.string().trim(),
                            hqaddress:Joi.string().trim()
                            
                        }).options({abortEarly : false}),
                        
                        candidateSchema:Joi.object().keys({
                            candidate:Joi.number().required(),
                            offices: Joi.number().required(),
                            party: Joi.number().required(),
                            
                        }).options({abortEarly : false}),

                        voteSchema:Joi.object().keys({
                            candidate: Joi.number().required()
                        }).options({abortEarly : false}),
                        
                        
                        petitionSchema:Joi.object().keys({
                            
                            body: Joi.string().trim().required(),
                            office: Joi.number().required()

                        }).options({abortEarly : false})

                                   },

             inputsValids:(schema)=>{
                return (req,res,next)=>{
                Joi.validate(req.body,schema, (err, results) => {
                    if(err){
                        res.status(400).json({
                            "status": 400,
                            "message": `solve this  ${err}`
                        })
                    }
                    else{
                          next();
                    }
                });
            }
         }
}

