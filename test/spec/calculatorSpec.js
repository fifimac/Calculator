describe("My Calculator", function() {
    it("should convert imperial weight to metric", function() {
         expect(Calculator.convertFromPoundsToKIlo(1)).toBe(2.20462);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Calculator.convertFromPoundsToKIlo("hello")}).toThrow(new Error("Not a number"))
    })
})