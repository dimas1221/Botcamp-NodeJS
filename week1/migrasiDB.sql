create extension dblink

create foreign data wrapper postgres;
create server localhost foreign data wrapper postgres 
options (hostaddr'127.0.0.1', dbname'latihan2');

create user mapping for postgres server localhost
options(user'postgres', password '12345678')

select dblink_connect('localhost')

insert into shippers (ship_id, ship_name, ship_phone)
select * from dblink
('localhost', 'select shipper_id, company_name, phone from shippers')
as data(ship_id integer, ship_name varchar(40), ship_phone varchar(24))

insert into customers (cust_id, cust_name, cust_city)
select * from dblink
('localhost', 'select customer_id, contact_name, city from customers')
as data(cust_id char(100), cust_name varchar(40), cust_city varchar(15))

insert into suppliers (supr_id, supr_name, supr_contact_name ,supr_city)
select * from dblink
('localhost', 'select supplier_id, company_name ,contact_name, city from suppliers')
as data(supr_id integer, supr_name varchar(40),supr_contact_name varchar(30), supr_city varchar(15))

insert into products (prod_id, prod_name, prod_quantity, prod_price, prod_in_stock,
					 prod_on_order, prod_reorder_level, prod_discontinued, prod_cate_id,
					 prod_supr_id)
select * from dblink
('localhost', 'select product_id, product_name, quantity_per_unit, unit_price,
 units_in_stock, units_on_order, reorder_level, discontinued, category_id, supplier_id from products')
as data(prod_id integer, prod_name varchar(40), prod_quantity varchar(20), 
		prod_price money, prod_in_stock smallint,
		prod_on_order smallint, prod_reorder_level smallint, proud_dicontinued bit,
	    prod_cate_id integer, prod_supr_id integer)

insert into categories (cate_id, cate_name, cate_description)
select * from dblink
('localhost', 'select category_id, category_name ,description from categories')
as data(cate_id integer, cate_name varchar(15), cate_description text)


insert into orders (order_id, order_date, order_required_date, order_shipped_date
				   ,order_freight, order_subtotal, order_total_qty, order_ship_city
				   ,order_ship_address, order_employee_id
				   ,order_ship_id, order_cust_id)
select * from dblink
('localhost', 'select o.order_id, o.order_date ,o.required_date, o.shipped_date
 ,o.freight,(sum(d.unit_price) * sum(d.quantity)),sum(d.quantity), o.ship_city,o.ship_address
 ,o.employee_id, o.ship_via, o.customer_id from orders o inner join order_details d
 on o.order_id=d.order_id group by o.order_id')
as data(order_id  integer, order_date timestamp, order_required_date timestamp
		,order_shipped_date timestamp,order_freight money, order_subtotal money, order_total_qty smallint
		,order_ship_city varchar(15) ,order_ship_address varchar(60)
		,order_employee_id integer, order_ship_id integer, order_cust_id char(100))
select * from orders
