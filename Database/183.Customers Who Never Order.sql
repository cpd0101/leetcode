select name as Customers 
from Customers as c left join Orders as o 
on c.Id = CustomerId 
where CustomerId is null;