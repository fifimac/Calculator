describe("My Calculator", function() {
    it("should do simple calculations", function() {
         expect(Calculator.calculate(1,100,"x")).toBe(100);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Calculator.calculate("hello")}).toThrow(new Error("Not a number"))
    })
})