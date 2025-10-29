-- Reset database schema
drop table if exists trip_points, trips, users;

-- user table
create table users (
    id BIGINT unsigned primary key auto_increment,
    email varchar(200) not null unique,
    display_name varchar(200) not null,
    password_hash varchar(200) not null
) engine=InnoDB;

-- trip table
create table trips (
    id BIGINT unsigned primary key auto_increment,
    user_id BIGINT unsigned not null,
    started_at datetime not null,
    ended_at datetime,
    title varchar(200) not null,
    foreign key (user_id) references users(id) on delete cascade
) engine=InnoDB;

-- trip points table
create table trip_points (
    id BIGINT unsigned primary key auto_increment,
    trip_id BIGINT unsigned not null,
    captured_at datetime(6) not null,
    latitude decimal (9,6) not null,
    longitude decimal (9,6) not null,
    speed_kmh decimal(6,2) not null,
    foreign key (trip_id) references trips(id) on delete cascade,
    Index trip_index (trip_id, captured_at)
) engine=InnoDB;