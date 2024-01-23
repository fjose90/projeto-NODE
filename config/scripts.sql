-- Tabela Users
CREATE TABLE
  "users" (
    "user_id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(50),
    "last_name" VARCHAR(50),
    "email" VARCHAR(100) UNIQUE NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    -- * avatar ? ? ? ? 
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE
  "projects" (
    "project_id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "tags" TEXT,
    "link" TEXT,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  );