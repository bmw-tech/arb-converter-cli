import { ArbConverter } from "..";
import * as fs from "fs";

describe("ArbConverter", () => {
  const arbTestFile = "./assets/from-arb/intl_messages.arb";
  const hierarchicalJsonTestFile = "./assets/from-arb/intl_messages_test.json";
  const expectedJsonFile = "./assets/from-arb/intl_messages.json";

  afterAll(() => {
    fs.unlinkSync(hierarchicalJsonTestFile);
  });

  describe("toHierarchicalJson", () => {
    it("should generate a valid Hierarchical JSON file", () => {
      const arbConverter = new ArbConverter(
        arbTestFile,
        hierarchicalJsonTestFile
      );
      arbConverter.convertToHierarchicalJson();
      const generated = fs.readFileSync(hierarchicalJsonTestFile).toString();
      const expected = fs.readFileSync(expectedJsonFile).toString();
      expect(generated).toEqual(expected);
    });
  });
});
