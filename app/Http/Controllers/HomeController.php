<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Show the application homepage.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    
     public function index()
     {
         return view('home');
     }
     public function marcarconsulta(){
         return view('MarcarConsulta');
     }
     public function profile(){
         return view('profile');
     }
     public function err(){
        return view('err');
    }
}
