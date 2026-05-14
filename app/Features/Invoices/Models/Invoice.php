<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [
        'user_id',
        'invoice_number',
        'client_name',
        'total',
        'status',
        'issue_date',
        'due_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}