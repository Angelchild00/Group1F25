insert into users (email, display_name, password_hash) values
('driver1@example.com', 'driver1', 'dev_dummy_hash');

-- start a trip for driver1
insert into trips (user_id, started_at, title) values
(1, Now(6), "sprint1 demo trip");

-- generate trip id
set @trip_id = LAST_INSERT_ID();

-- trip sample points for driver1
insert into trip_points (trip_id, captured_at, latitude, longitude, speed_kmh) values
(@trip_id, Now(6) - interval 10 minute, 37.7749, -122.4194, 50.00),
(@trip_id, Now(6) - interval 8 minute, 37.7750, -122.4180, 52.00),
(@trip_id, Now(6) - interval 6 minute, 37.7755, -122.4170, 48.00),
(@trip_id, Now(6) - interval 4 minute, 37.7760, -122.4160, 55.00),
(@trip_id, Now(6) - interval 2 minute, 37.7765, -122.4150, 60.00),
(@trip_id, Now(6), 37.7770, -122.4140, 58.00);

Select id, email, display_name From users;
select id, user_id, started_at, title from trips;
select captured_at, latitude, longitude, speed_kmh from trip_points order by captured_at;
