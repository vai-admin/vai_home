
// Base Accordion Controller
function toggleCard(cardElement) {
    // Closes other open card elements to maintain space management
    document.querySelectorAll('.card').forEach(card => {
        if (card !== cardElement) {
            card.classList.remove('active');
        }
    });
    cardElement.classList.toggle('active');
}

// Tab Switching Controller Logic
function switchTab(event, tabId) {
    // Crucial: Stop event bubbling so the card doesn't close when clicking a inner tab
    event.stopPropagation();
    
    const container = event.target.closest('.tab-container');
    
    // Reset all tabs inside this layout box
    container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Set active visibility anchors
    event.target.classList.add('active');
    container.querySelector(`#${tabId}`).classList.add('active');
}


var form;
var submitBtn;

function initApp() {
//init
	form = document.getElementById('contactForm');
	submitBtn = form.querySelector('button[type="submit"]');
	
	if (form) {
		form.addEventListener('submit', handleContactFormSubmit);
	}
}

async function handleContactFormSubmit(event) {
	event.preventDefault(); // Stop the page refresh
	
    const formData = new FormData(form);
    formData.append("access_key", "bcbf2d2a-2aef-49d1-9034-b1f606085191");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
	
	return null;
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}


window.debugFormSubmit = handleContactFormSubmit;





