<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{
    OrderController,
    PatientController,
    KitController};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Orders
Route::get('/orders', [OrderController::class, 'getAllOrders'] );
Route::get('/orders/{id}', [OrderController::class, 'getOrder']);
Route::post('/orders/create', [OrderController::class, 'create']);

// Kits
Route::get('/kits', [KitController::class, 'getAllKits'] );
Route::get('/kit/{id}', [KitController::class, 'getKitById']);
Route::post('/kit/create', [KitController::class, 'create']);

// Patient
Route::get('/patient', [PatientController::class, 'getAllPatients'] );
Route::get('/patient/{email}', [PatientController::class, 'getPatientByEmail']);
Route::post('/patient/create', [PatientController::class, 'create']);
