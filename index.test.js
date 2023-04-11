const mod = require("./index.js");

console.log("stating index.js tests")
test("returning console log hey from there", async () => {
	expect(await mod.hey("hello")).toBe("hello");
});

test("summin 5 and 9 must be 14", () => {
	expect(mod.summer([5,9])).toBe(14);
});

test("key another contem 'olá'",()=>{
    expect(mod.another).toBe("olá")
})

const numbers = [[5,9],[7,11],[20,1]]
const results = [14,18,21]
for (let i in numbers) {
    test(`summin ${numbers[i]}, must be ${results[i]}`, () => {
        expect(mod.summer(numbers[i])).toBe(results[i])
    })
}