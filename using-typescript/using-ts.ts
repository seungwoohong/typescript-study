const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')! as HTMLInputElement
const buttonAdd = document.querySelector('button')! as HTMLInputElement

const add = (num1: number, num2:number): number => {
    return num1 + num2
}

buttonAdd.addEventListener('click', () => {
    console.log(add(+input1.value, +input2.value))
});
