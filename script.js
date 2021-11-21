let buttons = Array.from(document.getElementsByClassName('btn'));
let output = document.getElementById('display')
buttons.map(btn => {
    btn.addEventListener('click', (event) => {

        console.log('click');
        console.log(event.target);
        console.log(event.target.innerText);
        switch (event.target.innerText) {
            case 'C':
                output.innerText = '';
                break;

            case '⤺':
                if (output.innerText) {
                    output.innerText = output.innerText.slice(0, -1);

                }
                break;

            case "+/-":
                if (parseInt(output.innerText) > 0) {

                }

                case "=":
                    try {
                        // eval is not safe to use...
                        output.innerText = eval(output.innerText);

                    } catch (e) {
                        output.innerText = "Undefined"
                    }
                    break;

                default:
                    output.innerHTML += event.target.innerText;
                    console.log("Inner is ", output.innerText);
                    break;

        }





    });
});

function addNumbers() {

}
console.log(buttons);