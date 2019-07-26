import { ArbConverter } from "../src/commands";
import * as fs from "fs";

describe("ArbConverter", () => {
  const arbTestFile = "./test/assets/intl_messages.arb";
  const hierarchicalJsonTestFile = "./test/assets/intl_messages_test.json";
  const expectedJsonFile = "./test/assets/intl_messages.json";

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
