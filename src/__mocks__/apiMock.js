import { rest } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ user: 'John Smith' }), ctx.delay(100));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());