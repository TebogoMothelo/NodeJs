
let visitorsArray = []
class visitor{
    constructor( fullName,age,date,time,comments,assistorName){
        this.fullName = fullName;
        this.age = age;
        this.date = date;
        this.time = time;
        this.comments = comments;
        this.assistorName = assistorName;
        // visitorsArray.push(this)
        // return visitorsArray
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

function save(){
    let visitorsArray2 = visitorsArray
    console.log(visitorsArray2)
    let fs = require('fs');
    for(let i = 0; i<visitorsArray2.length; i++){
        console.log(visitorsArray2[i])
        let visitorFile = JSON.stringify(visitorsArray2[i])
        fs.writeFile( "visitor_" + [i+1] + ".JSON", visitorFile, function(err){
            if(err) throw err;
            console.log('worked')

        })
    }
}

function load(){
    
}
let n = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")

let p = new visitor("Palesa",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
console.log(save())
