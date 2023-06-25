<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Kit;
use App\Models\Patient;
use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;


class PatientController extends Controller
{
    use AuthorizesRequests, ValidatesRequests;

    // Get all patients
    public function getAllPatients()
    {
        $patients = Patient::all();

        return response()->json($patients);
    }

    // Get Patient by email
    public function getPatientByEmail($email)
    {
        $patient = Patient::where('email', $email)->first();

        if (!$patient) {
            // Handle the case where the patient with the given email was not found
            return response()->json([], 404);
        }

        return response()->json($patient);
    }


    // Create new Patient
    public function create(Request $request)
    {
        $email = $request->input('email');

        $existingPatient = Patient::where('email', $email)->first();

        if ($existingPatient) {
            return response()->json(['message' => 'Patient with this email already exists'], 409);
        }

        $patient = new Patient();
        $patient->name = $request->input('name');
        $patient->surname = $request->input('surname');
        $patient->email = $email;
        $patient->phone_number = $request->input('phone_number');
        $patient->address = $request->input('address');
        $patient->save();

        return response()->json(['message' => 'Patient added successfully'], 200);
    }

}