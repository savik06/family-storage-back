import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
    private pool: Pool;

    constructor() {
        const databaseUrl = process.env.DATABASE_URL;
        
        if (!databaseUrl) {
            throw new Error('DATABASE_URL environment variable is not set');
        }

        const pool = new Pool({ 
            connectionString: databaseUrl,
        });
        
        const adapter = new PrismaPg(pool);
        super({ adapter });
        
        this.pool = pool;
    }

    async onModuleDestroy() {
        await this.pool.end();
    }
}
