<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Extract form data
    $fname = isset($_POST['fname']) ? $_POST['fname'] : '';
    $lname = isset($_POST['lname']) ? $_POST['lname'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Email configuration
    $to = "sharma.p@somaiya.edu"; // Replace with your email address
    $subject = "Contact Form Submission from $fname $lname";
    $body = "First Name: $fname\n" .
            "Last Name: $lname\n" .
            "Email: $email\n\n" .
            "Message:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "<p>Thank you for your message. We will get back to you soon!</p>";
    } else {
        echo "<p>Sorry, something went wrong. Please try again later.</p>";
    }
} else {
    // If the request method is not POST, deny access
    echo "<p>Access denied!</p>";
}
?>
