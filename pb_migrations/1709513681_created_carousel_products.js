/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k6jnbga73phwwwg",
    "created": "2024-03-04 00:54:41.026Z",
    "updated": "2024-03-04 00:54:41.026Z",
    "name": "carousel_products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9hgukpg0",
        "name": "image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "zqhlxskw",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg");

  return dao.deleteCollection(collection);
})
