<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('invoices', function (Blueprint $table) {

            
            $table->string('recipient')->nullable()->after('client_name');

            
            $table->string('currency')->default('MAD')->after('recipient');
            $table->boolean('vat')->default(false)->after('currency');

         
            $table->json('items')->nullable()->after('vat');

            
            $table->text('notes')->nullable()->after('items');
            $table->text('concluding_text')->nullable()->after('notes');
        });
    }

    public function down(): void
    {
        Schema::table('invoices', function (Blueprint $table) {

            $table->dropColumn([
                'recipient',
                'currency',
                'vat',
                'items',
                'notes',
                'concluding_text',
            ]);

        });
    }
};