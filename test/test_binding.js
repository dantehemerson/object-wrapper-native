const ObjectWrapDemo = require('../build/Release/object-wrap-demo-native').ObjectWrapDemo
const AreYouLying = require('../build/Release/object-wrap-demo-native').AreYouLying

const assert = require("assert");

assert(ObjectWrapDemo, "The expected module is undefined");

function testBasic()
{
    const instance = new ObjectWrapDemo("mr-yeoman");
    assert(instance.greet, "The expected method is not defined");
    assert.strictEqual(instance.greet("kermit"), "mr-yeoman", "Unexpected value returned");
}

function testInvalidParams()
{
    const instance = new ObjectWrapDemo();
}


function testFunction() {
    assert.strictEqual(AreYouLying(), true, "AreYouLying Should return true")
}

assert.doesNotThrow(testBasic, undefined, "testBasic threw an expection");
assert.doesNotThrow(testFunction, undefined, "testFunction threw an expection");
assert.throws(testInvalidParams, undefined, "testInvalidParams didn't throw");

console.log("Tests passed- everything looks OK!");