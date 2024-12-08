<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'TubSaude')</title>
    <link rel="stylesheet" href="{{ asset('admin_css/global.css') }}">
    <link rel="stylesheet" href="{{ asset('admin_css/Pendente.css') }}">
    <link rel="stylesheet" href="{{ asset('admin_css/notification.css') }}">
    <link rel="stylesheet" href="{{ asset('admin_css/modal.css') }}">
    <link rel="stylesheet" href="{{ asset('admin_css/header.css') }}">
    <link rel="stylesheet" href="{{ asset('admin_css/dashboard.css') }}">
    <link rel="stylesheet" href="{{ asset('fontwesome/fontawesome-free-6.5.2-web/css/all.css') }}">
</head>
<body>  

        <header>
            @include('admin.templates.header')
        </header>
            @include('admin.templates.modal')
        <main>
            @yield('content')
        </main>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script type="module" src="{{ asset('app.js') }}" defer></script>
    <script type="module" src="{{ asset('admin_js/dashboard.js') }}" defer></script>
    <script type="module" src="{{ asset('admin_js/notification.js') }}" defer></script>
    <script type="module" src="{{ asset('admin_js/chat.js') }}" defer></script>
    <script type="module" src="{{ asset('admin_js/Pendente.js') }}" defer></script>
</body>
</html>
