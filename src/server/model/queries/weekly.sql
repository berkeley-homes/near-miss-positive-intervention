SELECT *
  FROM submissions
  WHERE created_at
      BETWEEN now()::timestamp - (interval '1w')
      AND now()::timestamp
    AND site = $1::text
    AND CASE
      WHEN $2::text != ''
      THEN location_first = UPPER($2::text)
      ELSE true
    END;
