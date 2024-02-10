 // Created by Anabelle Velasquez
 // February 11, 2024
 // This is my valentines proposal to my girlfriend, Chastine. 

function showNextSection() {
    document.getElementById('firstSection').classList.remove('visible');
    document.getElementById('secondSection').classList.add('visible');
    startCountdown();
}

function showMemories() {
    document.getElementById('secondSection').classList.remove('visible');
    document.getElementById('quoteSection').classList.remove('visible');
    document.getElementById('memoriesSection').classList.add('visible');
}

function showMessages() {
    document.getElementById('memoriesSection').classList.remove('visible');
    document.getElementById('messagesSection').classList.add('visible');
}

function acceptProposal() {
    showMemories(); // Proceed to the memories section
}

function rejectProposal() {
    alert("Oh no! Don't break my heart! How about a box of chocolates and a puppy?");
}

function acceptProposalWithAnimation() {
    // Add a delightful animation to celebrate acceptance
    const heart = document.querySelector('.animated-heart');
    heart.classList.add('animate-heart');
    setTimeout(() => {
        heart.classList.remove('animate-heart');

        // Hide all sections except the memories section
        document.querySelectorAll('.container section').forEach(section => {
            section.classList.remove('visible');
        });

        // Show the memories section
        document.getElementById('memoriesSection').classList.add('visible');

        // After a delay, navigate to the next section
        setTimeout(() => {
            showLoveMessageSection();
        }, 3000); // Adjust the delay time as needed
    }, 3000);
}

function startBackgroundMusic() {
    // Show the background music element
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.style.display = 'block';

    // Play the background music
    backgroundMusic.play();
}

function showQuoteSection() {
    // Hide all sections
    document.querySelectorAll('.container section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the quote section
    document.getElementById('quoteSection').style.display = 'block';
}

function showLoveMessageSection() {
    // Hide all sections
    document.querySelectorAll('.container section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the love message section
    document.getElementById('loveMessageSection').style.display = 'block';

    // Show the proceed button only in the love message section
    document.getElementById('proceedButton').style.display = 'block';
}

function proceedToQuoteSection() {
    // Hide all sections
    document.querySelectorAll('.container section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the quote section
    document.getElementById('quoteSection').style.display = 'block';
}



function rejectProposalAndStartOver() {
    // Hide all sections
    document.querySelectorAll('.container section').forEach(section => {
        section.classList.remove('visible');
    });

    // Show the first section
    document.getElementById('firstSection').classList.add('visible');
}


function askAgain() {
    // Display answer options
    document.getElementById('answerOptions').style.display = 'block';
}

function startCountdown() {
    var countDownDate = new Date("Feb 14, 2024 00:00:00").getTime();
    var countdownElement = document.getElementById("countdown");

    if (!countdownElement) {
        console.error("Countdown element with ID 'countdown' not found.");
        return;
    }

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "It's Valentine's";
        }
    }, 1000);
}

