// Write your tests here!
const {expect}=require("chai")
const {caesar}=require("../src/caesar")

describe ("caesar", ()=>{
  it("should return false if the shift amount is 0",()=>{
    const input="thinkful"
    const shift=0
    const actual=caesar(input, shift)
    expect(actual).to.be.false
  })
  
  it("should return false if the shift amount is above 25",()=>{
    const input="thinkful"
    const shift=26
    const actual=caesar(input, shift)
    expect(actual).to.be.false
  })
  
   it("should return false if the shift amount is less than -25",()=>{
    const input="thinkful"
    const shift=-26
    const actual=caesar(input, shift)
    expect(actual).to.be.false
  })
  
    it("should encode a message by shifting the letters",()=>{
    const input="thinkful"
    const shift=2
    const actual=caesar(input, shift)
    const expected="vjkpmhwn"
    expect(actual).to.equal(expected)
  })
  
   it("should leaves spaces and other symbols as is",()=>{
    const input="hi thinkful!"
    const shift=2
    const actual=caesar(input, shift)
    const expected="jk vjkpmhwn!"
    expect(actual).to.equal(expected)
  })
  
    it("should ignore capital letters",()=>{
    const input="Hi thinkful"
    const shift=2
    const actual=caesar(input, shift)
    const expected="jk vjkpmhwn"
    expect(actual).to.equal(expected)
  })
  
    it("should appropriately handle letters at the end of the alphabet",()=>{
    const input="zoo"
    const shift=2
    const actual=caesar(input, shift)
    const expected="bqq"
    expect(actual).to.equal(expected)
  })
  
    it("should allow for a negative shift that will shift to the left",()=>{
    const input="think"
    const shift=-2
    const actual=caesar(input, shift)
    const expected="rfgli"
    expect(actual).to.equal(expected)
  })
  
    it("should decode a message by shifting the letters in the opposite direction",()=>{
    const input="vjkpmhwn"
    const shift=2
    const actual=caesar(input, shift, false)
    const expected="thinkful"
    expect(actual).to.equal(expected)
  })
  
    it("should leaves spaces and other symbols as is",()=>{
    const input="jk vjkpmhwn!"
    const shift=2
    const actual=caesar(input, shift, false)
    const expected="hi thinkful!"
    expect(actual).to.equal(expected)
  })
  
    it("should ignore capital letters",()=>{
    const input="Jk vjkPmhwn"
    const shift=2
    const actual=caesar(input, shift, false)
    const expected="hi thinkful"
    expect(actual).to.equal(expected)
  })
  
    it("should appropriately handle letters at the end of the alphabet",()=>{
    const input="bqq"
    const shift=2
    const actual=caesar(input, shift, false)
    const expected="zoo"
    expect(actual).to.equal(expected)
  })  
  
    it("should allow for a negative shift that will shift to the left",()=>{
    const input="rfgli"
    const shift=-2
    const actual=caesar(input, shift, false)
    const expected="think"
    expect(actual).to.equal(expected)
  })  
})