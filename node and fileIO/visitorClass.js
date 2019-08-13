
let fs = require('fs');
let id = 1;
module.exports = class visitor{
    constructor( fullName,age,date,time,comments,assistorName){
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.assistorName = assistorName;
    }

    createId(){
        let regex = /[0-9]/
        let largest = 0;
        let fs = require('fs')
        let path = require('path')
        let files = fs.readdirSync('.')
         for(var i in files) {
             if(path.extname(files[i]) === ".JSON") {
                 let t  = regex.exec(files[i])
                     if(t[0] > largest){
                         largest = t[0]
                         id = parseInt(largest) + 1
                     }
                 }
             }
             return id;   
     }
    
    save(){
            let visitorFile = JSON.stringify(this)
            console.log(visitorFile)
            fs.writeFile( `visitor_${id}.JSON`, visitorFile, function(err){
                if(err) throw err + 'Could not save data';
                console.log('Your data has been saved');
            })  

            return "Your data has been saved"
    }

    load(id){
        let fileData = fs.readFileSync(`./visitor_${id}.JSON`);
        let visitorData = JSON.parse(fileData);
       
        return visitorData;
    }

}






