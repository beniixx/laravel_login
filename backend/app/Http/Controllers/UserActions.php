<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserActions extends Controller
{
    public function login(Request $request) {
        $credentials = $request->only(['email', 'password']);
        $token = auth()->attempt($credentials);

        return $token;
    }

    public function create(Request $request) {
        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);
    }

    public function getUserData(Request $request) {
        return auth()->user();
    }
}
