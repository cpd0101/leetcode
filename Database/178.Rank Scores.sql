select Score,
    Rank 
from (
    select Score,
        @curRank := @curRank + if(@preScore = Score, 0, 1) as Rank,
        @preScore := Score
    from Scores, (select @curRank := 0) as r,
        (select @preScore := null) as p 
    order by Score desc
) as t;