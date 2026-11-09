/// conditional statements if-else

// const age = 25;

// if(age >= 30){
//     console.log('you are eligible for job');
// }
// else {
//     console.log('you are not eligible for job');
// }


/// if-else if-else

    // const performance = 85;

    // if(performance >=90) {
    //     console.log('excellent');
    // }
    // else if(performance >= 80) {
    //     console.log('good');
    // }
    // else if(performance >= 70) {
    //     console.log('average');
    // }
    // else {
    //     console.log('poor');
    // }


    /// nested if-else

        const email = 'ismailcoder@gmail.com';
        const password = '123456';
        const isAccountActive = true;

        if(email === 'ismailcoder@gmail.com'){
            if(password === '123456'){
                if(isAccountActive){
                    console.log('login successful');
                }
                else {
                    console.log('login failed')
                }
            }
            else {
                console.log('password is incorrect');
            }
        }
        else{
            console.log('email not found');
        }

