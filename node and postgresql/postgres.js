//connect to postgresql
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});

const listAllVisitors = () => {
  pool.query("SELECT * FROM Visitors",
  (err, res) => { 
    if(err) {
     throw err;
    } 
  console.log(res.rows)
  });
}

const addNewVisitor = (name, age, date, time,facilitator,comments) => {
  pool.query('INSERT INTO Visitors(name,age,date,time,facilitator,comments) VALUES ($1,$2,$3,$4,$5,$6);',
  [name,age,date,time,facilitator,comments],
  (err, res) => { 
    if(err) {
     throw err;
    } 
  console.log("Visitor added!")
  });
}

const deleteVisitor = (id) => {
  pool.query("DELETE FROM Visitors WHERE id = $1",[id], (err, res) => {
    if(err) {
      throw err;

    }
    console.log("Visitor deleted!")
  })
}

const viewVisitor = (id) => {
  pool.query("SELECT * FROM Visitors WHERE id =$1",[id], (err,res) => {
    if(err) {
      throw err;
    }
    console.log(res.rows);
  })
}

const updateVisitor = (name, id,value) => {
  let value1 = value.toLowerCase();
    pool.query(`UPDATE Visitors SET ${value1} = $1 WHERE ID = $2`, [name, id], (err, res) =>{
      if(err) {
        throw err
      }
      console.log("Visitor updated!")
    });
}

const deleteAllVisitors = () => {
  pool.query("DELETE FROM Visitors", (err, res) => {
    if(err) {
      throw err;
    }
    console.log("Table cleared");
  })
}


