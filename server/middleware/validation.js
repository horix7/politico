import Joi from 'joi';
    

export default {
    
    schemas:{   UserSchema:Joi.object().keys({
                            email: Joi.string().email(),
                            firstName: Joi.string().required(), 
                            lastName: Joi.string().required(),
                            address: Joi.string().required(),
                            phoneNumber: Joi.number().required(),
                            otherName: Joi.string().required(),
                            passportUrl: Joi.string().required(),
                            userName: Joi.string().required(),
                            password: Joi.string().min(5).required(),
                            userType: Joi.string().valid(['user','candidate']),
                            isAdmin: Joi.boolean()
                            }).options({abortEarly : false}),

                            UpdateUser:Joi.object().keys({
                                email: Joi.string().email(),
                                firstName: Joi.string(), 
                                lastName: Joi.string(),
                                address: Joi.string(),
                                phoneNumber: Joi.number(),
                                otherName: Joi.string(),
                                passportUrl: Joi.string(),
                                userName: Joi.string(),
                                password: Joi.string().min(5),
                                userType: Joi.string().valid(['user','candidate']),
                                isAdmin: Joi.boolean()
                                }).options({abortEarly : false}),
             
                        PartySchema:Joi.object().keys({
                            name:Joi.string().required(),
                            hqAddress: Joi.string().required(),
                            logoUrl: Joi.string().required(),
                            foundeOn: Joi.date(),
                            partInfo: Joi.string(),
                            partyAddress: Joi.string()
                        }).options({abortEarly : false}),


                        UpdateParty:Joi.object().keys({
                            partyname:Joi.string().required(),
                            hqAddress: Joi.string().required(),
                            logoUrl: Joi.string().required(),
                            foundeOn: Joi.date(),
                            partInfo: Joi.string(),
                            partyAddress: Joi.string()

                        }).options({abortEarly : false}),

                        OfficeSchema:Joi.object().keys({
                            name:Joi.string().required(),
                            type: Joi.string().required(),
                            officeInfo: Joi.string().required(),
                            status: Joi.string().valid(['open','closed']),
                            logoUrl: Joi.string(),
                            applyId: Joi.string(),
                            leader: Joi.number()
                            
                        }).options({abortEarly : false}),

                        updateOffice:Joi.object().keys({
                            name:Joi.string().required(),
                            type: Joi.string().required(),
                            officeInfo: Joi.string().required(),
                            status: Joi.string().valid(['open','closed']),
                            logoUrl: Joi.string()
                            
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
                            
                            body: Joi.string().required(),
                            office: Joi.number().required()

                        }).options({abortEarly : false})

                                   },

             inputsValids:(schema)=>{
                return (req,res,next)=>{
                Joi.validate(req.body,schema, (err, results) => {
                    if(err){
                        res.status(400).json({
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

