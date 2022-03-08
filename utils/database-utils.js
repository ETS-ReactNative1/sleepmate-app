import * as SQLite from 'expo-sqlite';

function openDatabase(database) {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => { },
        };
      },
    };
  }

  const db = SQLite.openDatabase(database);
  return db;
}

function initializeDatabaseTable(database, table, columns) {
  database.transaction((tx) => {
    tx.executeSql(
      `create table if not exists ${table}(${columns});`
    );
  });
}

function insertItem(database, table, fields, values, constraints) {
  database.transaction(
    (tx) => {
      tx.executeSql(`insert into ${table} (${fields}) select ${values} ${constraints};`)
    }
  );
}

function deleteItem(database, table, constraints) {
  database.transaction(
    (tx) => {
      tx.executeSql(`delete from ${table} where ${constraints};`);
    }
  );
}

function updateItem(database, table, new_values, constraints) {
  database.transaction(
    (tx) => {
      tx.executeSql(`update ${table} set ${new_values} where ${constraints};`);
    }
  );
}

function getProfilesDatabase() {
  var profilesDB = openDatabase('Profiles.db');
  initializeDatabaseTable(profilesDB, 'Profiles', 'id integer primary key not null,' +
    'first_name text not null,' +
    'middle_name text default "",' +
    'last_name text not null,' +
    'profile_pic text default "default.jpg",' +
    'join_year integer default 2022,' +
    'join_month text default "February",' +
    'sleeping_status text default "awake",' +
    'friendship_status text default "unfriended",' +
    'sleep_quality text default "Light Sleeper",' +
    'average_bedtime text default "10:00 PM",' +
    'average_wakeup text default "8:00 AM"');
  deleteItem(profilesDB, 'Profiles', 'id=1');
  deleteItem(profilesDB, 'Profiles', 'id=2');
  deleteItem(profilesDB, 'Profiles', 'id=3');
  deleteItem(profilesDB, 'Profiles', 'id=4');
  deleteItem(profilesDB, 'Profiles', 'id=5');
  insertItem(profilesDB, 'Profiles', 'id, first_name, last_name, profile_pic, friendship_status, sleeping_status', '1, "Aaron", "Han", "aaron.jpg", "friended", "sleeping"',
    "where not exists(select 1 from Profiles where id = 1)");
  insertItem(profilesDB, 'Profiles', 'id, first_name, last_name, profile_pic, friendship_status, sleep_quality', '2, "Derek", "Chung", "derek.jpg", "friended", "Heavy Sleeper"',
    "where not exists(select 1 from Profiles where id = 2)");
  insertItem(profilesDB, 'Profiles', 'id, first_name, last_name, profile_pic, friendship_status, average_bedtime, average_wakeup', '3, "Michelle", "Xu", "michelle.jpg", "friended", "12:00 AM", "9:00 AM"',
    "where not exists(select 1 from Profiles where id = 3)");
  insertItem(profilesDB, 'Profiles', 'id, first_name, last_name', '4, "Not", "Friend"',
    "where not exists(select 1 from Profiles where id = 4)");
  insertItem(profilesDB, 'Profiles', 'id, first_name, middle_name, last_name, friendship_status', '5, "Has", "No", "Friends", "pending"',
    "where not exists(select 1 from Profiles where id = 5)");
  profilesDB.transaction((tx) => {
    tx.executeSql(
      `select * from Profiles where friendship_status = "friended" or friendship_status = "pending" order by friendship_status, last_name`,
      null,
      (_, { rows }) => console.log(JSON.stringify(rows))
    );
  });
  
}

export { openDatabase, getProfilesDatabase, updateItem }


