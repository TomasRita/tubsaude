<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;

class LoginController extends Controller
{
    
    public function profile(){
        return view('profile');
    }
    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

}
