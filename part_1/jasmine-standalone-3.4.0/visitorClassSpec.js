describe("visitor", function() {
    let result;

      beforeEach(function() {
      result = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
      });

    it("return a visitor object", function() {
      expect(result).toBeDefined()
    
 });
})
