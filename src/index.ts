import * as express from 'express';

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Start!');
});

app.listen(4000, () => console.log('Start!'));