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


      CREATE TABLE forms (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      PRIMARY KEY (id),
      names VARCHAR(50),
      lasthnames VARCHAR(50),
      email VARCHAR(45),
      phonenum INT(100)
    );

ALTER TABLE forms
MODIFY COLUMN phonenum VARCHAR(20);


CREATE TABLE 'landis' (
  landig_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (landig_id), 
  name_landig VARCHAR(50), 
  page_landi BLOB) ENGINE = InnoDB;