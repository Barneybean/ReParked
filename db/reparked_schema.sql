### Schema

CREATE DATABASE reparked_db;
USE reparked_db;

CREATE TABLE user_profiles(
  user_profiles_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  user_email VARCHAR(100) NOT NULL,
  PRIMARY KEY (user_profiles_id)
);

CREATE TABLE host_profiles(
  host_profiles_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  host_name VARCHAR(100) NOT NULL,
  host_email VARCHAR(100) NOT NULL,
  avg_rating FLOAT(2,1),
  PRIMARY KEY (host_profiles_id)
); 

CREATE TABLE posts(
  post_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  host_profileId INTEGER(11),
  street_number INTEGER(11),
  street_name VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  post_type VARCHAR(100) NOT NULL,
  image_url VARCHAR(150),
  rate INTEGER(11) NOT NULL,
  FOREIGN KEY (host_profile_id) REFERENCES host_profiles (host_profile_id), 
  PRIMARY KEY (post_id)
);

CREATE TABLE reservations(
  reservations_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  vehicle_make VARCHAR(100) NOT NULL,
  vehicle_model VARCHAR(100) NOT NULL,
  vehicle_license_plate# VARCHAR(12) NOT NULL,
  reservation_start_date ,
  reservation_end_date ,
  reservation_start_time ,
  reservation_end_time ,
  reservation_total_hours ,
  FOREIGN KEY (user_profiles_id) REFERENCES user_profiles(user_profiles_id),
  FOREIGN KEY (post_id) REFERENCES posts (post_id),
  PRIMARY KEY (reservations_id)
);


CREATE TABLE host_ratings(
  rating_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (host_profile_id) REFERENCES host_profiles (host_profile_id),
  FOREIGN KEY (user_profiles_id) REFERENCES user_profiles(user_profiles_id),
  rating INTEGER(1) 
  -- NEED TO LIMIT TO RANGE OF 1 THRU 5
);


CREATE TABLE user_ratings(
  rating_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  FOREIGN KEY (host_profile_id) REFERENCES host_profiles (host_profile_id),
  FOREIGN KEY (user_profiles_id) REFERENCES user_profiles(user_profiles_id),
  rating INTEGER(1) 
  -- NEED TO LIMIT TO RANGE OF 1 THRU 5
);
