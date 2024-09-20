"use strict";
const favHobbies = (hobby) => {
    // return hobby.map(()=>{}); //! this line of code is invalid
    if (typeof hobby === 'object' || Array.isArray(hobby)) {
        return hobby.map((data) => {
            // return 'Hi'
            console.log(data);
        });
    }
    else {
        console.log(hobby);
        // console.log('hi');
    }
};
favHobbies(['sport', 'basketball', 'hockey']);
// favHobbies('just kidding')
