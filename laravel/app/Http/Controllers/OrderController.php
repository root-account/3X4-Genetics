<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Kit;
use App\Models\Patient;
use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;


class OrderController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    // Get all orders
    public function getAllOrders()
    {
        $orders = Order::with('kit', 'patient')->orderBy('created_at', 'desc')->get();

        return response()->json($orders, 200);
    }

    // Get order by ID
    public function getOrder($id)
    {
        $order = Order::with('kit', 'patient')->find($id);

        return response()->json($order, 200);
    }

    // Create Order
    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'kit_id' => 'required',
            'patient_email' => 'required|email',
            'paid' => 'required|boolean',
        ]);

        $patient = Patient::firstOrCreate(['email' => $validatedData['patient_email']], ['name' => $request->patient_name]);
        
        $paid = 0;
        if($validatedData['paid']) {
            $paid = 1;
        }

        $order = new Order;
        $order->kit_id = $validatedData['kit_id'];
        $order->patient_id = $patient->id;
        $order->paid = $paid;
        $order->save();

        return response()->json(['message' => 'Order created.'], 200);
    }

}