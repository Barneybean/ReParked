USE reparked_db;

INSERT INTO rentersprofiles (RenterName, RenterEmail, password, createdAt, updatedAt ) VALUES ("Ralph", "ralph@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersprofiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("Jack", "jack@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersprofiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("David", "david@gmail.com", "q12345", NOW(), NOW());

INSERT INTO hostsprofiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Sam", "sam@gmail.com", "q12345", NOW(), NOW());
INSERT INTO hostsprofiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Elzabeth", "elizabeth@gmail.com", "q12345", NOW(), NOW());
INSERT INTO hostsprofiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Peter", "peter@gmail.com", "q12345", NOW(), NOW());

INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (1909, "Sacramento Avenue", "Berkeley", "CA", 94702, 37.872125, -122.281676, "driveway", 1.50, "https://static.concretenetwork.com/photo-gallery/images/1200x625Exact_0x60/concrete-driveways_8/decorative-concrete-driveway-stencil-template-custom-ram-design_65380.jpg", NOW(), NOW(), 1);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (1801, "Berkeley Way", "Berkeley", "CA", 94703, 37.872366, -122.274616, "carport", 3, "https://www.carportbuy.com/wp-content/uploads/2017/04/best-selling-aluminum-alloy-metal-carport-double-cars-1.png", NOW(), NOW(), 2);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (260, "E Tasman Dr", "San Jose", "CA", 95134, 37.4122983, -121.9365226, "garage", 3, "https://st.hzcdn.com/simgs/9401060a005dd796_4-7090/traditional-garage.jpg", NOW(), NOW(), 2);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (2635, "San Pablo Ave", "Oakland", "CA", 94612, 37.817877, -122.275887, "driveway", 2, "https://static.concretenetwork.com/photo-gallery/images/1200x625Exact_0x60/concrete-driveways_8/decorative-concrete-driveway-stencil-template-custom-ram-design_65380.jpg", NOW(), NOW(), 1);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (2181, "2181 Shattuck Ave", "Berkeley", "CA", 94704, 37.870290, -122.267733, "driveway", 3, "http://www.minsterpaving.co.uk/wp-content/uploads/2014/03/driveway.png", NOW(), NOW(), 1);

INSERT INTO reservations (vehicleMake, vehicleModel, licensePlate, dateStart, timeStart, timeEnd, note, createdAt, updatedAt, ListingId, rentersProfileId)
    VALUES ("Audi", "A6", "JXH615", "2018-06-15", 6, 15, "boooooked", NOW(), NOW(), 1, 4);

INSERT INTO reservations (vehicleMake, vehicleModel, licensePlate, dateStart, timeStart, timeEnd, note, createdAt, updatedAt, ListingId, rentersProfileId)
    VALUES ("Ford", "Mustang", "JXB325", "2018-06-16", 12, 24, "boooooked again", NOW(), NOW(), 2, 4);

INSERT INTO reservations (vehicleMake, vehicleModel, licensePlate, dateStart, timeStart, timeEnd, note, createdAt, updatedAt, ListingId, rentersProfileId)
    VALUES ("Chevy", "Silverado", "jjjjj", "2018-07-01", 12, 18, "its a truck", NOW(), NOW(), 2, 5);

