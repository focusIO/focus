function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation
    try {
        const selectedFruits = Array.from(document.getElementById('fruits').selectedOptions);
        if (selectedFruits.length === 0) {
            throw new Error("Please select at least one fruit.");
        }

        // If validation passes, you can proceed with form submission
        alert("Form submitted successfully with: " + selectedFruits.map(option => option.value).join(", "));
        // Here you would typically submit the form or send data via AJAX
        // document.getElementById('fruitForm').submit(); // Uncomment to submit
    } catch (error) {
        alert(error.message); // Show error message
    }
}