<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h2>Debugging: Received Data</h2>";
echo "<pre>";
print_r($_POST);
echo "</pre>";

// Check if form is submitted correctly
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_POST["payment-method"]) || !isset($_POST["amount"])) {
        die("<p>Error: Missing required fields. <a href='payment.html'>Go Back</a></p>");
    }

    $paymentMethod = $_POST["payment-method"];
    $amount = $_POST["amount"];

    echo "<h2>Payment Details</h2>";
    echo "<p><strong>Method:</strong> " . htmlspecialchars($paymentMethod) . "</p>";
    echo "<p><strong>Amount:</strong> " . htmlspecialchars($amount) . "</p>";

    if ($paymentMethod === "crypto") {
        $cryptoType = $_POST["crypto-type"] ?? "";
        echo "<p><strong>Crypto Type:</strong> " . htmlspecialchars($cryptoType) . "</p>";
    }

    if ($paymentMethod === "nigeria-bank") {
        $bankName = $_POST["bank-name"] ?? "";
        echo "<p><strong>Bank:</strong> " . htmlspecialchars($bankName) . "</p>";
    }

    echo "<p><a href='payment.html'>Go Back</a></p>";
} else {
    echo "<p>Error: Invalid Request. <a href='payment.html'>Go Back</a></p>";
}
?>
