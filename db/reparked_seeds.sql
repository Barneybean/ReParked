USE reparked_db;

INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt ) VALUES ("Ralph", "ralph@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("Jack", "jack@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersProfiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("David", "david@gmail.com", "q12345", NOW(), NOW());

INSERT INTO hostsProfiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Sam", "sam@gmail.com", "q12345", NOW(), NOW());
INSERT INTO hostsProfiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Elzabeth", "elizabeth@gmail.com", "q12345", NOW(), NOW());
INSERT INTO hostsProfiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Peter", "peter@gmail.com", "q12345", NOW(), NOW());

INSERT INTO Listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, createdAt, updatedAt, hostsProfileId) VALUES (1909, "Sacramento Avenue", "Berkeley", "CA", 94702, 37.872125, -122.281676, "driveway", 1.50, NOW(), NOW(), 1);
INSERT INTO Listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, createdAt, updatedAt, hostsProfileId) VALUES (1801, "Berkeley Way", "Berkeley", "CA", 94703, 37.872366, -122.274616, "carport", 3, NOW(), NOW(), 2);
INSERT INTO Listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, createdAt, updatedAt, hostsProfileId) VALUES (260, "E Tasman Dr", "San Jose", "CA", 95134, 37.872366, -122.274616, "carport", 3, NOW(), NOW(), 2);

