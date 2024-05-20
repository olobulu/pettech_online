document.addEventListener('DOMContentLoaded', function () {
    // Service descriptions
    const descriptions = [
        "ALL KRA SERVICES",
        "ALL KIND OF SYSTEM DEVELOPMENT",
        "INVITATION CARDS",
        "WEDDING CARDS ",
        "ALL SORT OF WEBSITE DESIGN",
        "MOBILE APPLICATION",
        "COMPUTERS CLINIC",
        "CCTV CAMERA INSTALLATION SERVICES",
        "HELB APPLICATION SERVICES",
        "ALL E_CITIZENS SERVICES",
        "WINDOWS AND OFFICE INSTALLATIONS",
        "COMPUTERS SOFTWARE RELATED ISSUES"
    ];

    // Index for cycling through service descriptions
    let currentIndex = 0;

    // Function to update service description
    function updateServiceDescription() {
        document.getElementById('service-desc').textContent = descriptions[currentIndex];
        currentIndex = (currentIndex + 1) % descriptions.length; // Cycle through descriptions
    }

    // Initial update
    updateServiceDescription();

    // Update every 1.5 seconds
    setInterval(updateServiceDescription, 2000); // 1.5 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to update total clients
    function updateTotalClients() {
        const totalClientsElement = document.getElementById('total-clients');
        const exactNumber = parseInt(totalClientsElement.textContent); // Fetch the exact number from the paragraph
        let currentClients = 0;
        const interval = setInterval(function () {
            totalClientsElement.textContent = currentClients;
            currentClients++;
            if (currentClients > exactNumber) {
                clearInterval(interval);
            }
        }, 50);
    }

    // Call function to update total clients
    updateTotalClients();
});

document.getElementById("dropdown-link").addEventListener("click", function() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.service-img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.display = 'block';
    }

    setInterval(showNextImage, 5000); // Change image every 5000ms (5 seconds)
});


