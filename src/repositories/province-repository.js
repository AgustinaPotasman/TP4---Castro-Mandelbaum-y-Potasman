import pkg from 'pg'
const { Client, Pool } = pkg;
export default class ProvinceRepository {
getAllAsync = async () => {
    const provinciasArray = [
        {
            id: 1,
            nombre: "BS",
            nombreCompleto: "Buenos Aires",
            latitud: -34.603722,
            longitud: -58.381592,
            ordenVisualizacion: 1
        },
        {
            id: 2,
            nombre: "CABA",
            nombreCompleto: "Ciudad Autónoma de Buenos Aires",
            latitud: -34.603722,
            longitud: -58.381592,
            ordenVisualizacion: 2
        },
        {
            id: 3,
            nombre: "CAT",
            nombreCompleto: "Catamarca",
            latitud: -28.469581,
            longitud: -65.784356,
            ordenVisualizacion: 3
        },
        {
            id: 4,
            nombre: "CHA",
            nombreCompleto: "Chaco",
            latitud: -26.332202,
            longitud: -60.221123,
            ordenVisualizacion: 4
        },
        {
            id: 5,
            nombre: "CHU",
            nombreCompleto: "Chubut",
            latitud: -43.293168,
            longitud: -65.102280,
            ordenVisualizacion: 5
        },
    ];
return provinciasArray;
    }
getByIdAsync = async (id) => {
    const ID = ValidacionesHelper.getFloatOrDefault(id, 0);
    for (let i = 0; i <= provinciasArray.provinciasArray.length; i++) {
            if (provinciasArray.provinciasArray[i].id == ID) {
                console.log("hola");
                return provinciasArray.provinciasArray[i];
            }
    }
    };
}
createAsync = async (entity) => {
}
updateAsync = async (entity) => {}
deleteByIdAsync = async (id) => {}
