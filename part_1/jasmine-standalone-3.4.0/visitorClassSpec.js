describe("visitorDetails", function() {
    let result;

      beforeEach(function() {
      result = new visitor()
      });

    it("should be return visitor details", function() {
      expect(result.visitorDetails("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")).toEqual({
        fullName: "Palesa Sithebe",
        age: 22,
        date: "25 July 2019",
        time: "13:00" ,
        comments: "Umuzi seems awesome",
        assistorName:"Singita Ngobeni" ,
    })
    
 });
})
