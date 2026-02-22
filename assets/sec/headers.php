<?php
header("X-Content-Type-Options: nosniff");
header("X-Frame-Options: DENY");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Content-Security-Policy: " .
    "default-src 'self'; " .
    "script-src 'self' https://code.jquery.com https://cdn.jsdelivr.net; " .
    "style-src 'self' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; " .
    "font-src https://cdnjs.cloudflare.com; " .
    "img-src 'self' data:; " .
    "connect-src 'self'; " .
    "frame-ancestors 'none';"
);
