CREATE DATABASE commercedb;

CREATE TABLE product( 
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255),
    product_price NUMERIC(10,2)
);

CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    address_line1 VARCHAR(255),
    address_line2 VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zip_code VARCHAR(10)
);

CREATE TABLE product_order(
    product_order_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customer(customer_id),
    product_id INTEGER REFERENCES product(product_id),
    quantity INTEGER,
    product_order_date TIMESTAMP DEFAULT NOW()
);