
let visitorsArray = [];
class visitor{
    constructor( fullName,age,date,time,comments,assistorName){
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.assistorName = assistorName;
    }
    
    save(){
        visitorsArray.push(this)
        let visitorsArray2 = visitorsArray
        let fs = require('fs');
        for(let i = 0; i<visitorsArray2.length; i++){
            //add if statement 
            let visitorFile = JSON.stringify(visitorsArray2[i])
            fs.writeFile( `visitor_${i+1}.JSON`, visitorFile, function(err){
                if(err) throw err;
                console.log('worked');
            })
        }    
    }
    load(id){
        return require(`./visitor_${id}.json`)
       }

}







