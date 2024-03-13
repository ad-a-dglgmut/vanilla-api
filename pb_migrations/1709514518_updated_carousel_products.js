/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg")

  collection.listRule = "@request.headers.app_token = \"ILOVANILLA\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k6jnbga73phwwwg")

  collection.listRule = null

  return dao.saveCollection(collection)
})
