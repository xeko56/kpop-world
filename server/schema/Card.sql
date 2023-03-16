DROP TABLE IF EXISTS groups, types, eras;
DROP TABLE IF EXISTS cards;

create table groups(
    group_nr int auto_increment,
    group_name varchar(255) not null,
    primary key(group_nr)
);

create table types(
    type_nr int auto_increment,
    type_name varchar(255) not null,
    primary key(type_nr)
);

create table eras(
    era_nr int auto_increment,
    era_name varchar(255) not null,
    primary key(era_nr)
);

create table cards(
    card_nr int auto_increment,
    card_name varchar(255) not null,
    era_nr int,
    group_nr int,
    type_nr int,
    release_date date not null,
    img_url varchar(255),
    primary key(card_nr),
    foreign key(era_nr) references eras(era_nr),
    foreign key(group_nr) references groups(group_nr),
    foreign key(type_nr) references types(type_nr)
);

INSERT INTO groups (group_name) VALUES ('ATEEZ'), ('BTS'), ('NCT127'),('Blackpink'),('NMIXX'), ('Red Velvet');
INSERT INTO types (type_name) VALUES ('album'), ('pob'), ('lucky draw'),('fancall'),('fansign'), ('broadcast');
INSERT INTO eras (era_name) VALUES ('Kill This Love'), ('Lovesick Girls'), ('O.O'),('Dice'),('Birthday'), ('Feel My Rhythm');
INSERT INTO cards (card_name, era_nr, group_nr, type_nr, release_date) VALUES ('Jisoo Beret', 1, 4, 2, '2021-03-11'), ('Haewon Poke', 4, 5, 1, '2022-03-11'), ('Wendy 2', 5, 6, 3, '2022-12-11');
