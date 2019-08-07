const visitor = require("../visitorClass.js")
describe("visitor", () => {
    let Visitor;

      beforeEach(() => {
      Visitor = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
      
      });

    it("visitor,should be defined", () => {
      
      expect(Visitor).toBeDefined()
    
 });
    
 it("should return the visitors' property values", () => {
  expect(Visitor.fullName).toBe("Palesa Sithebe");
  expect(Visitor.age).toBe(22);
  expect(Visitor.date).toBe("25 July 2019");
  expect(Visitor.time).toBe("13:00");
  expect(Visitor.comments).toBe("Umuzi seems awesome");
  expect(Visitor.assistorName).toBe("Singita Ngobeni");

 });
})

describe("createId", () => {
  let Visitor;

    beforeEach(() => {
    Visitor = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
    });

    it("return a visitor object", function() {
      expect(Visitor.createId()).toMatch(/[0-9]/)
    
 });
})

describe("save", () => {
  let Visitor;

    beforeEach(() => {
    Visitor = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
    });

    it("save(), should be defined", () => {
      expect(Visitor.save()).toBeDefined();
    
 });

    it("save(), should create a new .json file with a unique id", () => {
    expect(Visitor.save()).toBe('Your data has been saved');

  });
})

describe("load", () => {
  let Visitor;

    beforeEach(() => {
    Visitor = new visitor("Palesa Sithebe",22, "25 July 2019","13:00", "Umuzi seems awesome", "Singita Ngobeni")
    });

    it("load(),should be defined", () => {
      expect(Visitor.save()).toBeDefined();
    
 });

    it("load(), return the file contents", () => {
    expect(Visitor.load(1)).toEqual({
      "fullName":"Palesa Sithebe","age":22,"date":"25 July 2019","time":"13:00","comments":"Umuzi seems awesome","assistorName":"Singita Ngobeni"
    });

  });
})
