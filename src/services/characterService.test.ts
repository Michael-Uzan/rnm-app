// characterService.test.ts
import type { CharacterStatus } from "../interfaces/ICharacter";
import { characterService } from "./characterService";
import { httpService } from "./httpService";

jest.mock("./httpService"); // auto-mock httpService module

const mockedHttpService = httpService as jest.Mocked<typeof httpService>;

describe("characterService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("query", () => {
    it("calls httpService.get with correct URL and params", async () => {
      const fakeResponse = { results: [{ id: 1, name: "Rick" }] };
      mockedHttpService.get.mockResolvedValueOnce(fakeResponse);

      const params = {
        name: "Rick",
        status: "Alive" as CharacterStatus.Alive,
        page: 2,
      };

      const result = await characterService.query(params);

      expect(mockedHttpService.get).toHaveBeenCalledWith(
        expect.stringContaining("character"),
        {
          page: 2,
          name: "Rick",
          status: "Alive",
        }
      );

      expect(result).toEqual(fakeResponse);
    });

    it("uses default page=1 if not provided", async () => {
      const fakeResponse = { results: [] };
      mockedHttpService.get.mockResolvedValueOnce(fakeResponse);

      await characterService.query({ name: "Morty" });

      expect(mockedHttpService.get).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ page: 1 })
      );
    });
  });
});
