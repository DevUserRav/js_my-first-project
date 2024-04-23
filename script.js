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
// const found = movements.find((move) => move > 0)
// const newArr2 = movements.filter((a) => { /*boolena qiymat qaytaradi filterlab beradi.*/
//     return a > 0;
// });
// movements.sort(() => {

// });
// bankist App

// data
const account1 = {
    owner: 'Jonas Shchmedtmann',
    movements: [200, 450.897, -400.879, 3000.7829, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,

    movementsDate: [
        '2024-01-01',
        '2024-01-30',
        '2024-02-18',
        '2024-02-25',
        '2024-03-05',
        '2024-03-10',
        '2024-04-15',
        '2024-04-16',
    ],
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400.89765, -150, -790.213, -3210, -1000.231, 8500.567, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDate: [
        '2024-01-01',
        '2024-01-30',
        '2024-02-25',
        '2024-02-25',
        '2024-03-05',
        '2024-03-10',
        '2024-04-15',
        '2024-04-16',
    ],
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340.908, -300.98, -20, 50, 400.689, -460],
    interestRate: 0.7,
    pin: 3333,

    movementsDate: [
        '2024-01-01',
        '2024-01-30',
        '2024-02-25',
        '2024-02-25',
        '2024-03-05',
        '2024-03-10',
        '2024-04-15',
        '2024-04-16',
    ],
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [430.6728, 1000.321, 700.5679, 50, 90],
    interestRate: 1,
    pin: 4444,

    movementsDate: [
        '2024-01-01',
        '2024-01-30',
        '2024-02-25',
        '2024-02-25',
        '2024-03-05',
        '2024-03-10',
        '2024-04-15',
        '2024-04-16',
    ],
};
const account5 = {
    owner: 'Qarshiyev Suyun',
    movements: [430, -1000, -700, 50, 90],
    interestRate: 1,
    pin: 5555,

    movementsDate: [
        '2024-01-01',
        '2024-01-30',
        '2024-02-25',
        '2024-02-25',
        '2024-03-05',
        '2024-03-10',
        '2024-04-15',
        '2024-04-16',
    ],
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const welcome = document.querySelector('.nav_title');
const labelDate = document.querySelector('.date');
const labelBalanceValue = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary_value--in')
const labelSumInterest = document.querySelector('.summary_value--interest')
const labelSumOut = document.querySelector('.summary_value--out')
const labelTimer = document.querySelector('.timer')

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

containerApp.classList.add('hidden');

// let date = new Date();
// let hour = `${date.getHours()}`.padStart(2,0);
// let min = `${date.getMinutes()}`.padStart(2,0);
// let seconds = `${date.getSeconds()}`.padStart(2,0);

// format dates
const formatMovementsDate = (date) => {
    const calcPassedDays = (day1,day2) => {
        return Math.abs((day1 - day2) / (1000 * 60 * 60 * 24));
    };

    const passedDays = Math.floor(calcPassedDays(new Date(), date));
    
    if(passedDays === 0) {
        return 'Today'
    };
    if(passedDays === 1) {
       return 'Yesterday'
    };
    if(passedDays <= 7) {
        return `${passedDays} days ago`;
    }else {
        let day = `${date.getDate()}`.padStart(2,0);
        let month = `${date.getMonth() + 1}`.padStart(2,0);
        let year = date.getFullYear();
        return `${year}/${month}/${day}`; 
    }
};

// movements
const displayMovements = (acc, sort = false) => {   
    containerMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a,b) => a -   b) : acc.movements;

    movs.forEach((move, index) => {
        const type = move > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDate[index]);
        const displayDate = formatMovementsDate(date);

        const html = `<div class="notes_row">
        <div class="notes">
          <p class="notes__type notes__type--${type}">${index + 1} ${type}</p>
          <p class="notes__date">${displayDate}</p>
        </div>
            <p class="notes__value">${move.toFixed(2)} €</p>
        </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};


// calc balance
const calcDisplayBalance = (account) => {
    account.balance = account.movements.reduce((acc, crvalue) => acc + crvalue, 0)
    labelBalanceValue.textContent = `${account.balance.toFixed(2)} €`;
}


// Calc summary
const calcDisplaySummary = (acc) => {
    // total in
    const incomes = acc.movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0);
    // total out
    const out = acc.movements.filter((mov) => mov < 0).reduce((acc, cur) => acc + cur, 0);
    // total out
    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((mov) => (mov * acc.interestRate) / 100)
        .reduce((acc, cur) => acc + cur, 0);

    labelSumIn.textContent = `${incomes.toFixed(2)} €`;
    labelSumOut.textContent = `${Math.abs(out.toFixed(2))} €`;
    labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

// create username
const createUsernames = (accs) => {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map((name) => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUi = (acc) => {
    displayMovements(acc);

    calcDisplayBalance(acc);

    calcDisplaySummary(acc);

};

const startLogOutTimer = () => {
    const tick = () => {
        const min = String(Math.floor(time / 60)).padStart(2,0);
        const sec = String(time % 60).padStart(2,0);

        labelTimer.textContent = `${min}:${sec}`;

        
        if(time === 0){
            welcome.textContent = 'Log in to get Started';
            containerApp.classList.add('hidden');
            clearInterval(timer);
        }
        time--;
    };

    let time = 120;
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
};

let currentAccount, timer;


btnLogin.addEventListener('click', (event) => {
    event.preventDefault();

    currentAccount = accounts.find((acc) => acc.username === inputLoginUser.value);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        welcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.classList.remove('hidden');

        inputLoginUser.value = '';
        inputLoginPin.value = '';

        let now = new Date();
        const options = {
            hour:'2-digit',
            minute:'numeric',
            day:'numeric',
            month:'long',
            year:'numeric',
        }
        labelDate.textContent = new Intl.DateTimeFormat('en-US',options).format(now);
        // console.log(navigator.language);

        // let date = `${now.getDate()}`.padStart(2,0);
        // let month = `${now.getMonth() + 1}`.padStart(2,0);
        // let year = now.getFullYear();
        // let hour = `${now.getHours()}`.padStart(2,0);
        // let min = `${now.getMinutes()}`.padStart(2,0);
        // let seconds = `${now.getSeconds()}`.padStart(2,0);
        // labelDate.textContent = `${date}/${month}/${year}, ${hour}:${min}:${seconds}`;


        clearInterval(timer);
        timer = startLogOutTimer();

        updateUi(currentAccount);
    };

});

btnTransfer.addEventListener('click', (evt) => {
    evt.preventDefault();

    const trsAmount = Number(inputTransferAmount.value);
    const receivedAcc = accounts.find((acc) => acc.username === inputTransferTo.value);

    inputTransferAmount.value = '';
    inputTransferTo.value = '';

    if (trsAmount > 0 && receivedAcc && currentAccount.balance > trsAmount && currentAccount.username !== receivedAcc?.username) {
        currentAccount.movements.push(-trsAmount);
        receivedAcc.movements.push(trsAmount); 

        currentAccount.movementsDate.push(new Date().toISOString());
        receivedAcc.movementsDate.push(new Date().toISOString());
    };
    clearInterval(timer);
    timer = startLogOutTimer();

    updateUi(currentAccount);
});

btnLoan.addEventListener('click', (evt) => {
    evt.preventDefault();

    const loanAmount = Number(inputLoanAmount.value);

    setTimeout(()=> {
        if(loanAmount > 0 && currentAccount.movements.some((mov) => mov >= loanAmount * 0.1)){
            currentAccount.movements.push(loanAmount);
            currentAccount.movementsDate.push(new Date().toISOString());
        }
        updateUi(currentAccount);
    },2000);
    inputLoanAmount.value = '';

    clearInterval(timer);
    timer = startLogOutTimer();
 
});

btnClose.addEventListener('click',function (evt) {
    evt.preventDefault();
    const index = accounts.findIndex((acc) => acc.username === inputCloseUser.value);

    if (
        currentAccount.username === inputCloseUser.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        containerApp.classList.add('hidden');
        accounts.splice(index,1);
    }
    inputCloseUser.value = '';
    inputClosePin.value = '';
});

// const displaySort = (acc) => {
//     acc.movements.sort((a,b) => {
//         return a - b;
//     }); 
// }
let sorted = false;

btnSort.addEventListener('click', (evt) => {
    evt.preventDefault();

    // displaySort(currentAccount);
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});

