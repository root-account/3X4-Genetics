<?php
namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\OrderController;
use App\Models\Order;
use App\Models\Kit;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrderControllerTest extends TestCase
{
    public function testGetAllOrders()
    {
         //assertions
        $response = $this->get('/api/orders');
        $response->assertOk();
    }

    public function testGetOrderById()
    {
        $order = Order::factory()->create();
        $response = $this->get('/api/orders/'.$order->id);
        $response->assertOk();
    }

    public function testCreateOrder()
    {

        // Get kit and patient 
        $kit = Kit::factory()->create();
        $patient = Patient::factory()->create();

        // assertions
        $orderData = Order::factory()->raw([
                'kit_id' => $kit->id,
                'patient_id' => $patient->id,
                'paid' => 1,
                'patient_email' => 'test@example.com',
                'patient_name' => 'John Doe',
            ]);
        $response = $this->post('/api/orders/create', $orderData);
        $response->assertOk();
    }
}