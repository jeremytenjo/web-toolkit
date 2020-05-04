import faker from "../../../../../faker";
import schema from "../schema";
import generateStubs from "../../../../../stubs/generate";

const stub = () => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  teamId: faker.random.uuid(),
  leagueId: faker.random.uuid(),
  position: "ST",
  avatar: faker.image.image()
});

export default generateStubs(schema, stub);
