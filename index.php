<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

        <form action="index.php" method="post">

            <label for="fname">Full Name:</label>
                <input type="text" id="fname" name="fname" maxlength="50" required><br><br>
            
            <label for="age">Age:</label>
                <input type="number" id="age" name="age" maxlength="3" required><br><br>

            <label for="course">Course:</label>
                <input type="text" id="course" name="course" maxlength="50" required><br><br>

            <label for="add">Address:</label>
                <input type="text" id="add" name="address" maxlength="100" required><br><br>

            <label for="sex">Sex:</label>
                <input type="text" id="sex" name="sex"  maxlength="1" required><br><br>

            <input type="submit" value="Add Student">
            </form>

</body>
</html>

<?php

$host = "localhost";
$dbname = "my_database";
$username = "root";
$password = "";


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "<br>Connected successfully!";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


try {
    $result = $conn->query("SELECT * FROM user"); 
    if ($result) {
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo "Fullname: " . $row['fname'] . "<br>";
            echo "Age: " . $row['age'] . "<br>";
            echo "Course: " . $row['course'] . "<br>";
            echo "Address: " . $row['address'] . "<br>";
            echo "Sex: ". $row['sex']. "<br>";
        }
    } else {
        echo "No data found in the users table.";
    }
} catch (PDOException $e) {
    echo "Query failed: " . $e->getMessage();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fname = $_POST['fname'];
    $age = $_POST['age'];
    $course = $_POST['course'];
    $address = $_POST['address'];
    $sex = $_POST['sex'];

    try {
        $stmt = $conn->prepare("INSERT INTO user (fname, age, course, address, sex) VALUES (:fname, :age, :course, :address, :sex)"); 
        $stmt->bindParam(':fname', $fname);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':course', $course);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':sex', $sex);

        $stmt->execute();
        echo "<br>New student added successfully!<br><br>";
    } catch (PDOException $e) {
        echo "Insert failed: " . $e->getMessage();
    }
}

?>

