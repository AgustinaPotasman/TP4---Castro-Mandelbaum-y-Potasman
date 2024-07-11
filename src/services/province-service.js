import ProvinceRepository from '../repositories/province-repository.js';
export default class ProvinceService {
    getAllAsync = async () => {
    const repo = new ProvinceRepository();
    const provinciasArray = await repo.getAllAsync();
    return provinciasArray;
    }
    getByIdAsync = async (id) => {
    const repo = new ProvinceRepository();
    const provinciasArray = await repo.getByIdAsync(id);
    return provinciasArray;
    }
    createProvince = async (entity) => {
        const repo = new ProvinceRepository();
    const provinciasArray = await repo.createProvince(id);
    return provinciasArray;
    }
    updateProvince = async (eventData) => {
        const repo = new ProvinceRepository();
        const EventsArray = await repo.updateProvince(eventData);
        return EventsArray;
    };
    deleteProvince= async (id) => {
        const repo = new ProvinceRepository();
        await repo.deleteProvince(id);
    };
}   