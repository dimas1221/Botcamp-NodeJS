create table a1(
id_a int,
	name_a varchar(125),
	alamat_a varchar(125),
	constraint id_a_pk primary key (id_a)
)
insert into a1 
values
(
1, 'ahmad', 'brebes'
),
(
2, 'adi', 'tegal'
)

select * from a1
update a1 set name_a ='dimas' where id_a =1
delete from a1 where id_a = 2

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50),
	last_name VARCHAR (50),
	birth_date DATE CHECK (birth_date > '1900-01-01'),
	joined_date DATE CHECK (joined_date > birth_date),
	salary numeric CHECK(salary > 0)
);