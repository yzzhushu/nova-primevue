<?php

namespace Jshxl\Primevue;

use Laravel\Nova\Nova;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;

class AssetServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('primevue', __DIR__ . '/../dist/js/asset.js');
//            Nova::style('primevue', __DIR__ . '/../dist/css/asset.css');
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
