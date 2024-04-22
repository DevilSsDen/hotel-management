document.addEventListener('DOMContentLoaded', function() {
    const priceSlider = document.getElementById('price-slider');
    const priceOutput = document.getElementById('price-output');
    const hotelTypeSelect = document.getElementById('hotel-type');
    const hotelCards = document.querySelectorAll('.hotel-card');

    // Initialize price slider
    noUiSlider.create(priceSlider, {
        start: [100, 50000],
        connect: true,
        range: {
            'min': 100,
            'max': 50000
        },
        step: 100
    });

    // Update output value and filter hotels when slider value changes
    priceSlider.noUiSlider.on('update', function(values, handle) {
        priceOutput.innerHTML = `₹${Math.round(values[0])} - ₹${Math.round(values[1])}`;
        filterHotels(+values[0], +values[1]);
    });

    // Initialize hotel type filter
    hotelTypeSelect.addEventListener('change', function() {
        const selectedHotelType = this.value.toLowerCase();

        hotelCards.forEach(card => {
            const cardHotelType = card.querySelector('p').textContent.toLowerCase();
            if (selectedHotelType === '' || selectedHotelType === 'select hotel type' || cardHotelType.includes(selectedHotelType)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Filter hotels based on price range
    function filterHotels(minPrice, maxPrice) {
    hotelCards.forEach(card => {
        const priceElement = card.querySelector('.price');
        const priceText = priceElement.textContent;
        const price = extractPrice(priceText);
        if (price >= minPrice && price <= maxPrice) {
            card.style.display = 'flex'; // Change display to flex
        } else {
            card.style.display = 'none';
        }
    });
}

    // Helper function to extract price from text content
    function extractPrice(text) {
        // Remove commas from the text and match any digit sequences
        const regex = /\d+/;
        // Find the first match (assuming it's the price)
        const match = text.replace(/,/g, '').match(regex);
        if (match) {
            // Convert the matched string to a number
            return parseFloat(match[0]);
        }
        // Return NaN if no match found
        return NaN;
    }
});