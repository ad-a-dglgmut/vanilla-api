/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdkqfruf",
    "name": "item_text",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "acvpdeag",
    "name": "item_text_color_code",
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
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg")

  // remove
  collection.schema.removeField("sdkqfruf")

  // remove
  collection.schema.removeField("acvpdeag")

  return dao.saveCollection(collection)
})
