import { Field, ID, InterfaceType, ObjectType } from '@nestjs/graphql';

// @InterfaceType({
@InterfaceType('IRecipeCustomName', {
  description: 'example interface',
  resolveType: value => {
    return Recipe;
  },
})
export abstract class IRecipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}

@ObjectType({ implements: IRecipe, description: 'recipe object type' })
export class Recipe {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}
