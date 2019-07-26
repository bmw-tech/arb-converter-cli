import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";

export class ArbConverter {
  constructor(private arbFileLocation: string, private outputDir: string) {}

  convertToHierarchicalJson() {
    const content = fs.readFileSync(path.join(this.arbFileLocation), "utf8");
    const arbInJson = JSON.parse(content);
    const resourceIdKeys = Object.keys(arbInJson).filter(
      key => !_.startsWith(key, "@")
    );
    let resources: Record<string, string> = {};
    resourceIdKeys.forEach(key => {
      resources[key] = arbInJson[key];
    });
    const hierarchicalJson = JSON.stringify(resources);
    fs.writeFileSync(this.outputDir, hierarchicalJson);
  }
}
