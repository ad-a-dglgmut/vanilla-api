/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oi26d3l1w3kp9py")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsxjcp9b",
    "name": "front_page",
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

  // remove
  collection.schema.removeField("jsxjcp9b")

  return dao.saveCollection(collection)
})
