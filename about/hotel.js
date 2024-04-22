const reviews = [
    {
        quote: "I was pleasantly surprised by how easy it was to find the best hotel deals on this website. The comparison feature saved me a ton of time and effort, and I ended up booking a fantastic hotel at a great price. Highly recommended!",
        author: "u/Sarah",
        likes: 150
    },
    {
        quote: "This website is a game-changer when it comes to booking hotels. I love how it searches hundreds of sites to find the best prices, allowing me to save money without any hassle. The user-friendly interface and detailed search filters make it a go-to platform for all my travel needs.",
        author: "u/Nathaniel",
        likes: 100
    },
    {
        quote: "I can't imagine booking hotels without this website anymore. It takes the stress out of finding the best deals by doing all the searching for you. I've consistently found incredible savings on high-quality hotels, and the reviews and ratings help me make informed decisions. A must-have tool for any traveler!",
        author: "u/Rajesh",
        likes: 76
    }
];

const reviewContainer = document.getElementById('reviewContainer');
let currentIndex = 0;

function displayNextReview() {
    const currentReview = reviews[currentIndex];
    const reviewHTML = `
        <dt><b>${currentReview.quote}</b></dt>
        <dd>Posted by ${currentReview.author}<br>Likes: ${currentReview.likes}</dd>
    `;
    reviewContainer.innerHTML = reviewHTML;

    currentIndex = (currentIndex + 1) % reviews.length;
}

// Display the first review
displayNextReview();

// Automatically cycle through reviews every 5 seconds (adjust as needed)
setInterval(displayNextReview, 5000);