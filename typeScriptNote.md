# [*] ANY TYPE
The any type is the most flexible type in [TypeScript]. It essntially turns off alll type checking for the variables or expressions it is applied to.

<!-- !useCases -->
__Working with Dynamic Data:__ When dealing with datafrom dynamic sources like inputs, network responses, or deserialized _JSON_ Ojbects, the [ANY] type can be usefull.

__Migration from JavaScript:__ When migrating an existing JavaScript codebase to typescript, using the [any] tpe can be convenient way to quickly annotate variables and functions without immediately specifiyn their precise type. 

# [*] UNKNOWN TYPE 
The unknown type is a safer alternative to any because it still enforces type checking and safety.

variables of type unknown can hold values of any type, but you must perform type checks or types assertions before usng them in specific ways. 

# [*] TYPE INFERENCEE 
Type inference is Typescript refers to the ability of the typeScript compiler to autmatically determine and assign types to variables, expressions and function return values based on their useage and context in the code.

_@Todo: What are some best practices for using type inference in TypeScript_
!-> Use type inference for simple cases where the assigned value clearly indicates the intended type.

!-> When in doubt, provide explicit type annotations to make your intentions clear.

!-> Avoid relying too heavily on type inference when the assigned value is complex or ambiguous.

!-> Regularly review and refactor your code to ensure the inerred types align with your intentions.


# [*]--------FUNCTION DECLARATION -----------
You can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in parameters, and a return type. 
The function body contains the code that will be executed when the function is called.
_@Function Invocation_ To execute a function, you simply invoked it by using its name followed by parenthess.
You can provide arguments (actual values) for the parameters defined in the function declaration.


# [*]-------- OPTIONAL AND PARAMETERS
-> TypeScript allows you to define optional and default parameter in function.
-> Optional parameters are denoted by appending a ? symbol after the parameter name, default parameters are specified by providing a default value in the parameter declaration.


# [*] MAP METHOD 
__practice question for map__:-> 
-> Given an array of strings representing names, create a new array that contains the uppercase version of each name.

-> Given an aray of numbers, create new array that contains the square of each number.

__practice question for filter__:->
-> Given an array of strings, create a new array that contains only the strings with a legth greater than 15.
// const name:string[] = ["alice", "bob", "anna", "andrew", "alex"];

-> Given an array of strings, fliter out the names with letter "A"


# [*] ----------- CALL SIGNATURES -------------------
The function call signature refers to the declaration or definition of a function, which includes the function's name, parameters, and the return type. It defines the structure and type information of a function without including the function's implementation or body [CallSignature.ts]


# [*] ----------- ENUMS --------------------------
Enums in typescript are commonly used when you want to represent a set of related values and choose one from multiple options. Enums provide a convenient way to define a set of named values and ssoiciate them with specifc meanings [Enums.ts]


# [*] ----------- TUPELS --------------------------
Tupels are a data structure that allows you to store a fixed-size collection of elements of different types. They are simiilar to arrays, but with a key difference: type types of elements in a tuples are fixed and declared at the time of creation, whereas arrays can hod elements of the same type, adn their size can vary. [Tuples.ts]


# [*] ----------- UNION AND INTERSECTIONS --------------------------
_UNION_ types allow you to specify that a vriable can hold vaues of multiple types, You use the | (pipe) symbol to definea unio type.
In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the requires properties. Failure to doso will result in a types error during compiltaion

Practice, we'll create a function taht can accet different types of arguments and perform different actions based on the type of the input. **_[Question on line 10]_** Suppose we want to create a function that doubles the values if the input is number, or convert the input to uppercase if it is a string. To achive this, we can use a union type to allow the function to accept both number and string. [UnionInter.ts]



# [*] ----------- INTERFACE --------------------------
An InterFace is a powerfull feature that allows you to define a contract for an object's shape. It specifies the properties and their types that an object must have to be considered of that particular interface type. Interfaces are primarily used for type-checking during development and do not generate any JavaScript code at runtime. [Interface.ts]


# [*] ----------- CLASS AND CONTRUCTORS --------------------
There is a convention to use PascalCase (also known as UpperCamelCase) for class name. This mean that class name should start with a capital letter and each subsequent word in the class name should also begin with a capital letter. [Classes.ts]