/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oi26d3l1w3kp9py")

  // remove
  collection.schema.removeField("tlprxcfd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jfte4s6e",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oi26d3l1w3kp9py")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tlprxcfd",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("jfte4s6e")

  return dao.saveCollection(collection)
})
