import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { IRecipe, Recipe } from './models/recipe';

@Resolver((of) => IRecipe)
export class IRecipesResolver {
  @Query((returns) => IRecipe, { description: 'get recipe by id' })
  async recipe(
    @Args('id', {
      defaultValue: '1',
      description: 'recipe id',
    })
      id: string,
  ): Promise<IRecipe> {
    return new Recipe();
  }

  @ResolveField('interfaceResolver', () => Boolean)
  interfaceResolver(
    @Args('arg', { type: () => Number, nullable: true }) arg: number,
  ) {
    return true;
  }
}
