//faq stuff

const faqs = [
    {
        question: "What do I need to download?",
        answer: "To get started, all you'll need are a Minecraft account and a launcher (MultiMC and Prism Launcher are common choices) that can launch MCSR Ranked (which you can download through MCSR Ranked's website). When you want to get more advanced, you can download and set up NinjaBrain Bot for stronghold calculation, and you can download a program like Toolscreen (Windows) or SlackowWall (Mac) to be able to use macros."
    },
    {
        question: "How much money will I need to spend?",
        answer: "As long as you have a laptop or computer, you'll only need to make a one-time purchase for a Minecraft Java account, which is $30. Everything else is free!"
    },
    {
        question: "What's the best way to get started?",
        answer: "Start watching others! You will learn so much just by watching other people play. Check out the players above to find someone you might enjoy watching and may learn something from! There are also great videos on MCSR Ranked's YouTube channel, and content creator Couriway has a comprehensive guide to speedrunning posted online."
    },
    {
        question: "Why do most runners play in 1.16.1?",
        answer: "1.16.1 is the fastest version to speedrun and is easier than other versions. 1.16.1 included the release of bastions and piglin trading, but excluded piglin brutes, a strong and hostile mob that didn't come out until 1.16.2. Additionally, piglin barters in this version have higher chances of getting the items you need for a speedrun."
    },
    {
        question: "Why are Ranked speedruns faster than RSG speedruns?",
        answer: "In MCSR Ranked, seeds are filtered: they check that there is a nearby structure with enough iron to enter the Nether, there is a Nether enter near spawn, there is a bastion within a certain number of chunks, there is a chest with at least enough iron to make an iron pickaxe and a chest with at least 5 obsidian, and the fortress is within a certain number of chunks. Additionally, piglin barters have higher chances of giving you necessary items to complete the game, and after killing 20 blazes, every blaze is guaranteed to drop a blaze rod. In an RSG run, the seeds are not filtered, so it is very rare that at runner rolls a seed that is actually fast. If a runner does roll a good seed, there is also the RNG aspect, as these seeds do not guarantee you will find what you need to beat the game and do not guarantee good rates."
    }
]

const faqSection = document.querySelector('.faq')


for (const faq of faqs) {
    const container = document.createElement('div')
    container.classList.add('faq-item')
    const header = document.createElement('h2')
    header.classList.add('question')
    header.textContent = faq.question
    const paragraph = document.createElement('p')
    paragraph.classList.add('answer')
    paragraph.textContent = faq.answer
    container.appendChild(header)
    container.appendChild(paragraph)
    faqSection.appendChild(container)
}

//strat buttons

(() => {
    const toggleButton = document.querySelector('#toggle-btn')
    const toggleMessage = document.querySelector('#toggle-msg')


    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';

    });
}
})();



    (() => {
        const toggleButton = document.querySelector('#toggle-btn1')
        const toggleMessage = document.querySelector('#toggle-msg1')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();



    (() => {
        const toggleButton = document.querySelector('#toggle-btn2')
        const toggleMessage = document.querySelector('#toggle-msg2')


    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn3')
        const toggleMessage = document.querySelector('#toggle-msg3')


    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn4')
        const toggleMessage = document.querySelector('#toggle-msg4')
        
    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn5')
        const toggleMessage = document.querySelector('#toggle-msg5')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn6')
        const toggleMessage = document.querySelector('#toggle-msg6')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn7')
        const toggleMessage = document.querySelector('#toggle-msg7')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn8')
        const toggleMessage = document.querySelector('#toggle-msg8')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn9')
        const toggleMessage = document.querySelector('#toggle-msg9')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();


    (() => {
        const toggleButton = document.querySelector('#toggle-btn10')
        const toggleMessage = document.querySelector('#toggle-msg10')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();

    (() => {
        const toggleButton = document.querySelector('#toggle-btn11')
        const toggleMessage = document.querySelector('#toggle-msg11')

    if(toggleButton&&toggleMessage){
    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('is-active');
        toggleMessage.style.display = (toggleMessage.style.display === 'block') ? 'none' : 'block';
    });
}
})();

//submit button

(() => {
    const button = document.querySelector('#submitbutton')


    button.addEventListener('click', (event) => {
        console.log(event);
        button.textContent = 'Submitted!'
        event.preventDefault();

    });
})();
