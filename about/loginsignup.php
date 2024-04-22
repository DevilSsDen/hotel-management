<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db_name = 'test2';

$conn = new mysqli($host, $user, $pass, $db_name);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function sanitize_input($input) {
    global $conn;
    return mysqli_real_escape_string($conn, htmlspecialchars($input));
}

function hash_password($password) {
    return password_hash($password, PASSWORD_DEFAULT);
}

function verify_password($password, $hashed_password) {
    return password_verify($password, $hashed_password);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $username = sanitize_input($_POST['username']);
    $password = hash_password($_POST['password']);
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "Signup successful";

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

}
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $username = sanitize_input($_POST['username']);
    $password = sanitize_input($_POST['password']);

    $sql = "SELECT id, username, password FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (verify_password($password, $row['password'])) {
                echo "<script>alert('Login successful');</script>";
            } else {
                echo "<script>alert('Incorrect password');</script>";
            }
        } else {
            echo "<script>alert('User not found');</script>";
        }
    } else {
        echo "<script>alert('Error: " . $conn->error . "');</script>";
    }
}
$conn->close();
?>