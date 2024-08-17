// Array of image filenames (without extensions)
const logos = [];
for (let i = 1; i <= 17; i++) {
    logos.push(i.toString()); // تحويل الرقم إلى نص
}


// Function to generate the HTML for the slider
function generateSlider() {
    const sliderContainer = document.getElementById('image-slider');
    logos.forEach(logo => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide brand-logo brand-logo--slider';
        slide.innerHTML = `
            <a href="#">
                <div class="brand-logo__image">
                    <img src="assets/images/brand/AMHZ/${logo}.png" class="img-fluid" alt="">
                </div>
                <div class="brand-logo__image-hover">
                <img src="assets/images/brand/AMHZ/${logo}.png" class="img-fluid" alt="">
                </div>
            </a>
        `;
        sliderContainer.appendChild(slide);
    });
}
document.addEventListener('DOMContentLoaded', function () {
   
    generateSlider();
});
// Call the function to generate the slider when the page loads
