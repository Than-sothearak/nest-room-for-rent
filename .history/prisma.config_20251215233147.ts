import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: "mongodb+srv://nextroomforrent:kDcabf4ZDk6n0Mtj@cluster0.jializ4.mongodb.net/nestdb?retryWrites=true&w=majority&appName=Cluster0",
  
  },
});
