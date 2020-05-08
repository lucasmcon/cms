const Database = require("../models/index");

class PlansService {

    constructor(){
        this.Plan = Database["Plan"];
    }

    async store(plans){
        
        var errors = [];

        plans.import == plans.import != undefined ? true : false;

        try{
            await this.Plan.create(plans);
            return true;
        }catch(err){
            
            errors.push("Não foi possível salvar o plano");
            return errors;
        }
    }
}

module.exports = new PlansService();