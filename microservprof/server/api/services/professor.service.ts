import { Container } from "@azure/cosmos";
import cosmosDb from "../../common/cosmosdb";
import { Prof } from "../entites/prof";

class ProfessorService{
    private container:Container =
        cosmosDb.container("professor");

    async all(): Promise<Prof[]>{
        const {resources: listaProfessores}
            = await this.container.items.readAll<Prof>().fetchAll();

        return Promise.resolve(listaProfessores);
    }
}

export default new ProfessorService();
