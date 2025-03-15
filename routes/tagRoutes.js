const express = require("express");

const tagRoutes = express.Router();

tagRoutes.post("/addTags", tagsCon.addTags);

tagRoutes.get("/allTags", tagsCon.allTags);

tagRoutes.get("/showTag", tagsCon.showTag);

tagRoutes.put("/updateTag", tagsCon.updateTag);

tagRoutes.delete("/deleteTag", tagsCon.deleteTag);

module.exports = tagRoutes