select distinct a.Email from Person as a, Person as b where a.Email = b.Email and a.Id <> b.Id;

select Email from Person group by Email having count(*) > 1;