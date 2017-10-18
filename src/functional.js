/**
 * Using this JSDocs annotation we link the d.ts interface to this JS const.
 * In other words we link our API and our implementation.
 *
 * @type {typescript_for_public_apis.IFunctional}
 */
const calculator = {

    add: function add(a, b) {
        // "a" param is defined as a number in api.d.ts, trying to use it as a string
        // will result in an error: "error TS2339: Property 'charAt' does not exist on type 'number'."

        // uncomment the next line and run "npm run type_check" to inspect.
        // a.charAt(2);

        return a + b;
    },

    subtract: function subtract(a, b) {
        return a - b;
    },

    divide: function (a, b) {
        return a / b;
    },

    // If we add a new property without also updating the api.d.ts file
    // The compiler will fail with:
    // "Object literal may only specify known properties, and 'multiple' does not exist in type 'IFunctional'."
    // uncomment the next three lines and run "npm run type_check" to inspect.
    // multiple(a, b) {
    //     return a * b;
    // }
};


module.exports = calculator;
