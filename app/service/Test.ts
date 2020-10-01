import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    let id = 0;
    await this.ctx.model.Test
      .updateOne({ id: 0 }, { $inc: { count: 1 } })
      .then((resolve: any) => {
        id = resolve[0].id;
      });
    return `${id}, ${name}`;
  }
}
