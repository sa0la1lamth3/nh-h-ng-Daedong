
// đối tượng validator
function Validator (options) {
    let formElement = document.querySelector(options.from);


    

    if (formElement) {

        options.rules.forEach(function  (rule) {

            let inputElement = formElement.querySelector(rule.selector);
            console.log(inputElement);
        });
    }

}


// định nghĩa
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function () {

        }

    };

}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {
            
        }

    };
    
}