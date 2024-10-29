<?php

class Database {
    private $host = 'localhost';
    private $db_name = 'EC_yamanaka_site';　// データベースクラスの定義
    private $username = 'root';
    private $password = '???';
    private $connection;
}
    public function connect() {
        $this->connection = null;　// 接続はまだ確立していない　  $this->connection: データベース操作
        try {
            $this->connection = new PDO("mysql:host={$this->host};dbname={$this->db_name}", $this->username, $this->password);　// new PDOを使用してホスト、データベース、パスワードの接続を試す
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();　// ここでエラーハンドリング
        }
        return $this->connection;
    }
}

class Product {
    private $db;

    public function __construct($database) {
        $this->db = $database;
    }

    // 全兵信の取得
    public function getAllProduct() {
        $stmt = $this->db->prepare("SELECT * FROM products");
        $stmt->excute();
        return $stmt->feachAll(PDO::FEACH_ASSOC);
    }
