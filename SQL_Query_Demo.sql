/* --------------------------------------------------------------------------------
 * SQL Query Skills Assessment
 *
 * Task:
 * Given two tables ‘customer’ and ‘broker’. Write an SQL query to generate a
 * summary of how many customers are under a particular broker. The results should
 * be sorted from high to low number of customers. If brokers have the same number
 * of customers, then sort alphabetically. The result should list the broker name
 * followed by the customer count.
 * -------------------------------------------------------------------------------- */

SELECT broker.name, COUNT(*) AS num_customers FROM customer
JOIN broker
ON broker.id = customer.broker_id
GROUP BY broker.id
ORDER BY num_customers DESC, broker.name ASC;
