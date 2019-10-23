# Laravel

## Features

1. Inbuilt CRSF (cross-site request forgery ) Protection.
2. Inbuilt paginations
3. Reverse Routing
4. Query builder
5. Route caching
6. Database Migration
7. IOC (Inverse of Control) Container Or service container.

## General 

1. `named routes` - `Route::post('reset',          ['as'=>'reset.generate', 'uses'=>'HomeController@generateToken']);`
2. `Route resource` - `  Route::resource('distributor', 'DistributorController', ['expect' => ['show']]);`
3. `Service provider` - Are central place where all laravel application is bootstrapped. `AppServiceProvider.php`
4. `Dependancy injection` - In software engineering, dependency injection is a technique whereby one object supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. Usually done in `__construct()`.
5. `Relationship` - Between eloquent
   1. `One to one` - hasOne('table_name', 'foreign_key', 'primary_key')
   2. `Many to one` - hasMany('table_name', 'foreign_key', 'primary_key')
   3. `One to many` - belongsTo('table_name', 'foreign_key', 'primary_key')
   4. `Many to many` - belongsToMany(...)
6. **Aggregates method** - count(), max(), min(), avg(), sum()