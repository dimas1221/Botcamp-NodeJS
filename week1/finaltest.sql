create or replace procedure production.upproduct(
			p_product int,
			u_name varchar,
			u_productnumber varchar,
			u_color varchar,
			u_safetystocklevel smallint,
			u_listprice numeric,
			u_standardcost numeric,
			u_size varchar,
			u_sizeunitmeasurecode char,
			u_weightunitmeasurecode char,
			u_weight numeric,
			u_daystomanufacture int,
			u_productline char,
			u_class char,
			u_style char,
			u_productsubcategoryid int,
			u_productmodelid int,
			u_makeflag boolean,
			u_finishedgoodsflag boolean,
			u_sellstartdate timestamp,
			u_sellenddate timestamp,
			u_discontinuedate timestamp		
)
language plpgsql
as $$
begin 	
	update production.product
		set
			name=u_name,
			productnumber=u_productnumber,
			color=u_color,
			safetystocklevel=u_safetystocklevel,
			listprice=u_listprice,
			standardcost=u_standardcost,
			size =u_size,
			sizeunitmeasurecode=u_sizeunitmeasurecode,
			weightunitmeasurecode=u_weightunitmeasurecode,
			weight=u_weight,
			daystomanufacture=u_daystomanufacture,
			productline=u_productline,
			class=u_class,
			style=u_style,
			productsubcategoryid=u_productsubcategoryid,
			productmodelid=u_productmodelid,
			makeflag=u_makeflag,
			finishedgoodsflag=u_finishedgoodsflag,
			sellstartdate=u_sellstartdate,
			sellenddate=u_sellenddate,
			discontinueddate=u_discontinuedate	
		where productid =p_product;
		commit;
	end;$$	
 	call production.upproduct(1,'ab','AR-5381','blue','10',12,12,'m','CM','CM',5.5,2,'S','L','U',13,11,true,true,
				   '2009-04-30 00:00:00','2019-04-30 00:00:00','2009-04-30 00:00:00')
-- 	---------------------------------------
create or replace procedure production.upproduct2(
			p_product int,
			u_name varchar,
			u_productnumber varchar,
			u_color varchar,
			u_listprice numeric,
			u_standardcost numeric,
			u_size varchar,
			u_weight numeric
)
language plpgsql
as $$
begin 	
	update production.product
		set
			name=u_name,
			productnumber=u_productnumber,
			color=u_color,
			listprice=u_listprice,
			standardcost=u_standardcost,
			size =u_size,
			weight=u_weight
		where productid =p_product;
		commit;
	end;$$	
	call production.upproduct2(1,'ricky','2aa','blue',1.1,1.2,'l',2.5)
	select * from production.product where productid =1