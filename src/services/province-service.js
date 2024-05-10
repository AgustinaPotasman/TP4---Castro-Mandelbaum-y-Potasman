import ProvinceRepository from '../repositories/province-repository.js';
export default class ProvinceService {
    getAllAsync = async () => {
    const repo = new ProvinceRepository();
    const provinciasArray = await repo.getAllAsync();
    return provinciasArray;
    }
    getByIdAsync = async (id) => {
        await new ProvinceRepository().getByIdAsync(id);
    }
    createAsync = async (entity) => {
        await new ProvinceRepository().createAsync(entity);
    }
    updateAsync = async (entity) => {}
    deleteByIdAsync = async (id) => {}
}   