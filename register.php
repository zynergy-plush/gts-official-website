<?php
require 'config.php';
require 'includes/auth.php';

$topProjectsStmt = $pdo->prepare("
    SELECT id, title, summary, details, media, media_type, category
    FROM projects
    WHERE is_top_project = 1
      AND is_visible = 1
    ORDER BY created_at DESC
");

$topProjectsStmt->execute();
$topProjects = $topProjectsStmt->fetchAll(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Register | GTS</title>

    <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
    >

    <link rel="stylesheet" href="css/style-register.css">
    <link rel="stylesheet" href="css/style-auth.css">
    <link rel="stylesheet" href="css/style-global.css">

    
    <link
        rel="shortcut icon"
        href="images/Main Logo Circular.png"
        type="image/x-icon"
    >

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    >

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</head>

<body>

    <?php require 'includes/background.php'; ?>

    <?php if (isAdmin()): ?>
        <?php require 'includes/header_loggedin.php'; ?>
    <?php else: ?>
        <?php require 'includes/header.php';     ?>
    <?php endif; ?>

    <main class="registration-page">
        <section class="registration-container" aria-labelledby="registration-title">
            <div class="registration-heading">
                <h1 id="registration-title">Registration</h1>
                <p>Select a form below to get started.</p>
            </div>

            <div class="registration-links">
                <!-- Replace these placeholder paths with your actual form links. -->

                <a href="delegate-registration.php" class="registration-card">
                    <span class="registration-icon" aria-hidden="true">
                        <i class="bx bx-user-plus"></i>
                    </span>

                    <span class="registration-label">
                        Delegate Registration Form
                    </span>

                    <i class="bx bx-right-arrow-alt registration-arrow"
                    aria-hidden="true"></i>
                </a>

                <a href="payment-confirmation.php" class="registration-card">
                    <span class="registration-icon" aria-hidden="true">
                        <i class="bx bx-credit-card"></i>
                    </span>

                    <span class="registration-label">
                        Payment Confirmation Form
                    </span>

                    <i class="bx bx-right-arrow-alt registration-arrow"
                    aria-hidden="true"></i>
                </a>

                <a href="campus-ambassador-registration.php" class="registration-card">
                    <span class="registration-icon" aria-hidden="true">
                        <i class="bx bx-group"></i>
                    </span>

                    <span class="registration-label">
                        Campus Ambassador Registration Form
                    </span>

                    <i class="bx bx-right-arrow-alt registration-arrow"
                    aria-hidden="true"></i>
                </a>

                <a href="executive-board-registration.php" class="registration-card">
                    <span class="registration-icon" aria-hidden="true">
                        <i class="bx bx-briefcase"></i>
                    </span>

                    <span class="registration-label">
                        Executive Board Registration Form
                    </span>

                    <i class="bx bx-right-arrow-alt registration-arrow"
                    aria-hidden="true"></i>
                </a>
            </div>
        </section>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="js/script-home.js"></script>
    <script src="js/script-global.js"></script>


</body>
</html>
