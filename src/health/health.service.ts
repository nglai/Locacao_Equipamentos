import { BaseService } from '../common/base.service'

export class HealthService implements BaseService {
    async execute(): Promise<{ healthCheck: boolean}>{
        return {
            healthCheck: true
        }
    }
}