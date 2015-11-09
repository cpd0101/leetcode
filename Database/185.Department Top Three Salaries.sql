select d.Name as Department,
    t.Name as Employee,
    Salary
from (
    select Name,
        DepartmentId,
        Salary,
        @rank := if (@preId != DepartmentId, 1,
            if (@preSalary = Salary, @rank, @rank + 1)) as rank,
        @preId := DepartmentId,
        @preSalary := Salary
    from Employee as e,
        (select @rank := 0, @preId := null, @preSalary := null) as p
    order by DepartmentId asc, Salary desc
) as t join Department as d
on t.DepartmentId = d.Id
where t.rank <= 3;