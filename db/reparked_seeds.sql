USE reparked_db;

INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt ) VALUES ("Ralph", "ralph@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("Jack", "jack@gmail.com", "q12345", NOW(), NOW());

INSERT INTO hostsProfiles (hostName, hostEmail, password) VALUES ("Sam", "sam@email.com", "q12345");
INSERT INTO hostsProfiles (hostName, hostEmail, password) VALUES ("Elzabeth", "elizabeth@email.com", "q12345");

INSERT INTO Listings (streetNumber, streetName, city, state, type, rate) VALUES (1909, "Sacramento Avenue", "Berkeley", "CA", "driveway", 1.50);
INSERT INTO Listings (streetNumber, streetName, city, state, type, rate) VALUES (1801, "Berkeley Way", "Berkeley", "CA", "carport", 3);

