<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{
    OrderController,
    PatientController,
    KitController};


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/token', function () {
    return csrf_token(); 
});

// Orders
Route::get('/orders', [OrderController::class, 'getAllOrders'] );
Route::get('/orders/{id}', [OrderController::class, 'getOrder']);
Route::post('/orders/create', [OrderController::class, 'create']);

// Kits
Route::get('/kit', [OrderController::class, 'getAllKits'] );
Route::get('/kit/{id}', [OrderController::class, 'getKitById']);
Route::post('/kit/create', [OrderController::class, 'create']);

// Patient
Route::get('/patient', [OrderController::class, 'getAllPatients'] );
Route::get('/patient/{email}', [OrderController::class, 'getPatientByEmail']);
Route::post('/patient/create', [OrderController::class, 'create']);
