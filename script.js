const calculate = () => {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.equal');
    let clear = document.querySelector('.clear');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
           let value = e.target.dataset.num;
           console.log(e.target.dataset);
        });
    });
}
calculate();