describe("visitorDetails", function() {
    let result;

      beforeEach(function() {
      result = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
      });

    it("should be return visitor details", function() {
      expect(result).toEqual([{
        fullName: "Palesa Sithebe",
        age: 22,
        date: "25 July 2019",
        time: "13:00" ,
        comments: "Umuzi seems awesome",
        assistorName:"Singita Ngobeni" ,
    }
    
   ])
    
 });
})

describe("visitorDetails", function() {
  let result;

    beforeEach(function() {
    result = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
    });

  it("should be return visitor details", function() {
    expect(load(save(),1)).toEqual(visitor_1.JSON)
  
});
})
