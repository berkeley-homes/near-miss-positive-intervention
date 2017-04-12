INSERT INTO submissions (
  submitter_name,
  location_first,
  location_second,
  location_third,
  description,
  report_type,
  photo_url
)
VALUES
(
  $1::text,
  $2::text,
  $3::text,
  $4::text,
  $5::text,
  $6::text,
  $7::text
)
RETURNING submission_id
