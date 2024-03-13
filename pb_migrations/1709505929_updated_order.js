/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4njfcmlzo73sl8u")

  collection.createRule = "@request.headers.app_token = \"ILOVANILLA\""
  collection.updateRule = "@request.headers.app_token = \"ILOVANILLA\""
  collection.deleteRule = "@request.headers.app_token = \"ILOVANILLA\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4njfcmlzo73sl8u")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
