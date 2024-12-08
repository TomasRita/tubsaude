<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AdminController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/MarcarConsulta', [HomeController::class, 'marcarconsulta'])->name('MarcarConsulta');
Route::get('/Dashboard', [AdminController::class, 'index'])->name('Dashboard');
Route::get('/Chat', [AdminController::class, 'Chat'])->name('Chat');
Route::get('/Notification', [AdminController::class, 'Notification'])->name('Notification');
Route::get('/Pendente', [AdminController::class, 'Pendente'])->name('Pendente');
Route::get('/profile', [HomeController::class, 'profile'])->name('profile');
Route::get('/not found', [HomeController::class, 'err'])->name('err');
Route::post('/logout', [LoginController::class, 'logout'])->name('login.logout');
