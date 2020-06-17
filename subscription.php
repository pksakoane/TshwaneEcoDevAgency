<?php

include 'database.mysql.php';
$database = new databaseMysql();

$user_name = isset($_POST['text']) ? $_POST['text'] : '';
$user_name = trim(strip_tags($user_name));

$user_email = isset($_POST['email']) ? $_POST['email'] : '';
$user_email = trim(strip_tags($user_email));

$error_message = "";
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

if(!preg_match($email_exp,$user_email)) {
    $error_message .= 'The Email address entered is not valid.'.'<br>';
}

$string_exp = "/^[A-Za-z .'-]+$/";
$exp_space = '<br>';

if(!preg_match($string_exp,$user_name)) {
    $error_message .= 'The First Name entered is not valid.';
}

if(strlen($error_message) > 0) {
    echo @json_encode(array(response => $error_message, type => "error"));
    return;
}

// Insert the chat into the chats table
$query = "INSERT INTO subscription (`subscription_user_name`, `subscription_user_email`) VALUES (:subscription_user_name, :subscription_user_email)";

// Defining and assigning the field values that will be saved
$inputs = array(
    ':subscription_user_name' => $user_name,
    ':subscription_user_email' => $user_email
);

// --- Post the message to the chats table. If successful then update User Rank then update Memcache
$messageID = $database->query(1, $query, $inputs);
if ($messageID) {
    echo @json_encode(array(response => 'Details saved.', type => "success"));
    return;

} else {
    echo @json_encode(array(response => 'Error saving details!', type => "success"));
    return;
}