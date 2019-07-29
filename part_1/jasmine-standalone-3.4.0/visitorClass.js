
let visitorsArray = [];
let visitorFiles = [];
class visitor{
    constructor( fullName,age,date,time,comments,assistorName){
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.assistorName = assistorName;
        let o =  {
            fullName,
            age,
            date,
            time,
            comments,
            assistorName,
        }  
        visitorsArray.push(o)
        return visitorsArray
    }
 
   
}

function save(i){
    let visitorsArray2 = visitorsArray
    let fs = require('fs');
    for(let i = 0; i<visitorsArray2.length; i++){
        let visitorFile = JSON.stringify(visitorsArray2[i])
        fs.writeFile( "visitor_" + [i+1] + ".JSON", visitorFile, function(err){
            if(err) throw err;
            console.log('worked');
        })
        visitorFiles.push("visitor_" + [i+1] + ".JSON")
    }    
}

function load(x,id){
    return visitorFiles[id-1]
}
