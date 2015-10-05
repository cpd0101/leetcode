select d.name as Department, e.Name as Employee, t.Salary
from Employee as e
join
(select DepartmentId, max(Salary) as Salary from Employee group by DepartmentId) as t
using(DepartmentId, Salary)
join
Department as d
on e.DepartmentId = d.Id;