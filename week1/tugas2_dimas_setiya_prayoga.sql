
1.
select persontype,
case 
when persontype ='IN' then 'individual customer'
when persontype ='EM' then 'employee'
when persontype ='SP' then 'sales person'
when persontype ='SC' then 'sales contact'
when persontype ='VC' then 'vendor contact'
when persontype ='GC' then 'general contact'
end personname
,count(businessentityid)totalperson 
from person.person group by persontype
2.
select pr.businessentityid, concat(firstname,' ',middlename,' ',lastname)fullname,
ea.emailaddress, pp.phonenumber, 
concat(ad.addressline1,ad.addressline1,ad.city,sp.name, cr.name) as address, 
adt.name as addresstype
from person.person pr inner join person.personphone pp
on pr.businessentityid = pp.businessentityid
join person.emailaddress ea on pr.businessentityid = ea.businessentityid
join person.businessentity be on pr.businessentityid = be.businessentityid
join person.businessentityaddress bea on pr.businessentityid = bea.businessentityid
join person.address ad on bea.addressid = ad.addressid
join person.addresstype adt on bea.addresstypeid = adt.addresstypeid
join person.stateprovince sp on ad.stateprovinceid = sp.stateprovinceid
join person.countryregion cr on sp.countryregioncode = cr.countryregioncode
where cr.countryregioncode = 'US'
3.
select cr.name, cr.countryregioncode, 
case 
when persontype ='IN' then 'individual customer'
when persontype ='EM' then 'employee'
when persontype ='SP' then 'sales person'
when persontype ='SC' then 'sales contact'
when persontype ='VC' then 'vendor contact'
when persontype ='GC' then 'general contact'
end personname
,count(persontype)totalperson
from person.person pr inner join person.personphone pp
on pr.businessentityid = pp.businessentityid
join person.emailaddress ea on pr.businessentityid = ea.businessentityid
join person.businessentity be on pr.businessentityid = be.businessentityid
join person.businessentityaddress bea on pr.businessentityid = bea.businessentityid
join person.address ad on bea.addressid = ad.addressid
join person.addresstype adt on bea.addresstypeid = adt.addresstypeid
join person.stateprovince sp on ad.stateprovinceid = sp.stateprovinceid
join person.countryregion cr on sp.countryregioncode = cr.countryregioncode
group by (cr.countryregioncode, pr.persontype)
order by cr.countryregioncode asc
4.

select cr.countryregioncode, cr.name,
(sum(case
	when persontype ='IN' then 1
	else 0
	end
))individualCustomer,
(sum(case
	when persontype ='EM' then 1
	else 0
	end
))employee,
(sum(case
	when persontype ='SP' then 1
	else 0
	end
))salesPerson,
(sum(case
	when persontype ='SC' then 1
	else 0
	end
))SalesCOntact,
(sum(case
	when persontype ='VC' then 1
	else 0
	end
))vendorCOntact,
(sum(case
	when persontype ='GC' then 1
	else 0
	end
))generalCOntact
from person.person pr inner join person.personphone pp
on pr.businessentityid = pp.businessentityid
join person.emailaddress ea on pr.businessentityid = ea.businessentityid
join person.businessentity be on pr.businessentityid = be.businessentityid
join person.businessentityaddress bea on pr.businessentityid = bea.businessentityid
join person.address ad on bea.addressid = ad.addressid
join person.addresstype adt on bea.addresstypeid = adt.addresstypeid
join person.stateprovince sp on ad.stateprovinceid = sp.stateprovinceid
join person.countryregion cr on sp.countryregioncode = cr.countryregioncode
group by (cr.countryregioncode)
order by cr.countryregioncode asc

5.
select dp.departmentid, dp.name, count(e.businessentityid)totalEmployee
from humanresources.department dp 
join humanresources.employeedepartmenthistory edh
on dp.departmentid = edh.departmentid 
join humanresources.employee e
on edh.businessentityid=e.businessentityid
group by dp.departmentid
order by dp.departmentid asc

6.
select dp.name,
(sum(case
	when s.name = 'Day' then 1
	else 0
	end
	))Dayy,
(sum(case
	when s.name = 'Evening' then 1
	else 0
	end
	))Evening,
(sum(case
	when s.name = 'Night' then 1
	else 0
	end
	))night
