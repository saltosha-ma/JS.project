// GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailSpan = document.querySelector('#gmail_result');
const regExp =   /[\w._%+-]+@gmail\.com/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK';
        gmailSpan.style.color = 'green';
    } else {
        gmailSpan.innerHTML = 'NOT OK';
        gmailSpan.style.color = 'red';
    }
};


const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');


const moveBlock = (position) => {
    if (position <= parent.clientWidth - child.clientWidth) {

        child.style.left = `${position}px`;
        requestAnimationFrame(() => moveBlock(position + 5));
    }
}

moveBlock(0);
