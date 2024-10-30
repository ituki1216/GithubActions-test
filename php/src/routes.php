use App\Http\Controllers\TodoController;

Route::get("/todos", [TodoContoroller::class, "index"]);　# todoにアクセスされたときにtodoデータを取得する
Route::post('/todos', [TodoController::class, 'store']);
Route::put('/todos/{id}', [TodoController::class, 'update']);
Route::delete('/todos/{id}', [TodoController::class, 'destroy']);　
