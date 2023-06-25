<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Kit;
use App\Models\Patient;
use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;


class KitController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;


    // Get all the Kits
    public function getAllKits()
    {
        $kits = Kit::all();

        return response()->json($kits);
    }

    // Get kit by ID
    public function getKitById($id)
    {
        $kit = Kit::find($id);

        if (!$kit) {
            return response()->json(['message' => 'Kit not found'], 404);
        }

        return response()->json($kit);
    }

    // Add new Kit
    public function addNewKit(Request $request)
    {
        $kit = new Kit();
        $kit->name = $request->input('name');
        $kit->price = $request->input('price');
        $kit->description = $request->input('description');
        $kit->save();

        return response()->json(['message' => 'Kit added successfully'], 201);
    }

}