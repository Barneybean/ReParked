USE reparked_db;

INSERT INTO rentersprofiles (RenterName, RenterEmail, password, createdAt, updatedAt ) VALUES ("Ralph", "ralph@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersprofiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("Jack", "jack@gmail.com", "q12345", NOW(), NOW());
INSERT INTO rentersprofiles (RenterName, RenterEmail, password, createdAt, updatedAt) VALUES ("David", "david@gmail.com", "q12345", NOW(), NOW());

INSERT INTO hostsprofiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Sam", "sam@gmail.com", "q12345", NOW(), NOW());
INSERT INTO hostsprofiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Elzabeth", "elizabeth@gmail.com", "q12345", NOW(), NOW());
INSERT INTO hostsprofiles (hostName, hostEmail, password, createdAt, updatedAt) VALUES ("Peter", "peter@gmail.com", "q12345", NOW(), NOW());

INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (1909, "Sacramento Avenue", "Berkeley", "CA", 94702, 37.872125, -122.281676, "driveway", 1.50, "https://static.concretenetwork.com/photo-gallery/images/1200x625Exact_0x60/concrete-driveways_8/decorative-concrete-driveway-stencil-template-custom-ram-design_65380.jpg", NOW(), NOW(), 1);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url, createdAt, updatedAt, hostsProfileId) VALUES (1801, "Berkeley Way", "Berkeley", "CA", 94703, 37.872366, -122.274616, "carport", 3, "https://www.carportbuy.com/wp-content/uploads/2017/04/best-selling-aluminum-alloy-metal-carport-double-cars-1.png", NOW(), NOW(), 2);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url,createdAt, updatedAt, hostsProfileId) VALUES (260, "E Tasman Dr", "San Jose", "CA", 95134, 37.4122983, -121.9365226, "garage", 3, "https://st.hzcdn.com/simgs/9401060a005dd796_4-7090/traditional-garage.jpg", NOW(), NOW(), 2);
INSERT INTO listings (streetNumber, streetName, city, state, zipcode, latitude, longitude, type, hourlyrate, url,createdAt, updatedAt, hostsProfileId) VALUES (2635, "San Pablo Ave", "Oakland", "CA", 94612, 37.817877, -122.275887, "driveway", 2, "https://static.concretenetwork.com/photo-gallery/images/1200x625Exact_0x60/concrete-driveways_8/decorative-concrete-driveway-stencil-template-custom-ram-design_65380.jpg", NOW(), NOW(), 1);

INSERT INTO reservations (vehicleMake, vehicleModel, vehicleLicensePlate, dateStart, dateEnd, timeStart, timeEnd, totalTime, note, createdAt, updatedAt, ListingId, rentersProfileId, hostsProfileId)
    VALUES ("Audi", "A6", "JXH615", 20180615, 20180615, 6, 15, 9, "boooooked", NOW(), NOW(), 1, 2, 1);

INSERT INTO reservations (vehicleMake, vehicleModel, vehicleLicensePlate, dateStart, dateEnd, timeStart, timeEnd, totalTime, note, createdAt, updatedAt, ListingId, rentersProfileId, hostsProfileId)
    VALUES ("Ford", "Mustang", "JXB325", 20180616, 20180617, 12, 12, 24, "boooooked again", NOW(), NOW(), 2, 2, 1);

INSERT INTO reservations (vehicleMake, vehicleModel, vehicleLicensePlate, dateStart, dateEnd, timeStart, timeEnd, totalTime, note, createdAt, updatedAt, ListingId, rentersProfileId, hostsProfileId)
    VALUES ("Chevy", "Silverado", "jjjjj", 20180701, 20180701, 10, 12, 2, "its a truck", NOW(), NOW(), 2, 3, 3);