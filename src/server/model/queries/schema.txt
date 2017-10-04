BEGIN;

CREATE TABLE IF NOT EXISTS submissions (
  submission_id SERIAL PRIMARY KEY NOT NULL,
  submitter_name TEXT,
  location_first TEXT NOT NULL,
  location_second TEXT,
  location_third TEXT,
  description TEXT NOT NULL,
  report_type TEXT NOT NULL,
  photo_url TEXT,
  created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW()
);

COMMIT;
