<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('Dashboard');
    }
    public function Chat()
    {
        return view('Chat');
    }

    public function Pendente()
    {
        return view('Pendente');
    }

    public function Notification()
    {
        return view('Notification');
    }
}
