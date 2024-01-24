-- Create a new database called 'portfolio'
CREATE DATABASE portfolio;

USE portfolio;

-- Criação da Tabela Users
CREATE TABLE
  IF NOT EXISTS `users` (
    `user_id` INT AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `email` VARCHAR(100) UNIQUE NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `avatar` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );

-- Criação da Tabela Projects
CREATE TABLE
  `projects` (
    `project_id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT,
    `tag_id` INT,
    `link` TEXT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) references `users` (`user_id`)
  );

CREATE TABLE
  `tags` (
    `tag_id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(50) NOT NULL,
    `project_id` INT,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`project_id`) references `projects` (`project_id`)
  );

-- INSERÇÃO
INSERT INTO
  users (
    `first_name`,
    `last_name`,
    `email`,
    `password_hash`,
  )
VALUES
  (
    'Bianca',
    'Martin',
    'bianca.mar@orange.dev',
    'pass',
  ),
  ('Enzo', 'Gabriel', 'enzo.gab@orange.dev', 'pass',),
  (
    'Alice',
    'Alexandra',
    'aice.ale@orange.dev',
    'pass',
  );

INSERT INTO
  contacts (user_id, contact_name, phone, email)
VALUES
  (
    1,
    'John Doe',
    '(408)-111-1234',
    'john.doe@orange.dev'
  ),
  (
    1,
    'Jane Doe',
    '(408)-111-1235',
    'jane.doe@orange.dev'
  ),
  (
    2,
    'David Wright',
    '(408)-222-1234',
    'david.wright@dolphin.dev'
  );