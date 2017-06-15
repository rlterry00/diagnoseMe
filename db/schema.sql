CREATE DATABASE diagnoseMe;
USE diagnoseMe;

create table user_symptoms(
	id integer not null auto_increment,
	symptom_1 varchar(50) not null,
	symptom_2 varchar(50) not null,
	symptom_3 varchar(50),
	symptom_4 varchar(50),
	symptom_5 varchar(50),
	diagnosis varchar(50),
	primary key(id)
);


create table user_background(
	id integer not null auto_increment,
	zipCode varchar(50) not null,
	symptom_1 varchar(50) not null,
	symptom_2 varchar(50) not null,
	symptom_3 varchar(50),
	symptom_4 varchar(50),
	symptom_5 varchar(50),
	primary key(id)
);