<?php

function editLoginPage()
{
    $upload_dir = wp_get_upload_dir();
    $attachment_url = $upload_dir['baseurl'] . '/2024/05/admin-logo.png';
?>

    <style type="text/css">
        #login h1 a {
            background-image: url(<?php echo esc_url($attachment_url); ?>);
            display: block;
            width: 20rem;
            height: 6rem;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            margin: 0 auto 10px;
        }

        #login,
        #nav,
        #backtoblog,
        .language-switcher {
            z-index: 5;
            position: relative;
        }

        .login:before {
            content: "";
            top: 0;
            left: 0;
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-color: rgba(51, 168, 222, 0.55);
            opacity: 1;
            backdrop-filter: blur(10px);
        }
    </style>
<?php
}

add_action('login_enqueue_scripts', 'editLoginPage');
