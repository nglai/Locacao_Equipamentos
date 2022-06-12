class HealthService {
    async execute(): Promise<{ healthCheck: boolean}>{
        return {
            healthCheck: true
        }
    }
}

export default new HealthService();