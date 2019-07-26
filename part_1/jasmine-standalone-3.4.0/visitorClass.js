class visitor{
    constructor(){
    }
    
    visitorDetails(fullName,age,date,time,comments, assistorName,){
       return {
           fullName,
           age,
           date,
           time,
           comments,
           assistorName,
       }   

    }

    visitorCount() {
        let count = 0;
            ++count
        return count;
    }

    save(visitorDetails,visitorCount){
        let y = visitorDetails;
        let u = visitorCount
        console.log(y)
        let fs = require('fs');
        let visitorFile = JSON.stringify(y)
        fs.writeFile( "visitor_" + u + ".JSON", visitorFile, function(err){
            if(err) throw err;
            console.log('worked')

        })
    }
}



