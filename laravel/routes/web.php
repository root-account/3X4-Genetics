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

Route::get('/orders', [OrderController::class, 'getAllOrders'] );
Route::get('/orders/{id}', [OrderController::class, 'getOrder']);
Route::post('/orders/create', [OrderController::class, 'create']);
