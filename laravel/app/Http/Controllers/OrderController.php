<?php

namespace App\Http\Controllers;
use App\Order;
use App\Kit;
use App\Patient;
use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class OrderController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function index()
    {
        $orders = Order::orderBy('created_at', 'desc')->get();

        // return view('orders.index', compact('orders'));

    }

    public function show(Order $order)
    {
        return view('orders.show', compact('order'));
    }

    public function create()
    {
        $kits = Kit::all();
        // return view('orders.create', compact('kits'));

    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kit_id' => 'required',
            'patient_name' => 'required',
            'patient_email' => 'required|email',
            'paid' => 'required|boolean',
        ]);

        $patient = Patient::firstOrCreate(['email' => $validatedData['patient_email']], ['name' => $validatedData['patient_name']]);
        
        $order = new Order;
        $order->kit_id = $validatedData['kit_id'];
        $order->patient_id = $patient->id;
        $order->paid = $validatedData['paid'];
        $order->save();

        // return redirect('/orders')->with('success', 'Order created successfully.');
    }

}