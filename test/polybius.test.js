// Write your tests here!
const {expect}=require("chai")
const {polybius}=require("../src/polybius")

describe ("polybius", ()=>{
  it("should encode a message by translating each letter to number pairs",()=>{
    const input="thinkful"
    const expected="4432423352125413"
    const actual=polybius(input)
    expect(actual).to.equal(expected)
  })
  
    it("should translate both 'i' and 'j' to 42",()=>{
    const input="jill"
    const expected="42421313"
    const actual=polybius(input)
    expect(actual).to.equal(expected)
  })

    it("should leave spaces as is",()=>{
    const input="Hello world"
    const expected="3251131343 2543241341"
    const actual=polybius(input)
    expect(actual).to.equal(expected)
  })  

    it("should decode a message by translating each pair of numbers into a letter",()=>{
    const input="3251131343 2543241341"
    const expected="hello world"
    const actual=polybius(input, false)
    expect(actual).to.equal(expected)
  })
  
    it("should translate 42 to both 'i' and 'j'",()=>{
    const input="4432423352125413"
    const expected="th(i/j)nkful"
    const actual=polybius(input, false)
    expect(actual).to.equal(expected)
  })
  
    it("should leave spaces as is",()=>{
    const input="2543241341"
    const expected="world"
    const actual=polybius(input, false)
    expect(actual).to.equal(expected)
  })
  
    it("should return false if the length of all numbers is odd",()=>{
    const input="44324233521254134"
    const actual=polybius(input, false)
    expect(actual).to.be.false
  }) 
 })