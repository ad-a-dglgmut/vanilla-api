/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oi26d3l1w3kp9py")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipzgr1co",
    "name": "param",
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

  // remove
  collection.schema.removeField("ipzgr1co")

  return dao.saveCollection(collection)
})
