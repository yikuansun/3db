# 3DB
A collection of glTF models.

## Contributing
In `models`, create a new directory named the name of your model, and place two files into it: `model.glb` (the 3D model file), and `thumbnail.png` (a 2D picture of the model). Then, in `models.json`, add the following object to the top of the array:
```
  {
    "modelname": "NAME_OF_YOUR_MODEL",
    "authorname": "YOUR_NAME",
    "thumbnail": {
      "url": "https://raw.githubusercontent.com/yikuansun/3db/master/models/NAME_OF_YOUR_MODEL/thumbnail.png"
    },
    "model": {
      "url": "https://raw.githubusercontent.com/yikuansun/3db/master/models/NAME_OF_YOUR_MODEL/model.glb"
    }
  }
```

If you are unfamiliar with Git, [request a model](https://yikuansun.github.io/photopea-3delements/submit/index.html)

## API
Fetch `https://yikuansun.github.io/3db/models.json` and it will return a JSON file with all of the data.
