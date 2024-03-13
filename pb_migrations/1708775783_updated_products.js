/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oi26d3l1w3kp9py")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqsq7ynz",
    "name": "is_highlighted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oi26d3l1w3kp9py")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqsq7ynz",
    "name": "is_hIghlighted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
