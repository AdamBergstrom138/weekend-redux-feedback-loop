const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// // Get all books
// router.get('/', (req, res) => {
//   let queryText = 'SELECT * FROM "books" ORDER BY "title";';
//   pool.query(queryText).then(result => {
//     // Sends back the results in an object
//     res.send(result.rows);
//   })
//   .catch(error => {
//     console.log('error getting books', error);
//     res.sendStatus(500);
//   });
// });

// Adds a new book to the list of awesome reads
// Request body must be a book object with a title and author.
router.post('/',  (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding Comment`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});

// router.delete('/:id', (req, res) => {
//   const idToDelete = req.params.id;

//   const sqlText = `
//     DELETE FROM "books"
//       WHERE "id"=$1;
//   `
//   const sqlValues = [idToDelete]
//   pool.query(sqlText, sqlValues)
//     .then((dbRes) => {
//       res.sendStatus(200);
//     })
//     .catch((dbErr) => {
//       console.error('DELETE /:id fail:', dbErr);
//       res.sendStatus(500); // 👈 don't leave the client hanging!
//     })
// })

module.exports = router;
