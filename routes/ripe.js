const express = require('express');
const router = express.Router();
const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/N58PlX_GN/"
});


router.get("/image/classify", async (req, res) => {
    const { url } = req.query;
  

    const getHighestScoreClass = (predictions) => {
    const sortedPredictions = predictions.sort((a, b) => b.score - a.score);
    return sortedPredictions[0].class;
  }
  
  
    return model.classify({
      imageUrl: url,
    }).then((predictions) => {
      const highestScoreClass = getHighestScoreClass(predictions);  
      console.log(highestScoreClass)
      return res.json({classification: highestScoreClass});
    }).catch((e) => {
      console.error(e);
      res.status(500).send("Something went wrong!")
    });
  });
  


  module.exports = router;
