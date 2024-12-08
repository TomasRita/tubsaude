<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'TubSaude')</title>
    <link rel="stylesheet" href="{{ asset('css/Global.css') }}">
    <link rel="stylesheet" href="{{ asset('css/modal.css') }}">
    <link rel="stylesheet" href="{{ asset('css/header.css') }}">
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
    <link rel="stylesheet" href="{{ asset('css/footer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/loading.css') }}">
    <link rel="stylesheet" href="{{ asset('fontwesome/fontawesome-free-6.5.2-web/css/all.css') }}">
</head>
<body>   
        @include('loading.loading')
        @include('templates.sucess')
        <header>
            @include('templates.header')
        </header>
            @include('templates.modal')
        <main>
            
            @yield('content')

            @if(Request::path()==='/')
              @include('templates.footer')
            @endif
        </main>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="{{ asset('js/html2pdf.bundle.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
    <script src="{{ asset('js/loading.js') }}"></script>
    <script type="module" src="{{ asset('app.js') }}" defer></script>
    <script type="module" src="{{ asset('js/profile.js') }}" defer></script>
    <script src="{{ asset('js/loading.js') }}"></script>
    <script src="{{ asset('js/jspdf.debug.js') }}"></script>
</body>
</html>