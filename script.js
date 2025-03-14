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

    flipCard();
    
    // Show alert message
    setTimeout(() => {
        alert('รักเธอนะ! ❤️');
    }, 1000);
});

// Background Music Control
let audio = new Audio();
audio.src = "assets/yungkai.mp3";
audio.loop = true;
audio.volume = 0.2; // ปรับระดับเสียงให้ชัดเจน
let audioPlaying = false;

// เพิ่มการ debug การโหลดไฟล์
audio.onloadeddata = () => console.log("Audio file loaded successfully");
audio.onerror = () => console.log("Error loading audio: " + audio.error.code);

// ฟังก์ชันเล่นเพลง
function playAudio() {
    if (!audioPlaying) {
        audio.play().then(() => {
            audioPlaying = true;
            document.getElementById('music-control').innerHTML = '❚❚';
            console.log("Audio started playing");
        }).catch(e => {
            console.log("เกิดข้อผิดพลาดในการเล่น: ", e);
        });
    }
}

// เล่นเพลงเมื่อแตะหน้าจอครั้งแรก
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('music-control').innerHTML = '♫'; // แสดงว่าเพลงยังไม่เล่น
    console.log("หน้าเว็บโหลดเสร็จแล้ว รอการแตะหน้าจอเพื่อเล่นเพลง");

    // ฟังการคลิกหรือแตะที่ใดก็ได้ในหน้า
    document.body.addEventListener('click', function startAudioOnInteraction() {
        playAudio();
        // ลบ event listener หลังจากเล่นครั้งแรกเพื่อไม่ให้เรียกซ้ำ
        document.body.removeEventListener('click', startAudioOnInteraction);
    }, { once: true }); // เรียกครั้งเดียว
});

// ปุ่มควบคุมเพลง
document.getElementById('music-control').addEventListener('click', function(e) {
    // ป้องกันการเรียก event click จาก body ซ้ำกับปุ่ม
    e.stopPropagation();
    if (audioPlaying) {
        audio.pause();
        audioPlaying = false;
        this.innerHTML = '♫';
    } else {
        playAudio();
    }
});

// Flip Card
function flipCard() {
    document.getElementById("card").classList.toggle("flipped");
}