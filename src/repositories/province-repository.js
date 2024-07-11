import pkg from 'pg'
const { Client, Pool } = pkg;
export default class ProvinceRepository {
    async getAllAsync() {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM province');
            return result.rows;
        } catch (error) {
            console.error(error);
        } finally {
            client.release();
        }
    }
    async getByIdAsync(id) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM province WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
        } finally {
            client.release();
        }
    }
    createProvince = async (eventData) => {
        const { id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion} = eventData;
        const client = await pool.connect();
        try {
            const res = await client.query(
                'INSERT INTO province (id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion]
            );
            return res.rows[0];
        } finally {
            client.release();
        }
    };
    updateProvince = async (eventData) => {
        const { id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion} = eventData;
        const client = await pool.connect();
        try {
            const res = await client.query(
                'UPDATE province SET nombre = $1, nombreCompleto = $2, latitud = $3, longitud = $4, ordenVisualizacion = $5 WHERE id = $6 RETURNING *',
                [nombre, nombreCompleto, latitud, longitud, ordenVisualizacion, id]
            );
            return res.rows[0];
        } finally {
            client.release();
        }
    };
    deleteProvince = async (id) => {
        const client = await pool.connect();
        try {
            await client.query('DELETE FROM province WHERE id = $1', [id]);
        } finally {
            client.release();
        }
    };
}