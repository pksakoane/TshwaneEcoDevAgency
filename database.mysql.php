<?php

require_once 'dbconfig.php';

$className = 'databaseMysql';

class databaseMysql
{

    public $database;
    public $statement;
    public $returnException = 'Something went wrong.';

    /**
     * Used by the engine to start a connection to the database server
     */
    public function __construct()
    {

        try {

            $this->database = new PDO('mysql:host=' . DB_HOSTNAME . ';dbname=' . DB_DATABASE, DB_USERNAME, DB_PASSWORD);
            $this->database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'ERROR: ' . $e->getMessage() . "\n";
        }
    }

    /**
     * Executes a SQL statement
     *
     * @param  $type        int     Type of SQL statement, 0 for SELECT, 1 for INSERT, 2 for UPDATE, 3 for DELETE
     * @param  $query       string  The SQL query
     * @param  $inputArray  array   An array of input data to be prepared before used in the query
     * @return              mixed   If SELECT - returns an array of the results
     *                              If INSERT - returns the newly inserted row ID, 0 if the insert failed
     *                              Otherwise - returns true if the statement executed successfully, false otherwise
     */
    public function query($type = 0, $query, $inputArray = array(), $limitArray = array())
    {
        try {

            // Prepare the statement
            $this->statement = $this->database->prepare($query);

            if (!empty($inputArray)) {
                foreach ($inputArray as $key => $value) {
                    //error_log($key."=>".$value."\n");
                    $this->statement->bindValue($key, $value);
                }
            }

            // Bind the limit values if there are any
            if (!empty($limitArray)) {
                foreach ($limitArray as $key => $value) {
                    $this->statement->bindValue($key, (int) $value, PDO::PARAM_INT);
                }
            }

            // Execute the statement
            $result = $this->statement->execute();

            if ($type == 0) {

                // SELECT statement
                // Return an array of the results
                return $this->statement->fetchAll(PDO::FETCH_ASSOC);

            } else if ($type == 1) {
                // INSERT statement
                // Return the ID of the row inserted if successful, 0 otherwise
                return $this->database->lastInsertId();
            } else {
                // UPDATE OR DELETE statement
                // return if successful or not
                return $result;
            }
        } catch (PDOException $e) {
            error_log('SQL-ERROR: ' . $e->getMessage(), 0);
            error_log('SQL-ERROR-QUERY: ' . $query, 0);
            return $this->returnException;
        }
    }

    /**
     * Return rowcount
     *
     * @return int count
     */
    public function rowCount()
    {
        try {
            return $this->statement->rowCount();
        } catch (PDOException $e) {
            error_log('SQL-ERROR: ' . $e->getMessage(), 0);
            return $this->returnException;
        }

    }

    /**
     * Being Database transaction
     *
     * @return void
     */
    public function beginTransaction()
    {
        try {
            return $this->database->beginTransaction();
        } catch (PDOException $e) {
            error_log('SQL-ERROR: ' . $e->getMessage(), 0);
            return false;
        }
    }

    /**
     * Commit to database
     *
     * @return bool
     */
    public function commit()
    {
        try {
            return $this->database->commit();
        } catch (PDOException $e) {
            // Something failed? Rollback instead
            $this->database->rollBack();
            error_log('SQL-ERROR: ' . $e->getMessage(), 0);
        }
    }

    /**
     * Rollback a transaction to the database
     *
     * @return bool
     */
    public function rollBack()
    {
        try {
            return $this->database->rollBack();
        } catch (PDOException $e) {
            error_log('SQL-ERROR: ' . $e->getMessage(), 0);
        }
    }

}
