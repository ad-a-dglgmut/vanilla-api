/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4njfcmlzo73sl8u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qpzlj9yk",
    "name": "order_id",
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
  const collection = dao.findCollectionByNameOrId("4njfcmlzo73sl8u")

  // remove
  collection.schema.removeField("qpzlj9yk")

  return dao.saveCollection(collection)
})
