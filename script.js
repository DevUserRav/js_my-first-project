'use strict';
// arr.slice(start,end);
// arr.splice(start,end);
// arr.concat();
// arr.join();
// arr.reverce();
// arr.at();
// Math.abs() minuslarni o'chiradi
// arr.entries() index va value qaytaradi
// const movements = [200,450,-400,-3000,-650,-130,70,1300];
// movements.forEach((value,idx) => {
//     console.log(`${idx}:${value}`);
// }); 3 parametr oladi value,index va array o'zi
// const newArr = movements.map(() => {}); forEac bilan bir xil yangi arrayni return qiladi.
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const newArr2 = movements.filter((a) => { /*boolena qiymat qaytaradi filterlab beradi.*/
//     return a > 0;
// });

// bankist App

// data
const account1 = {
    owner: 'Jonas Shchmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const welcome = document.querySelector('.nav_title');
const labelDate = document.querySelector('.date');
const labelBalanceValue = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary_value--in')
const labelSumInterest = document.querySelector('.summary_value--interest')
const labelSumOut = document.querySelector('.summary_value--out')
const timer = document.querySelector('.timer')

// main elements
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.notes_part');

// btn elements
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.sort_btn');

// input elements
const inputLoginUser = document.querySelector('.login__inp--user');
const inputLoginPin = document.querySelector('.login__inp--pin');
const inputTransferTo = document.querySelector('.form__inp--to');
const inputTransferAmount = document.querySelector('.form__inp--amount');
const inputLoanAmount = document.querySelector('.form__inp--loan--amount');
const inputCloseUser = document.querySelector('.form__inp--user');
const inputClosePin = document.querySelector('.form__inp--pin');

const displayMovements = (movements) => {
    containerMovements.innerHTML = '';
    movements.forEach((move, index) => {
        const type = move > 0 ? 'deposit' : 'withdrawal';
        const html = `<div class="notes_row">
        <div class="notes">
          <p class="notes__type notes__type--${type}">${index + 1} ${type}</p>
          <p class="notes__date">3 days ago</p>
        </div>
            <p class="notes__value">${move} €</p>
        </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

displayMovements(account1.movements);






