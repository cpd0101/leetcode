# Write your MySQL query statement below
SELECT DISTINCT Num FROM (
SELECT    Num,
          @curRank := @curRank + IF(@prevNum = Num, 0, 1) AS rank, @prevNum := Num
FROM      Logs AS s, (SELECT @curRank := 0) AS r, (SELECT @prevNum := NULL) AS p
ORDER BY  ID ASC
) AS t GROUP BY Rank HAVING COUNT(Rank) >= 3;

select distinct l1.Num 
from Logs as l1,
    Logs as l2,
    Logs as l3 
where (l1.Num = l2.Num and l1.Id + 1 = l2.Id) 
    and (l3.Num = l2.Num and l3.Id = l2.Id + 1);