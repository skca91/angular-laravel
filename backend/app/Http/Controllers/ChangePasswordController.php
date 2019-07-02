<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ChangePasswordRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\JsonResponse;
use App\User;

class ChangePasswordController extends Controller
{
    public function process(ChangePasswordRequest $request) {
        return $this->getPasswordResetTableRow($request) ? 
        $this->changePassword($request) : $this->tokenNotFoundResponse();
    }

    private function getPasswordResetTableRow($request) {
        return DB::table('password_resets')->where(
            [
                'email', $request->email,
                'token', $request->resetToken 
            ])->get();
    }

    public function changePassword($request) {
        $user = User::whereEmail($request->email)->first();
        $user->update(['password' => $request->password]);
        $this->getPasswordResetTableRow($request)->delete();
        return response()->json([
            'data' => 'La contrasenia ha sido cambiada exitosamente'
        ], Response::HTTP_CREATED);
    }

    public function tokenNotFoundResponse() {
        return response()->json([
            'error' => 'Token o correo electronico incorrecto'
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
