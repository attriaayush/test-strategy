const config = require('../src/config');

const db = require('knex')({
  client: "pg",
  connection: {
    host: config.db.host,
    user: config.db.user,
    password: config.db.password
  }
});

console.log('Creating the required tables');

db.schema
  .hasTable("users")
  .then((exists) => {
    if (!exists) {
      console.log(`Creating table for 'users'`);
      return db.schema.createTable("users", table => {
        table.increments();
        table.string("email").notNullable();
        table.string("firstname").notNullable();
        table.timestamps(true, true);
      });
    }
  })
  .then(() => {
    console.log(`Table successfully created!!`);
    process.exit(0);
  })
  .catch(err => {
    console.log(`Unable to init tables: ${err}`);
    process.exit(1);
  });