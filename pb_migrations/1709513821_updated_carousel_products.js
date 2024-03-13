/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxzalxtb",
    "name": "has_link",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg")

  // remove
  collection.schema.removeField("sxzalxtb")

  return dao.saveCollection(collection)
})
