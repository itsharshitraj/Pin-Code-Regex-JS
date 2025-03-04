const pinCodeRegex =  /^[1-9][0-9]{2}\s?[0-9]{3}$/;

const testPinCode = (pin) => {
    return pinCodeRegex.test(pin);
};

console.log(testPinCode("400088")); // true
console.log(testPinCode("400 088")); // true (valid PIN code with a space)

