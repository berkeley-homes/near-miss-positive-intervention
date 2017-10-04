SELECT *
FROM   submissions
WHERE  created_at BETWEEN now()::timestamp - (interval '1w')
                  AND     now()::timestamp;
