/*
! Relationships in Mongo DB
* One to few relationship - Embed the data directly in the document!
{
  name: 'Tommy Cash',
  savedAddresses: [
    { street: 'Rahukohtu 3', city: 'Tallinn', country: 'Estonia' },
    { street: 'Ravala 5', city: 'Tallinn', country: 'Estonia' }
  ];
}

* One to many - Storing your data seperately, but then store references to document IDs somewhere inside the parent.
{
  farmName: 'Full Belly Farms',
  location: 'Guinda, CA',
  produce: [
    ObjectID: 3209949291,
    ObjectID: 3001883011,
    ObjectID: 0402109144
  ]
}

* One to 'Bajillions'
With thousands or more documents, it's more efficient to store a reference to the parent on the child document.
{
  tweetText: 'lol I just crashed my car because I was tweeting',
  tags: ['stupid', 'moron', 'yolo'],
  user: ObjectId('22491514')
}

* Some rules of thumb:
1. Favor embedding unless there is a compelling reason not to.
2. Needing to access an object on its own is a compelling reason NOT to embed.
3. Avoid arrays that grow or can grow without bound.
4. How you model your data depends entirely on your particular application's data access patterns. You want to structure your data to match the ways that your application queries and updates it.
*/
