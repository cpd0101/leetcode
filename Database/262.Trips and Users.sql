select Request_at as Day,
    round((max(counter) / count(Request_at)), 2) as 'Cancellation Rate'
from (
    select Request_at,
        @counter := if(@curDate = Request_at and Status <> 'completed', @counter + 1, 0),
        @counter := if(@curDate <> Request_at and Status <> 'completed', 1, @counter) as counter,
        @curDate := Request_at as curDate
    from (select * from Trips left join Users 
        on Trips.Client_Id = Users.Users_Id) as t,
        (select @counter := 0, @curDate := '') as p
    where Banned <> 'Yes'
        and Request_at >= '2013-10-01'
        and Request_at <= '2013-10-03'
    order by Request_at
    ) as tmp
group by Request_at;