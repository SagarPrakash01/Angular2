create table CustomerData (
cid int identity primary key,
CustomerType varchar(20),
CustomerId varchar(20),
CustomerName varchar(20),
CustomerAmount numeric(8,2)
)
go

insert into CustomerData values ('Customer','C1001','bhavana',5000);
go

select * from CustomerData;