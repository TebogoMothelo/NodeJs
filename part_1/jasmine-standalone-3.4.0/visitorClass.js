let id = 1;
class visitor{
    constructor( fullName,age,date,time,comments,assistorName){
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.assistorName = assistorName;
    }

    createId(){
        // let id = 1;
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
        let fs = require('fs');
            let visitorFile = JSON.stringify(this)
            fs.writeFile( `visitor_${id}.JSON`, visitorFile, function(err){
                if(err) throw err;
                console.log('worked');
            })  
    }

    load(id){
        return require(`./visitor_${id}.json`)
       }

    }





