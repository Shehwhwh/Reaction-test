const screen = document.getElementById('game-screen');
const text = document.getElementById('text');
const subText = document.getElementById('sub-text');

let startTime, timeoutId, state = 'start';

screen.addEventListener('mousedown', () => {
    if (state === 'start' || state === 'result') {
        state = 'waiting';
        screen.className = 'waiting';
        text.innerText = '...';
        subText.innerText = '';
        
        timeoutId = setTimeout(() => {
            state = 'ready';
            screen.className = 'ready';
            text.innerText = 'ЖМИ!';
            startTime = performance.now();
        }, Math.floor(Math.random() * 3000) + 2000);

    } else if (state === 'waiting') {
        clearTimeout(timeoutId);
        state = 'result';
        screen.className = 'result';
        text.innerText = 'Ты нажал когда было красный экран!';
        subText.innerText = 'Нажми чтобы повторить';

    } else if (state === 'ready') {
        const ms = Math.round(performance.now() - startTime);
        state = 'result';
        screen.className = 'result';
        text.innerText = `${ms} Милисекунд`;
        subText.innerText = 'Хочешь повторить? Нажми еще раз.';
    }
});
