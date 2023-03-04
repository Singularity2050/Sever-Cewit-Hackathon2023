

app.get("/image/classify", async (req, res) => {
    const { url } = req.query;
  

    const getHighestScoreClass = (predictions) => {
    const sortedPredictions = predictions.sort((a, b) => b.score - a.score);
    return sortedPredictions[0].class;
  }
  
  
    return model.classify({
      imageUrl: url,
    }).then((predictions) => {
      const highestScoreClass = getHighestScoreClass(predictions);
      console.log("Highest score class:", highestScoreClass);
  
  
      return res.json({classification: highestScoreClass});
    }).catch((e) => {
      console.error(e);
      res.status(500).send("Something went wrong!")
    });
  });
  

