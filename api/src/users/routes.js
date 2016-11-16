export function findAll(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Tina2", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
  ]);

};
