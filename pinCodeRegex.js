const pinCodeRegex = /^[1-9][0-9]{5}$/;

const testPinCode = (pin) => {
    return pinCodeRegex.test(pin);
};

console.log(testPinCode("400088")); // true
