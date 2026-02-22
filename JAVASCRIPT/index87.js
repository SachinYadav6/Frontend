let container = document.querySelector('.container');
console.log(container);
container.style.height = '300px';
container.style.width = '300px';
container.style.backgroundColor = 'red';
container.innerText = 'MY NAME IS : sachin kumar';
container.style.color = 'white';
container.style.borderRadius = '12px';

container.addEventListener('click', () => {
    setTimeout(() => {
        container.style.backgroundColor = 'yellow';
        setTimeout(() => {
            container.style.backgroundColor = 'black';
            setTimeout(() => {
                container.style.backgroundColor = 'green';
                setTimeout(() => {
                    container.classList.add('text')

                }, 1000)
            }, 1000)
        }, 1000)

    }, 1000);
})


