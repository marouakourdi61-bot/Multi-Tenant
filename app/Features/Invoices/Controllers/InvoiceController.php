<?php
namespace App\Features\Invoices\Controllers;

use App\Http\Controllers\Controller;

use App\Features\Invoices\Models\Invoice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::latest()->get();

        return Inertia::render('Features/Invoices/Pages/Index', [
            'invoices' => [],
        ]);
    }

    public function create()
    {
        return Inertia::render('Features/Invoices/Pages/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'invoice_number' => 'required',
            'client_name' => 'required',
            'total' => 'required|numeric',
            'status' => 'required',
            'issue_date' => 'required|date',
            'due_date' => 'required|date',
        ]);

        $data['user_id'] = auth()->id();

        Invoice::create($data);

        return redirect()->route('invoices.index');
    }
}