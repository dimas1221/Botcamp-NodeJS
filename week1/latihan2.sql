create table supplier(
supplier_id smallint,
	company_name varchar(40),
	contact_name varchar(30),
	contact_title varchar(30),
	address varchar(60),
	city varchar(15),
	region varchar(15),
	postal_code varchar(10),
	country varchar(15),
	phone varchar(24),
	fax varchar(24),
	homepage text,
constraint supplier_id_pk primary key (supplier_id)
)

create table products(
product_id smallint,
	product_name varchar(40),
	quantity_per_unit varchar (40),
	unit_price real,
	units_in_stock smallint,
	units_in_order smallint,
	reorder_level smallint,
	discontinued int,
	supplier_id smallint,
	category_id smallint,
constraint product_id_pk primary key (product_id)
)

alter table products
    add constraint fk_supplier_id foreign key (supplier_id)
	references supplier(supplier_id)

alter table products
	add constraint fk_category_id foreign key (category_id)
	references categories (category_id)

create table categories(
category_id smallint,
	category_name varchar(15),
	description text,
	picture int,
constraint category_id_pk primary key (category_id)
)

create table orders(
order_id smallint,
	order_date date,
	required_date date,
	shipped_date date,
	freight real,
	ship_name varchar(40),
	ship_address varchar(60),
	ship_city varchar(15),
	ship_region varchar(15),
	ship_postal_code varchar(10),
	ship_country varchar(15),
employee_id smallint,
customer_id smallint,
ship_via smallint,
	
	constraint order_id_pk primary key (order_id)
)
alter table orders
add constraint fk_ship_via foreign key (ship_via)
references shippers (shipper_id)

alter table orders
add constraint fk_customer_id foreign key(customer_id)
references customers(customer_id)

alter table orders
add constraint fk_employee_id foreign key(employee_id)
references employees(employee_id)

create table order_detail(
order_id smallint,
product_id smallint,
	unit_price real,
	quantity smallint,
	discount real,
constraint order_detail_id_pk primary key (order_id, product_id)
)
alter table order_detail
add constraint fk_order_id foreign key (order_id)
references orders (order_id)

alter table order_detail
add constraint fk_product_id foreign key (product_id)
references products (product_id)

create table shippers(
shipper_id smallint,
	company_name varchar(40),
	phone varchar(24),
constraint shipper_id_pk primary key (shipper_id)
)

create table customers(
customer_id char,
	company_name varchar(40),
	contact_name varchar(30),
	contact_title varchar(30),
	address varchar(60),
	city varchar(15),
	region varchar(15),
	postal_code varchar (10),
	country varchar (15),
	phone varchar(24),
	fax varchar(24),
constraint customer_id_pk primary key(customer_id)
)

create table employees(
employee_id smallint,
	last_name varchar(20),
	first_name varchar(20),
	title varchar(30),
	title_of_courtesy varchar(25),
	birth_date date,
	hire_date date,
	address varchar(60),
	city varchar(15),
	region varchar(15),
	postal_code varchar(10),
	country varchar(15),
	home_phone varchar(24),
	extension varchar(24),
	photo int,
	notes text,
	reports_to smallint,
	photo_path varchar(255),
constraint employee_id_pk primary key(employee_id)
)