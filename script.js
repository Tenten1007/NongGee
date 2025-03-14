 // Countdown Timer
 function updateCountdown() {
    const targetDate = new Date('2025-03-15T00:00:00');
    const currentDate = new Date();
    
    const timeDifference = targetDate - currentDate;
    
    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = 'สุขสันต์วันครบรอบของเรา! ❤️';
        return;
    }
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `อีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.opacity = '0';
    heart.style.animation = 'float ' + (Math.random() * 5 + 3) + 's linear';
    heart.style.bottom = '-20px';
    
    document.getElementById('floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.style.opacity = '1';
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 100);
}

// Surprise Button Effect
document.getElementById('surprise-btn').addEventListener('click', function() {
    // Create heart animation
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }

    flipCard()
    
    // Show alert message
    setTimeout(() => {
        
        alert('รักเธอนะ! ❤️');
        
    }, 1000);
});

// Background Music Control
let audio = new Audio();
    audio.src = "yungkai.mp3";
    audio.loop = true;
    audio.volume = 0.1; // ปรับระดับเสียงให้เบาลง (ค่า 0.0 - 1.0)
    
    let audioPlaying = false;

    // เล่นอัตโนมัติเมื่อเปิดเว็บ (อาจต้องให้ user กดที่หน้าเว็บก่อนในบางเบราว์เซอร์)
    document.addEventListener("DOMContentLoaded", function() {
        audio.play().then(() => {
            audioPlaying = true;
            document.getElementById('music-control').innerHTML = '❚❚';
        }).catch(e => {
            console.log("เบราว์เซอร์บล็อกการเล่นอัตโนมัติ, กรุณาคลิกที่หน้าเว็บก่อน");
        });
    });

    // ปุ่มควบคุมเพลง
    document.getElementById('music-control').addEventListener('click', function() {
        if (audioPlaying) {
            audio.pause();
            audioPlaying = false;
            this.innerHTML = '♫';
        } else {
            audio.play();
            audioPlaying = true;
            this.innerHTML = '❚❚';
        }
    });

    function flipCard() {
        document.getElementById("card").classList.toggle("flipped");
    }