import CreateTODODTO from "../../domain/dto/CreateTODODTO";
import ITODO from "../../domain/models/ITODO";
import connection from "../database/connection";

export default {
  async fetchAll(): Promise<ITODO[]> {
    const result = await connection<ITODO>('todo')
      .select('*');

    return result;
  },

  async create(data: CreateTODODTO): Promise<ITODO> {
    const result = await connection<ITODO>('todo')
      .insert(data)
      .returning('*');

    return result[0];
  },

  async update(data: UpdateTODODTO, todoId: number): Promise<boolean> {
    await connection('todo')
      .update({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .where('id', '=', todoId);

    return true;
  },

  async delete(todoId: number): Promise<boolean> {
    await connection('todo')
      .delete()
      .where('id', '=', todoId);

    return true;
  }
}
