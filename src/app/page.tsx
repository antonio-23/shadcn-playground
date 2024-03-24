import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Recipe {
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
  id: string;
}

async function getRecipes(): Promise<Recipe[]> {
  const response = await fetch("http://localhost:4000/recipes");

  // delay response
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  return response.json();
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-3'>
        {recipes.map((recipe) => (
          <Card key={recipe.id} className='flex flex-col justify-between'>
            <CardHeader className='flex-row gap-4 items-center'>
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt='recipe img' />
                <AvatarFallback>
                  {recipe.title.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>View recipe</Button>
              {recipe.vegan && <Badge variant='secondary'>Vegan! 🌱</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
