import client from "../database";


export type Project = {
    id?:number;
    title: string;
    description:string;
    technologies :string
    lien:string;
    createdBy:number;
}

export class ProjectStore{

    async create(p:Project):Promise<Project>{
        try {
            const conn = await client.connect()
            const sql = "INSERT INTO projects(title,description,technologies,lien,createdBy) VALUES($1,$2,$3,$4,$5) RETURNING *;"
            const result = await conn.query(sql,[p.title,p.description,p.technologies,p.lien,p.createdBy]);
            
            const data = result.rows[0]
            conn.release();
            return data;

            
        } catch (error) {
            throw new Error(`Failed to create project ${error}`);
            
        }
    }

    async update(p:Project):Promise<Project>{
        try {
            const conn = await client.connect();
            const sql = "UPDATE projects SET title=$1, description=$2,technologies=$3,lien=$4 WHERE id=$5 RETURNING *;";
            const result = await conn.query(sql, [p.title,p.description,p.technologies,p.lien,p.id]);
            conn.release();
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Failed to update project ${error}`);
            
        }
    }

    async index():Promise<Project[]>{
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM projects;";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
            
        } catch (error) {
            throw new Error(`Failed to show projects ${error}`);
            
        }
    }

    async show(id:number):Promise<Project>{
        try {
            const conn = await client.connect();
            const sql = "SELECT * FROM projects WHERE id=$1;";
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows[0]
            
        } catch (error) {
            throw new Error(`Failed to show project ${error}`);
            
        }
    }

    async delete(id:number):Promise<Project>{
        try {
            const conn = await client.connect();
            const sql = "DELETE FROM projects WHERE id=$1;";
            const result = await conn.query(sql,[id]);
            conn.release();
            return result.rows[0];
            
        } catch (error) {
            throw new Error(`Failed to delete project ${error}`);
        }
    }
}

