const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Check that fields aren't empty
    if (!name || !email || !message) {

        formStatus.textContent = "Please fill in all fields.";
        formStatus.className = "form-status error";

        return;
    }


    // YOUR WHATSAPP NUMBER
    // Include country code.
    // Example South Africa: 27821234567
    const phoneNumber = "27642086290";


    // Create the WhatsApp message
    const whatsappMessage =
        `Hello! I received a new message from my website.

Name: ${name}

Email: ${email}

Message:
${message}`;


    // Create WhatsApp URL
    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");


    // Show success message
    formStatus.textContent =
        "Your message is ready in WhatsApp.";

    formStatus.className = "form-status success";


    // Clear the form
    contactForm.reset();

});