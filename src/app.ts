import Express, {Application , Request , Response} from 'express'

export const app = Express();
// inference de type : lorsque le langage devine le type d'une variable
// a partir de donner qui sert a l'initialisation
//Nous allons créer notre première route
// une route: l'association Method http + URL 
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello from my REST API");
  });
  