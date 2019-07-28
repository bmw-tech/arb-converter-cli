import { HierarchicalJsonConverter } from "./hierarchical-json.converter";
import * as fs from "fs";
import * as _ from "lodash";
import * as rimraf from "rimraf";
import * as path from "path";
import chalk from "chalk";

describe("HierarchicalJsonConverter", () => {
  const jsonDirectory = "./assets/to-arb/";
  const expectedArbFiles = "./assets/to-arb";
  const testDirectory = "./tmp";

  afterAll(async () => {
    rimraf(testDirectory, async error => {
      if (!_.isNil(error)) {
        console.log(chalk.red("Failed deleting the temporary directory"));
        console.log(error);
        fail();
      }
    });
  });

  describe("convertToArb", () => {
    it("should generate as many ARB files as JSON files given", () => {
      const lastModified = "2019-07-27T20:48:48.159Z";
      const converter = new HierarchicalJsonConverter(
        jsonDirectory,
        testDirectory,
        lastModified
      );
      converter.convertToArb();
      const generatedFiles = fs.readdirSync(testDirectory);
      expect(generatedFiles.length).toEqual(2);
      const expectedEnUsArb = fs.readFileSync(
        path.join(expectedArbFiles, "intl_en_US.arb"),
        "utf8"
      );
      const expectedEsEsArb = fs.readFileSync(
        path.join(expectedArbFiles, "intl_es_ES.arb"),
        "utf8"
      );
      const generatedEnUsArb = fs.readFileSync(
        path.join(testDirectory, "intl_en_US.arb"),
        "utf8"
      );
      const generatedEsEsArb = fs.readFileSync(
        path.join(testDirectory, "intl_es_ES.arb"),
        "utf8"
      );
      expect(expectedEnUsArb).toEqual(generatedEnUsArb);
      expect(expectedEsEsArb).toEqual(generatedEsEsArb);
    });
  });
});
