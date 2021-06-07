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

        $user = User::find(auth()->user()->id);
        $counter = $user['login_counter'] + 1;
        $user->update(['login_counter' => $counter]);
        
        return ['user' => $token];
    }

    public function create(Request $request) {
        try {
            User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
            ]);

            $login = $this->login($request);

            return $login;
        } catch(\Illuminate\Database\QueryException $e) {
            return ['Error' => 'The email address might already be in use. Try to log in or use a different one'];
        }
    }

    public function getUserData(Request $request) {
        return auth()->user();
    }

    private function addToCounter() {

    }
}
