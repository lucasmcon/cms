const Database = require("../models/index");

class PlansService {

    constructor(){
        this.Plan = Database["Plan"];
    }

    async store(plans){
        
        var errors = {};

        plans.import == plans.import != undefined ? true : false;

        var isValid = this.validate(plans, errors);

        if(isValid){
            try{
                await this.Plan.create(plans);
                return true;
            }catch(err){
                
                errors.push("Não foi possível salvar o plano");
                return errors;
            }
        }else{
            return errors;
        }
    }

    validate(plan, errors){

        var errorCount = 0;

        if(plan.title == undefined || plan.title.length < 3){
            errors.title_msg = "Título inválido";
            errorCount++;
        }

        if(plan.list == undefined || plan.list < 1){
            errors.list_msg = "Quantidade de listas é inválida";
            errorCount++;
        }

        if(errorCount == 0){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = new PlansService();