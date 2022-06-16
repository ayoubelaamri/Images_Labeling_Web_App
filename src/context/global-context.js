import React, { Component } from "react";
import axios from "axios";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    authState: {
      authenticated: true,
      user: {
        id: null,
        name: null,
      },
    },

    loading_dossiers: true,
    loading_marques: true,
    loading_models: true,
    loading_images: false,
    loading_fullSizeImage: false,
    loading_pieces: false,
    loading_relatedPieces: false,
    loading_encoding: false,
    loading_labeling: false,
    loading_classification: false,
    loading_export: false,

    dossiers: {
      data: [],
      count: 0,
    },
    selectedDossier: null,
    dossiers_count_0: false,

    marques: [],
    selectedMarque: null,
    models: [],
    selectedModel: null,

    pieces: [],
    images: [],
    fullSizeImage: null,
    end_of_images: false,
    // selectedImageIndex: 0,
    // fullSizeImage_object: null,

    rotate: 0,
    zoom: 1,
    coordinates: [
      // {
      //   x: 178, y: 91, width: 158, height: 132, id: 'SJxb6YpuG'
      // },
    ],
    img_width: 0,
    img_height: 0,
    crop: {
      unit: "%", // default, can be 'px' or '%'
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },

    cropActive: false,

    selectedParts: [],
    selectedPieces: [],
    selectedOtherLabels: [],
  };

  componentDidMount() {
    this.getDossiers(null, 10, 0, null, null);
    this.getMarques();
  }

  //=| Set States |================================================//

  setSelectedDossier = (value) => {
    this.setState({ selectedDossier: value });
    this.setState({ fullSizeImage: null });
    this.getPieces();
    this.getImages();
    this.resetAll();

    if(this.state.dossiers.data.indexOf(this.state.selectedDossier) == (this.state.dossiers.data.length-2)) {
      this.getDossiers("add", 10, this.state.dossiers.data.length, this.state.selectedMarque, this.state.selectedModel);
    }
  };
  setDossiers_count_0 = (value) => {
    this.setState({ dossiers_count_0: value });
  };
  setSelectedMarque = (value) => {
    this.setState({ selectedMarque: value });
    this.getModels();
    this.getDossiers(null, 10, 0, value, null);
  };
  setSelectedModel = (value) => {
    this.setState({ selectedModel: value });
    this.getDossiers(null, 10, 0, null, value);
  };
  setLoading_images = (value) => {
    this.setState({ loading_images: value });
  };
  setLoading_fullSizeImage = (value) => {
    this.setState({ loading_fullSizeImage: value });
  };
  setLoading_pieces = (value) => {
    this.setState({ loading_pieces: value });
  };

  setRotate = (value) => {
    this.setState({ rotate: value });
  };
  setZoom = (value) => {
    if (value < 0.5) {
      this.setState({ zoom: 0.5 });
    } else if (value > 3) {
      this.setState({ zoom: 3 });
    } else {
      this.setState({ zoom: value });
    }
  };

  setCrop = (value) => {
    this.setState({ crop: value });
  };
  setCropActive = (value) => {
    if (this.setState.cropActive === true) {
      this.setState({
        corp: {
          unit: "%", // default, can be 'px' or '%'
          x: 0,
          y: 0,
          width: 1,
          height: 1,
        },
      });
    }
    this.setState({ cropActive: value });
  };
  setCoordinates = (value) => {
    this.setState({ coordinates: value });
  };
  setImg_width = (value) => {
    this.setState({ img_width: value });
  };
  setImg_height = (value) => {
    this.setState({ img_height: value });
  };

  setSelectedParts = (value) => {
    this.setState({ selectedParts: value });
  };
  setSelectedPieces = (value) => {
    this.setState({ selectedPieces: value });
  };
  setSelectedOtherLabels = (value) => {
    this.setState({ selectedOtherLabels: value });
  };
  setProcessedImages = (value) => {
    this.setState({ processedImages: value });
  };

  //=| Auxilary |================================================//

  rotateImage = (imageBase64, rotation) => {
    this.setState({ loading_fullSizeImage: true }, () => {
      var img = new Image();
      img.src = "data:image/png;base64," + imageBase64;
      img.onload = () => {
        var canvas = document.createElement("canvas");
        const maxDim = Math.max(img.height, img.width);
        // if ([90, 270].indexOf(rotation) > -1) {
        //   canvas.width = img.height;
        //   canvas.height = img.width;
        // } else {
        //   canvas.width = img.width;
        //   canvas.height = img.height;
        // }
        canvas.width = img.height;
        canvas.height = img.width;
        var ctx = canvas.getContext("2d");
        if (rotation === "right") {
          ctx.setTransform(1, 0, 0, 1, img.height / 2, img.height / 2);
          ctx.rotate(90 * (Math.PI / 180));
          ctx.drawImage(img, -img.height / 2, -img.height / 2);
        }
        if (rotation === "left") {
          ctx.setTransform(1, 0, 0, 1, img.width / 2, img.width / 2);
          ctx.rotate(-90 * (Math.PI / 180));
          ctx.drawImage(img, -img.width / 2, -img.width / 2);
        }
        const newFullSizeImage = this.state.fullSizeImage;
        newFullSizeImage.fullsize = canvas
          .toDataURL("image/png")
          .split("base64,")[1];
        this.setState({ fullSizeImage: newFullSizeImage });
      };
      this.setState({ loading_fullSizeImage: false });
    });
  };
  resetAll = () => {
    this.setState({
      coordinates: [],
      selectedParts: [],
      selectedPieces: [],
      selectedOtherLabels: [],
      rotate: 0,
      zoom: 1,
    });
  };

  selectPart = (codeCroquis) => {
    console.log(codeCroquis);
    let newArray = [];
    if (this.state.selectedParts.includes(codeCroquis)) {
      newArray = this.state.selectedParts.filter(
        (item) => item !== codeCroquis
      );
    } else {
      newArray = this.state.selectedParts.concat(codeCroquis);
    }
    this.setSelectedParts(newArray);

    // if (this.state.coordinates.length > 0) {
    //   this.state.coordinates[this.state.coordinates.length - 1].parts.push(
    //     codeCroquis
    //   );
    // }

    // this.getRelatedPieces(codeCroquis, 'dl_approach');
    this.getRelatedPiece(codeCroquis);
  };
  selectOtherLabel = (value) => {
    console.log(value);
    let newArray = [];
    if (this.state.selectedOtherLabels.includes(value)) {
      newArray = this.state.selectedOtherLabels.filter(
        (item) => item !== value
      );
    } else {
      newArray = this.state.selectedOtherLabels.concat(value);
    }
    this.setSelectedOtherLabels(newArray);
  };
  selectPiece = (codeArticle) => {
    console.log(codeArticle);
    let newArray = [];
    if (this.state.selectedPieces.includes(codeArticle)) {
      newArray = this.state.selectedPieces.filter(
        (item) => item !== codeArticle
      );
    } else {
      newArray = this.state.selectedPieces.concat(codeArticle);
    }
    this.setSelectedPieces(newArray);

    // if (this.state.coordinates.length > 0) {
    //   this.state.coordinates[this.state.coordinates.length - 1].pieces.push(
    //     codeArticle
    //   );
    // }

    const pieceX = this.state.pieces.find((p) => p.codeArticle == codeArticle);
    this.getRelatedPart(pieceX.codeCroquis);
  };

  //=| API Calls |================================================//

  // === Dossier :
  getDossiers = (type, take, skip, marque, model) => {
    let payload = {};
    if (marque) {
      payload = {
        marque: [marque],
      };
    }
    if (model) {
      payload = {
        model: [model],
      };
    }
    this.setState({ loading_dossiers: true }, () => {
      axios
        .post(
          `https://server-test.expertisapi.ma/imagex/api/Ged/Dossier/Search?Take=${take}&Skip=${skip}`,
          payload
        )
        .then((res) => {
          const data = res.data;
          if (type && type == "add") {
            const newData = this.state.dossiers;
            const newArr = newData.data.concat(data.data);
            newData.data = newArr;
            this.setState({ dossiers: newData });
          } else {
            if (data.count > 0) {
              this.setState({ dossiers: data });
              this.setSelectedDossier(data.data[0]);
            } else {
              console.warn("Pas de dossiers");
              this.setState({ dossiers_count_0: true });
            }
          }
          console.warn("Dossiers: ",this.state.dossiers.data.length);
          this.setState({ loading_dossiers: false });
        });
    });
  };
  getMarques = () => {
    this.setState({ loading_marques: true }, () => {
      axios
        .get(`https://server-test.expertisapi.ma/imagex/Structure/Marques`)
        .then((res) => {
          const data = res.data;
          this.setState({ marques: data });
          this.setState({ loading_marques: false });
          this.getDossiers("10", "0", data.marque, null);
        });
    });
  };
  getModels = () => {
    this.setState({ loading_models: true }, () => {
      axios
        .get(
          `https://server-test.expertisapi.ma/imagex/Structure/Models?marque=${this.state.selectedMarque}`
        )
        .then((res) => {
          const data = res.data;
          this.setState({ models: data });
          this.setState({ loading_models: false });
        });
    });
  };
  getPieces = () => {
    this.setState({ loading_pieces: true }, () => {
      axios
        .get(
          `https://server-test.expertisapi.ma/imagex/api/Pieces/PiecesDossier?codeExpert=${this.state.selectedDossier.codeExpert}&numRequete=${this.state.selectedDossier.numRequete}`
        )
        .then((res) => {
          const data = res.data;
          this.setState({ pieces: data });
          this.setState({ loading_pieces: false });
        });
    });
  };
  getImages = () => {
    this.setState({ loading_images: true }, () => {
      axios
        .get(
          `https://server-test.expertisapi.ma/imagex/api/Ged/Dossier/AvantReparation/ParDossier?codeExpert=${this.state.selectedDossier.codeExpert}&numRequete=${this.state.selectedDossier.numRequete}`
        )
        .then((res) => {
          const data = res.data;
          this.setState({ images: data });
          this.setState({ loading_images: false });
          // this.getFullSizeImage(this.state.images[0].fileName);
        });
    });
  };
  getFullSizeImage = (Filename, idImage) => {
    this.setState({end_of_images: false});
    console.log(idImage);
    this.resetAll();
    this.setState({ loading_fullSizeImage: true }, () => {
      if(idImage != "") {
        axios
        .get(
          `https://server-test.expertisapi.ma/imagex/api/Ged/Embedding/Fullsize?idImage=${idImage}`
        )
        .then((res) => {
          const data = res.data;
          const Image = {
            fullsize: data,
            fileName: Filename,
          }
          this.setState({ fullSizeImage: Image });
          this.setState({ loading_fullSizeImage: false });
          //----------------------
          var myImg = document.getElementById("main_img");
          if (myImg) {
            this.setImg_width(myImg.clientWidth);
            this.setImg_height(myImg.clientHeight);
          }
          //----------------------
          this.readLabels(idImage);
          this.readClassification(idImage);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      else {
        axios
        .get(
          `https://server-test.expertisapi.ma/imagex/api/Ged/Dossier/FullSize?codeExpert=${this.state.selectedDossier.codeExpert}&numRequete=${this.state.selectedDossier.numRequete}&Filename=${Filename}`
        )
        .then((res) => {
          const data = res.data;
          this.setState({ fullSizeImage: data });
          this.setState({ loading_fullSizeImage: false });
          //----------------------
          var myImg = document.getElementById("main_img");
          if (myImg) {
            this.setImg_width(myImg.clientWidth);
            this.setImg_height(myImg.clientHeight);
          }
          //----------------------
          this.readLabels(idImage);
          this.readClassification(idImage);
        })
        .catch((err) => {
          console.log(err);
        });
      } 
      
    });
  };
  readLabels = (idImage) => {
    axios
      .get(
        `https://server-test.expertisapi.ma/imagex/api/Ged/Labelling/MultiLabeling/Read/LabelsByImageId?imageId=${idImage}`
      )
      .then((res) => {
        const data = res.data;
        data.map((item, index) => {
          const coor = {
            x:
              item.roi_x * this.state.img_width -
              (item.roi_width * this.state.img_width) / 2,
            y:
              item.roi_y * this.state.img_height -
              (item.roi_heigth * this.state.img_height) / 2,
            width: item.roi_width * this.state.img_width,
            height: item.roi_heigth * this.state.img_height,
            id: index,
          };
          const parts = item.codeCroquis;
          const pieces = item.codeArticle;
          console.warn(item, pieces);
          this.setState({
            coordinates: this.state.coordinates.concat(coor),
            selectedParts: this.state.selectedParts.concat(parts),
            selectedPieces: this.state.selectedPieces.concat(pieces),
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  readClassification = (idImage) => {
    axios
      .get(
        `https://server-test.expertisapi.ma/imagex/api/Ged/Labelling/Classification/Read/ClassesByImageId?imageId=${idImage}`
      )
      .then((res) => {
        const data = res.data;
        if (data[0].vehicule_avec_matricule) {
          this.selectOtherLabel("vehicule_avec_matricule");
        }
        if (data[0].numero_de_chassis) {
          this.selectOtherLabel("numero_de_chassis");
        }
        if (data[0].carte_grise) {
          this.selectOtherLabel("carte_grise");
        }
        if (data[0].constat_amiable) {
          this.selectOtherLabel("constat_amiable");
        }
        if (data[0].contrat_assurance) {
          this.selectOtherLabel("contrat_assurance");
        }
        if (data[0].tableau_de_bord) {
          this.selectOtherLabel("tableau_de_bord");
        }
        if (data[0].avant_gauche) {
          this.selectOtherLabel("avant_gauche");
        }
        if (data[0].avant_droite) {
          this.selectOtherLabel("avant_droite");
        }
        if (data[0].arriere_gauche) {
          this.selectOtherLabel("arriere_gauche");
        }
        if (data[0].arriere_droite) {
          this.selectOtherLabel("arriere_droite");
        }
        if (data[0].matricule_avant) {
          this.selectOtherLabel("matricule_avant");
        }
        if (data[0].matricule_arriere) {
          this.selectOtherLabel("matricule_arriere");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // === Labelling :
  encodeImage = () => {
    console.warn(this.state.coordinates);
    console.warn("parts : " + this.state.selectedParts);
    console.warn("pieces : " + this.state.selectedPieces);
    // this.rotateImage(this.state.fullSizeImage.fullsize, this.state.rotate);
    this.setState({ loading_encoding: true }, () => {
      axios
        .post(
          `https://server-test.expertisapi.ma/imagex/api/Ged/Embedding/EncodeImage`,
          {
            codeExpert: this.state.selectedDossier.codeExpert,
            numRequete: this.state.selectedDossier.numRequete,
            imageBase64: this.state.fullSizeImage.fullsize,
            imagePath: this.state.fullSizeImage.fileName,
          }
        )
        .then(async (res) => {
          const imageId = res.data;
          await this.state.coordinates.map((c, index) => {
            this.multiLabeling(imageId, c, index);
          });
          await this.classification(imageId);
          //-----------------------------------------
          // this.state.images.map((image, index) => {
          //   if (image.fileName === this.state.fullSizeImage.fileName) {
          //     this.addToProcessedImages(index);
          //   }
          // });
          this.getImages();
          //---------------------------------------------------
          const selectedImage = this.state.images.find(
            (image, index) =>
              image.fileName == this.state.fullSizeImage.fileName
          );
          this.setState({
            selectedImageIndex: this.state.images.indexOf(selectedImage),
          });
          if(this.state.selectedImageIndex < (this.state.images.length-1)) {
            this.getFullSizeImage(
              this.state.images[this.state.selectedImageIndex + 1].fileName,
              this.state.images[this.state.selectedImageIndex + 1].idImage,
            );
          }
          else {
            this.setState({end_of_images: true});
          }
          //---------------------------------------------------
          this.setState({ loading_encoding: false });
          this.resetAll();
          //----------------------
        })
        .catch((error) => {
          console.log(error);
          this.setState({ loading_encoding: false });
        });
    });
  };
  multiLabeling = (imageId, coordinate, index) => {
    axios
      .post(
        `https://server-test.expertisapi.ma/imagex/api/Ged/Labelling/MultiLabeling/AddLabel`,
        {
          idImage: imageId,
          codeArticle: [],
          codeCroquis: [this.state.selectedParts[index]],
          roi_x: (coordinate.x + coordinate.width / 2) / this.state.img_width,
          roi_y: (coordinate.y + coordinate.height / 2) / this.state.img_height,
          roi_width: coordinate.width / this.state.img_width,
          roi_heigth: coordinate.height / this.state.img_height,
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading_encoding: false });
      });
  };
  classification = (imageId) => {
    const payload = {
      idImage: imageId,
      vehicule_avec_matricule: this.state.selectedOtherLabels.includes(
        "vehicule_avec_matricule"
      ),
      tableau_de_bord:
        this.state.selectedOtherLabels.includes("tableau_de_bord"),
      avant_gauche: this.state.selectedOtherLabels.includes("avant_gauche"),
      avant_droite: this.state.selectedOtherLabels.includes("avant_droite"),
      arriere_gauche: this.state.selectedOtherLabels.includes("arriere_gauche"),
      arriere_droite: this.state.selectedOtherLabels.includes("arriere_droite"),
      matricule_avant:
        this.state.selectedOtherLabels.includes("matricule_avant"),
      matricule_arriere:
        this.state.selectedOtherLabels.includes("matricule_arriere"),
      numero_de_chassis:
        this.state.selectedOtherLabels.includes("numero_de_chassis"),
      carte_grise: this.state.selectedOtherLabels.includes("carte_grise"),
      constat_amiable:
        this.state.selectedOtherLabels.includes("constat_amiable"),
      contrat_assurance:
        this.state.selectedOtherLabels.includes("contrat_assurance"),
    };
    axios
      .post(
        `https://server-test.expertisapi.ma/imagex/api/Ged/Labelling/Classification/AddClasse`,
        payload
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading_encoding: false });
      });
  };

  // === Pieces Clustering :
  getRelatedPieces = (codeCroquis, approach) => {
    this.setState({ loading_relatedPieces: true }, () => {
      axios
        .get(
          `http://192.168.0.224:5000/get_article?model=${approach}&codecroquis=${codeCroquis}&up_from=0.1`
        )
        .then((res) => {
          const data = res.data;
          let newArray = this.state.selectedPieces;
          data.map((item) => {
            if (this.state.selectedPieces.includes(item.CodeArticle)) {
              // newArray = newArray.filter(code => code != item.CodeArticle);
            } else {
              newArray.push(item.CodeArticle);
            }
          });
          this.setState({ selectedPieces: newArray });
          this.setState({ loading_relatedPieces: false });
          console.log(newArray);
        });
    });
  };
  getRelatedPiece = (codeCroquis) => {
    const piece = this.state.pieces.find((p) => p.codeCroquis == codeCroquis);
    let newArray = this.state.selectedPieces;
    if (this.state.selectedPieces.includes(piece.codeArticle)) {
      newArray = this.state.selectedPieces.filter(
        (code) => code != piece.codeArticle
      );
    } else {
      newArray.push(piece.codeArticle);
    }
    this.setSelectedPieces(newArray);
  };
  getRelatedPart = (codeCroquis) => {
    let newArray = this.state.selectedParts;
    if (this.state.selectedParts.includes(codeCroquis)) {
      newArray = this.state.selectedParts.filter((code) => code != codeCroquis);
    } else {
      newArray.push(codeCroquis);
    }
    this.setSelectedParts(newArray);
  };

  // === Export txt :
  export = () => {
    this.setState({ loading_export: true }, () => {
      axios
        .get(
          `https://server-test.expertisapi.ma/imagex/api/Ged/Yolo/GenerateYoloFiles`
        )
        .then((res) => {
          this.setState({ loading_export: false });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  //==================================================//

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          getPieces: this.getPieces,
          getImages: this.getImages,
          getFullSizeImage: this.getFullSizeImage,
          setDossiers_count_0: this.setDossiers_count_0,
          setLoading_images: this.setLoading_images,
          setLoading_fullSizeImage: this.setLoading_fullSizeImage,
          setLoading_pieces: this.setLoading_pieces,
          setRotate: this.setRotate,
          setZoom: this.setZoom,
          setCrop: this.setCrop,
          setCoordinates: this.setCoordinates,
          setImg_width: this.setImg_width,
          setImg_height: this.setImg_height,
          setCropActive: this.setCropActive,
          setSelectedDossier: this.setSelectedDossier,
          setSelectedMarque: this.setSelectedMarque,
          setSelectedModel: this.setSelectedModel,
          selectPart: this.selectPart,
          setSelectedParts: this.setSelectedParts,
          selectPiece: this.selectPiece,
          setSelectedPieces: this.setSelectedPieces,
          getRelatedPart: this.getRelatedPart,
          getRelatedPiece: this.getRelatedPiece,
          selectOtherLabel: this.selectOtherLabel,
          encodeImage: this.encodeImage,
          export: this.export,
          rotateImage: this.rotateImage,
          resetAll: this.resetAll,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer, DataContext };
