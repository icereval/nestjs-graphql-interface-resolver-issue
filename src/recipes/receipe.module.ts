import { Module } from '@nestjs/common';
import { IRecipesResolver } from './irecipes.resolver';

@Module({
  providers: [
    IRecipesResolver,
  ],
})
export class RecipesModule {}