from humanresources.department dp
join humanresources.employeedepartmenthistory edh
on dp.departmentid = edh.departmentid
join humanresources.shift s 
on s.shiftid=edh.shiftid
group by dp.name
order by dp.name asc
7.
select v.accountnumber, v.name,
(sum(case
	when status = 1 then 1
	else 0
	end
	))pending,
(sum(case
	when status = 2 then 1
	else 0
	end
	))approved,
(sum(case
	when status = 3 then 1
	else 0
	end
	))rejected,
(sum(case
	when status = 4 then 1
	else 0
	end
	))completed
from purchasing.vendor v
join purchasing.productvendor pv
on v.businessentityid = pv.businessentityid
join purchasing.purchaseorderdetail pod
on pv.productid =pod.productid
join purchasing.purchaseorderheader poh
on pod.purchaseorderid = poh.purchaseorderid
group by v.accountnumber, v.name order by v.accountnumber
8.
select c.customerid,concat(pr.firstname, pr.middlename,pr.lastname)customername,
(sum(case
	when status = 1 then 1
	else 0
	end))Inproccess,
(sum(case
	when status = 2 then 1
	else 0
	end))aprove,
(sum(case
	when status = 3 then 1
	else 0
	end))backordered,
(sum(case
	when status = 4 then 1
	else 0
	end))rejeckted,
(sum(case
	when status = 5 then 1
	else 0
	end))shipped,
(sum(case
	when status = 6 then 1
	else 0
	end))cancelled
from sales.customer c
join sales.salesorderheader soh
on c.customerid= soh.customerid
join person.person pr
on c.customerid = pr.businessentityid
group by c.customerid, customername order by c.customerid asc
9.
select cu.customerid,concat(pr.firstname, pr.middlename,pr.lastname)customername,
(sum(case
	when pc.name='Accessories' then 1
	else 0
	end))accesories,
(sum(case
	when pc.name='Bikes' then 1 
	else 0
	end))Bikes,
(sum(case
	when pc.name='Components' then 1
	else 0
	end))componenets,
(sum(case
	when pc.name='Clothing' then 1
	else 0
	end))clothing
from sales.customer cu
join sales.salesorderheader soh
on cu.customerid= soh.customerid
join sales.salesorderdetail sod
on sod.salesorderid = soh.salesorderid
join production.product pro
on sod.productid = pro.productid
join production.productsubcategory spk
on spk.productsubcategoryid = pro.productsubcategoryid
join production.productcategory pc
on pc.productcategoryid = spk.productcategoryid
join person.person pr
on cu.customerid = pr.businessentityid
group by cu.customerid, customername order by customername asc
10.
select pro.productid, pro.name, so.discountpct, 
		(extract (year from so.startdate))yeardiscount,
		(sum(case
			when (extract(month from so.startdate))=1 then 1
			else 0
			end
			))januari,
		(sum(case
			when (extract(month from so.startdate))=2 then 1
			else 0
			end
			))februari,
		(sum(case
			when (extract(month from so.startdate))=3 then 1
			else 0
			end
			))maret,
		(sum(case
			when (extract(month from so.startdate))=4 then 1
			else 0
			end
			))april,
		(sum(case
			when (extract(month from so.startdate))=5 then 1
			else 0
			end
			))mei,
		(sum(case
			when (extract(month from so.startdate))=6 then 1
			else 0
			end
			))juni,
		(sum(case
			when (extract(month from so.startdate))=7 then 1
			else 0
			end
			))juli,
		(sum(case
			when (extract(month from so.startdate))=8 then 1
			else 0
			end
			))agustus,
		(sum(case
			when (extract(month from so.startdate))=9 then 1
			else 0
			end
			))september,
		(sum(case
			when (extract(month from so.startdate))=10 then 1
			else 0
			end
			))oktober,
		(sum(case
			when (extract(month from so.startdate))=11 then 1
			else 0
			end
			))November,
		(sum(case
			when (extract(month from so.startdate))=12 then 1
			else 0
			end
			))desember 
from production.product pro
join sales.specialofferproduct sop
on pro.productid = sop.productid
join sales.specialoffer so
on so.specialofferid = sop.specialofferid
where so.description <> 'No Discount'
group by pro.productid,  yeardiscount,so.discountpct order by yeardiscount desc

