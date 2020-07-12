import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/receipe.module';

@Module({
  imports: [
    RecipesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
