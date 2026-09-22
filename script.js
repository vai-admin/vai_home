/*function toggleCard(cardElement) {
    // Optional: Close any other open cards first
    document.querySelectorAll('.card').forEach(card => {
        if (card !== cardElement) {
            card.classList.remove('active');
        }
    });

    // Toggle active state on the clicked card
    cardElement.classList.toggle('active');
}

// Tab Switching Controller Logic
function switchTab(event, tabId) {
    // Prevent the click event from bubbling up and closing the main card accordion
    event.stopPropagation();
    
    const container = event.target.closest('.tab-container');
    
    // Deactivate all matching headers and content blocks in this specific card instance
    container.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Activate target elements
    event.target.classList.add('active');
    container.querySelector(`#${tabId}`).classList.add('active');
}
*/
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
