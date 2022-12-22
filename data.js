var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-y-cocina",
      "name": "Entrada y Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.014770973234082163,
        "pitch": 0.17093976241270425,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.7752339638046628,
          "pitch": 0.2882983828737906,
          "rotation": 0.7853981633974483,
          "target": "2-cama"
        },
        {
          "yaw": 0.1087831985466714,
          "pitch": 0.23091296719744214,
          "rotation": 5.497787143782138,
          "target": "1-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.877447320356108,
        "pitch": 0.10065987402612109,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.6920007929436025,
          "pitch": 0.1957621567124086,
          "rotation": 5.497787143782138,
          "target": "0-entrada-y-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cama",
      "name": "Cama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.004043750746339114,
        "pitch": 0.4605407464802589,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.8632164471388606,
          "pitch": 0.08539963582614263,
          "rotation": 0.7853981633974483,
          "target": "1-bao"
        },
        {
          "yaw": -2.8039711864183374,
          "pitch": 0.051196825184666395,
          "rotation": 0,
          "target": "0-entrada-y-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartamento S",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
