

document.addEventListener('DOMContentLoaded', function () {
    // Set the current language on page load
    setLanguageButtonText();

    // Check language and change texts accordingly
    checkLanguageAndChangeText();
});

function checkLanguageAndChangeText() {
    // Retrieve the selected language from local storage or set a default language
    var currentLanguageButton = document.getElementById('currentLanguageButton');

    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    switch (selectedLanguage) {
        case 'en':
            currentLanguageButton.textContent = 'English';
            document.getElementById('styleLink').disabled = false; // Enable English stylesheet
            document.getElementById('styleLinkAr').disabled = true; // Disable Arabic stylesheet
            break;
        case 'ar':
            currentLanguageButton.textContent = 'العربية';
            document.getElementById('styleLink').disabled = true; // Disable English stylesheet
            document.getElementById('styleLinkAr').disabled = false; // Enable Arabic stylesheet
            break;
        case 'fr':
            currentLanguageButton.textContent = 'Français';
            document.getElementById('styleLink').disabled = false; // Enable English stylesheet
            document.getElementById('styleLinkAr').disabled = true; // Disable Arabic stylesheet
            break;
        default:
            currentLanguageButton.textContent = 'English';
            document.getElementById('styleLink').disabled = false; // Enable English stylesheet
            document.getElementById('styleLinkAr').disabled = true; // Disable Arabic stylesheet
    }

    // Set page direction based on the selected language
    var htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', selectedLanguage);
    htmlElement.setAttribute('dir', selectedLanguage === 'ar' ? 'rtl' : 'ltr');
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-lang');
        if (languageData[selectedLanguage] && languageData[selectedLanguage][key]) {
            element.textContent = languageData[selectedLanguage][key];
        }
    });

    // Update the language button text
    setLanguageButtonText();
}

function setLanguageButtonText() {
    var currentLanguageButton = document.getElementById('currentLanguageButton');
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switch (selectedLanguage) {
        case 'en':
            currentLanguageButton.textContent = 'En';
            document.dir = 'ltr';
            break;
        case 'ar':
            currentLanguageButton.textContent = 'Ar';
            document.dir = 'ltr';
            break;
        // case 'fr':
        //     currentLanguageButton.textContent = 'Français';
        //     document.dir='ltr'; 
        //     break;
        default:
            currentLanguageButton.textContent = 'English';
            document.dir = 'ltr';

    }

    // Set page direction based on the selected language
    var htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', selectedLanguage);
    htmlElement.setAttribute('dir', selectedLanguage === 'ar' ? 'rtl' : 'ltr');
}

function changeLanguage(lang) {
    // Store the selected language in local storage
    localStorage.setItem('selectedLanguage', lang);

    // Change texts based on the selected language
    checkLanguageAndChangeText();
    location.reload();

}
var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Define text arrays for each language






function toggleDropdown() {
    var dropdown = document.getElementById("languageDropdown");
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var direction = document.documentElement.getAttribute("dir");
    const images = document.querySelectorAll("img");

    if (direction === "rtl") {
        for (var i = 0; i < images.length; i++) {
            if (images[i].classList.contains("en-image")) {
                images[i].style.display = "none";
            } else {
                images[i].style.display = "inline-block";
            }
        }
    } else {
        for (var i = 0; i < images.length; i++) {
            if (images[i].classList.contains("ar-image")) {
                images[i].style.display = "none";
            } else {
                images[i].style.display = "inline-block";
            }
        }
    }
});


// script.js


