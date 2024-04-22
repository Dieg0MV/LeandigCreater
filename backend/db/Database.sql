    CREATE DATABASE login;

    USE login;

    
    CREATE TABLE IF NOT EXISTS users (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(45),
      PRIMARY KEY (id),
      password VARCHAR(100)
    );
    
    DESCRIBE users;

    INSERT INTO users VALUES
    (1, "primeroSalud", "1234567")