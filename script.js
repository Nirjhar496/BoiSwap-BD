// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Highlight active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('nav a, .mobile-nav a');
    
    navItems.forEach(item => {
        const itemPage = item.getAttribute('href');
        if (currentPage === itemPage || (currentPage === '' && itemPage === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Book request buttons
    const requestButtons = document.querySelectorAll('.book-card .btn');
    requestButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.classList.contains('no-action')) {
                const bookTitle = this.closest('.book-card').querySelector('.book-title').textContent;
                alert(`Request sent for: ${bookTitle}`);
                e.preventDefault();
            }
        });
    });
    
    // Chat functionality
    const messageInput = document.querySelector('.message-input input');
    const sendButton = document.querySelector('.message-input .btn');
    const messageContainer = document.querySelector('.message-container');
    
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', function() {
            if (messageInput.value.trim() !== '') {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message', 'message-out');
                messageDiv.textContent = messageInput.value;
                messageContainer.appendChild(messageDiv);
                messageInput.value = '';
                
                // Auto scroll to bottom
                messageContainer.scrollTop = messageContainer.scrollHeight;
            }
        });
        
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });
    }
    
    // Form submission for add book
    const addBookForm = document.querySelector('.screen form');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const bookTitle = this.querySelector('input[type="text"]').value;
            alert(`Book "${bookTitle}" added successfully!`);
            window.location.href = 'mybooks.html';
        });
    }
});