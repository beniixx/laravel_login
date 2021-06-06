<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserActions;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/user/create', [UserActions::class, 'create']);
Route::post('/user/login', [UserActions::class, 'login']);
Route::middleware('auth')->get('/user/user', [UserActions::class, 'getUserData']);